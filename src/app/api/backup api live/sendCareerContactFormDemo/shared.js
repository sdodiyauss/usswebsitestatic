import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { executeQuery } from "../../../lib/db";
import fs from "fs/promises";
import path from "path";

dotenv.config();

async function persistUpload(buffer, originalName) {
  try {
    const uploadsDir = path.join(process.cwd(), "uploads", "demo");
    await fs.mkdir(uploadsDir, { recursive: true });
    const timeSafe = Date.now();
    const safeName = String(originalName || "upload").replace(
      /[^a-zA-Z0-9._-]/g,
      "_"
    );
    const uniqueName = `${timeSafe}_${safeName}`;
    const destPath = path.join(uploadsDir, uniqueName);
    await fs.writeFile(destPath, buffer);
    return {
      fileName: uniqueName,
      filePath: `/uploads/demo/${uniqueName}`,
    };
  } catch (error) {
    console.error("Failed to persist demo uploaded file:", error);
    return {
      fileName: String(originalName || "upload"),
      filePath: null,
    };
  }
}

export async function processDemoCareerForm(formData) {
  const getValue = (key) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : value ? String(value) : "";
  };

  const firstName = getValue("firstName");
  const lastName = getValue("lastName");
  const email = getValue("email");
  const contactNo = getValue("contactNo");
  const designation = getValue("designation");
  const experience = getValue("experience");
  const file = formData.get("file");

  let attachments = [];
  let fileName = "";
  let filePath = "";

  if (file && typeof file.arrayBuffer === "function") {
    const buffer = Buffer.from(await file.arrayBuffer());
    const originalName = String(file.name || "upload");
    const persisted = await persistUpload(buffer, originalName);
    fileName = persisted.fileName;
    filePath = persisted.filePath || "";

    attachments.push({
      filename: originalName,
      content: buffer,
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  const mailToAddresses = process.env.MAIL_TO
    ? process.env.MAIL_TO.split(",")
        .map((demoEmail) => demoEmail.trim())
        .filter((demoEmail) => demoEmail && demoEmail.includes("@"))
    : [];

  const mailOptions = {
    from: process.env.MAIL_FROM_ADDRESS,
    to: mailToAddresses,
    subject: `Career Inquiry (Demo): ${designation || "No Designation"}`,
    text: `
        DEMO SUBMISSION
        ---------------
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Contact No: ${contactNo}
        Designation: ${designation}
        Experience: ${experience}
        ${fileName ? `Persisted File Name: ${fileName}` : ""}
      `,
    attachments,
  };

  await transporter.sendMail(mailOptions);

  try {
    const insertQuery = `
        INSERT INTO contact_career_submissions_demo 
        (first_name, last_name, email, contact_no, designation, experience, file_name, file_path)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

    const insertParams = [
      firstName,
      lastName,
      email,
      contactNo,
      designation,
      experience,
      fileName || null,
      filePath || null,
    ];

    await executeQuery(insertQuery, insertParams);
    console.log("Demo data saved to database successfully");
  } catch (dbError) {
    console.error("Demo database error:", dbError);
  }

  return {
    success: true,
    message: "Demo form has been successfully sent",
  };
}

