import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { executeQuery } from "../../../lib/db";

// Load environment variables from .env file
dotenv.config();

export async function POST(request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const contactNo = formData.get("contactNo");
    const subject = formData.get("subject");
    const projectStatus = formData.get("projectStatus");
    const aboutProject = formData.get("aboutProject");
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


    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, // smtp.office365.com
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false, // MUST be false for STARTTLS
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true // usually safe for Office365
        // ciphers: 'SSLv3'   // only add if you still get cipher errors
      }
    });

    // Parse multiple email addresses from MAIL_TO (comma-separated)
    // Supports formats like: "email1@domain.com,email2@domain.com" or "email1@domain.com, email2@domain.com"
    const mailToAddresses = process.env.MAIL_TO
      ? process.env.MAIL_TO
        .split(',') // Split by comma
        .map(email => email.trim()) // Remove whitespace
        .filter(email => email && email.includes('@')) // Filter out empty strings and validate basic email format
      : [];

    const mailOptions = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: mailToAddresses,
      subject: "Inquiry For General",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Contact No: ${contactNo}
        Subject: ${subject || "-"}
        Project Status: ${projectStatus || "-"}
        About Project: ${aboutProject || "-"}
      `,
    };

    await transporter.sendMail(mailOptions);

    // =============================
    // AUTO-REPLY EMAIL TO USER
    // =============================
    const autoReplyOptions = {
      from: process.env.MAIL_FROM_ADDRESS,
      to: email, // user's email
      subject: "Thank You for Contacting Us — Universal Stream Solution Pvt Ltd",
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
                            We’ve Received Your Message
                        </td>
                    </tr>

                    <!-- MAIN PARAGRAPH -->
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                            Thank you for contacting Universal Stream Solution. Your message has been successfully received, and we truly appreciate your interest in connecting with us.
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                             Our team is currently reviewing the details you shared. One of our experts will reach out to you within 24–48 hours to assist you and provide the next steps.
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                            If you’d like to share any additional information—such as documents, links, or clarifications—feel free to reply to this email anytime.
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size:15px; color:#333333; padding:8px 40px; line-height:24px;">
                            You can learn more about us at: <a href="https://www.universalstreamsolution.com"
                                target="_blank"
                                style="color:#03B0EF; text-decoration: underline;"><em>www.universalstreamsolution.com</em></a>
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

    // Store data in database (no extra fields)
    try {
      const insertQuery = `
        INSERT INTO general_contact_submissions 
        (first_name, last_name, email, contact_no, subject, project_status, about_project)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      const insertParams = [
        firstName,
        lastName,
        email,
        contactNo,
        subject || null,
        projectStatus || null,
        aboutProject || null,
      ];

      await executeQuery(insertQuery, insertParams);
    } catch (dbError) {
      console.error("Database error (general_contact_submissions):", dbError);
      // Do not fail the response if DB insert fails
    }

    return new Response(
      JSON.stringify({ success: true, message: "Your form has been successfully sent" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: `Failed to send form: ${error.message}` }),
      { status: 500 }
    );
  }
}


