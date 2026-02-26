import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { executeQuery } from "../../../lib/db";
import fs from "fs/promises";
import path from "path";

// Load environment variables from .env file
dotenv.config();

export const runtime = "nodejs";

async function persistUpload(buffer, originalName) {
  try {
    const uploadsDir = path.join(process.cwd(), "uploads");
    await fs.mkdir(uploadsDir, { recursive: true });
    const timeSafe = Date.now();
    const safeName = String(originalName || "upload").replace(/[^a-zA-Z0-9._-]/g, "_");
    const uniqueName = `${timeSafe}_${safeName}`;
    const destPath = path.join(uploadsDir, uniqueName);
    await fs.writeFile(destPath, buffer);
    return {
      fileName: uniqueName,
      filePath: `/uploads/${uniqueName}`,
    };
  } catch (error) {
    console.error("Failed to persist uploaded file:", error);
    return {
      fileName: String(originalName || "upload"),
      filePath: null,
    };
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Get all inputs from the form
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const contactNo = formData.get("contactNo");
    const designation = formData.get("designation");
    const experience = formData.get("experience");
    // const captchaToken = formData.get("captchaToken");

    // Verify reCAPTCHA token
    // if (!captchaToken) {
    //   return new Response(
    //     JSON.stringify({ success: false, message: "reCAPTCHA verification is required" }),
    //     { status: 400 }
    //   );
    // }

    // const captchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    // });

    // const captchaResult = await captchaResponse.json();

    // if (!captchaResult.success) {
    //   return new Response(
    //     JSON.stringify({ success: false, message: "reCAPTCHA verification failed" }),
    //     { status: 400 }
    //   );
    // }

    // Get uploaded file
    const file = formData.get("file");
    let attachments = [];
    let fileName = "";
    let filePath = "";

    // Handle file attachments if provided
    if (file && typeof file.arrayBuffer === "function") {
      const buffer = Buffer.from(await file.arrayBuffer());
      const originalName = String(file.name || "upload");

      // Persist file to disk (best-effort)
      const persisted = await persistUpload(buffer, originalName);
      fileName = persisted.fileName;
      filePath = persisted.filePath || "";

      // Keep email attachment as before
      attachments.push({
        filename: originalName,
        content: buffer,
      });
    }

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // e.g. smtp.office365.com
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

    // Parse multiple email addresses from MAIL_TO (comma-separated)
    // Supports formats like: "email1@domain.com,email2@domain.com" or "email1@domain.com, email2@domain.com"
    const mailToAddresses = process.env.MAIL_TO
      ? process.env.MAIL_TO
        .split(',') // Split by comma
        .map(email => email.trim()) // Remove whitespace
        .filter(email => email && email.includes('@')) // Filter out empty strings and validate basic email format
      : [];

    // Email options, including subject and body
    const mailOptions = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: mailToAddresses,
      subject: `Career Inquiry: ${designation}`,
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Contact No: ${contactNo}
        Designation: ${designation}
        Experience: ${experience}
        ${fileName ? `Attached File: ${fileName}` : ''}
      `,
      attachments,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // =============================
    // AUTO-REPLY EMAIL TO USER
    // =============================
    const autoReplyOptions = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: email, // user's email
      subject: "Thank You for Applying — Universal Stream Solution Pvt Ltd",
      html: `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <title>Email Template</title>

    <style>
        body,
        table,
        td {
            font-family: Arial, Helvetica, sans-serif !important;
        }

        a {
            text-decoration: none;
        }
    </style>
</head>

<body style="margin:0; padding:0; background:#ffffff; font-family:Helvetica, Arial, sans-serif;">

    <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
        <tr>
            <td align="center" style="padding: 10px 15px;">

                <table width="600" border="0" cellspacing="0" cellpadding="0"
                    style="max-width:600px; width:100%; background:#ffffff; border-radius:6px; overflow:hidden; border: 1px solid #D9D9D9;">

                    <!-- TOP LOGO SECTION -->
                    <tr bgcolor="#EAF9FF">
                        <td align="center" style="padding: 28px;">
                            <img src="https://www.universalstreamsolution.com/images/uss-logo-email.svg" width="180" alt="USS Logo"
                                style="display:block; width:180px; max-width:180px; height:auto;">
                        </td>
                    </tr>

                    <!-- TITLE -->
                    <tr>
                        <td style="font-size:24px; color:#4E4E4E; font-weight:600; padding:24px 40px 15px 40px;">
                            We've Received Your Message
                        </td>
                    </tr>

                    <!-- MAIN PARAGRAPH -->
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                            Thank you for applying to Universal Stream Solution. Your application has been successfully submitted, and we truly appreciate your interest in joining our team.
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                             Our HR team is currently reviewing the details you shared. If your experience aligns with our open positions, one of our recruiters will contact you within 24-48 hours to discuss the next steps.
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                            If you have any additional information to share, feel free to reach out to our support team at sales@universalstreamsolution.com
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                            Explore more opportunities at: <a href="https://www.universalstreamsolution.com/career"
                                target="_blank"
                                style="color:#03B0EF; text-decoration: underline;"><em>https://www.universalstreamsolution.com/career</em></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:10px 40px;">
                                <tr>
                                    <td style="border-bottom:1px solid #D9D9D9;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>


                    <!-- SOCIAL ICONS -->
                    <tr>
                        <td align="center" style="padding:10px 40px;">
                            <table border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td style="padding: 0 6px;">
                                        <a href="https://www.linkedin.com/company/universalstreamsolution/posts/?feedView=all"
                                            target="_blank"><img src="https://www.universalstreamsolution.com/images/icon-linkedin.svg" width="26"
                                                style="display:block;"></a>
                                    </td>
                                    <td style="padding: 0 6px;">
                                        <a href="https://www.facebook.com/universalstreamsolution" target="_blank"><img
                                                src="https://www.universalstreamsolution.com/images/icon-facebook.svg" width="26"
                                                style="display:block;"></a>
                                    </td>
                                    <td style="padding: 0 6px;">
                                        <a href="https://www.instagram.com/universalstreamsolution/"
                                            target="_blank"><img src="https://www.universalstreamsolution.com/images/icon-instagram.svg" width="26"
                                                style="display:block;"></a>
                                    </td>
                                    <td style="padding: 0 6px;">
                                        <a href="https://www.behance.net/ussllc" target="_blank"><img
                                                src="https://www.universalstreamsolution.com/images/icon-behance.svg" width="26"
                                                style="display:block;"></a>
                                    </td>
                                    <td style="padding: 0 6px;">
                                        <a href="https://dribbble.com/universalstreamsolution" target="_blank"><img
                                                src="https://www.universalstreamsolution.com/images/icon-dribbble.svg" width="26"
                                                style="display:block;"></a>
                                    </td>
                                    <td style="padding: 0 6px;">
                                        <a href="https://x.com/ussllc_" target="_blank"><img
                                                src="https://www.universalstreamsolution.com/images/icon-twitter.svg" width="26"
                                                style="display:block;"></a>
                                    </td>
                                    <td style="padding: 0 6px;">
                                        <a href="https://in.pinterest.com/universalstreamsolution/" target="_blank"><img
                                                src="https://www.universalstreamsolution.com/images/icon-pintrest.svg" width="26"
                                                style="display:block;"></a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:10px 40px;">
                                <tr>
                                    <td style="border-bottom:1px solid #D9D9D9;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>


                    <!-- FOOTER TEXT -->
                    <tr>
                        <td align="center" style="font-size:12px; color:#4E4E4E; line-height:16px; padding:8px 40px;">
                            © Copyright 2025 Universal Stream Solution Pvt Ltd. All rights reserved.
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="font-size:12px; color:#4E4E4E; line-height:16px; padding:8px 80px;">
                            This is a system-generated message from Universal Stream Solution. For inquiries, updates, or assistance related to our services, feel free to reach out to our support team at sales@universalstreamsolution.com. We are committed to providing a secure, reliable, and transparent communication experience.
                        </td>
                    </tr>

                    <!-- POLICY LINKS -->
                    <tr>
                        <td align="center" style="padding:10px 40px;">
                            <table border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center"
                                        style="font-size:12px; color:#9B9B9B; padding:15px 15px 24px 20px;">
                                        <a href="https://www.universalstreamsolution.com/privacy-policy" target="_blank" 
                                            style="color:#9B9B9B; text-decoration: underline;">Privacy
                                            Policy</a>
                                    </td>
                                    <td align="center"
                                        style="font-size:12px; color:#9B9B9B; padding:15px 15px 24px 15px;">
                                        <a href="https://www.universalstreamsolution.com/terms-conditions" target="_blank"
                                            style="color:#9B9B9B; text-decoration: underline;">Terms &
                                            Conditions</a>
                                    </td>
                                    <td align="center"
                                        style="font-size:12px; color:#9B9B9B; padding:15px 20px 24px 15px;">
                                        <a href="https://www.universalstreamsolution.com/security-risk" target="_blank"
                                            style="color:#9B9B9B; text-decoration: underline;">Security Policy</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>

</html>
  `,
    };

    // Send thank-you email to user
    await transporter.sendMail(autoReplyOptions);
    console.log(`Auto-reply email sent to ${email}`);

    // Store data in database
    try {
      const insertQuery = `
        INSERT INTO contact_career_submissions 
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
        filePath || null
      ];

      await executeQuery(insertQuery, insertParams);
      console.log('Data saved to database successfully');
    } catch (dbError) {
      console.error('Database error:', dbError);
    }

    // Return a successful response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Your form has been successfully sent",
      }),
      { status: 200 }
    );
  } catch (error) {
    // Log full error for debugging
    console.error("Error sending email:", error);

    // Return a failed response with the error message
    return new Response(
      JSON.stringify({
        success: false,
        message: `Failed to send form: ${error.message}`,
      }),
      { status: 500 }
    );
  }
}
