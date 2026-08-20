import { Resend } from "resend";
import { LOGO_BASE64 } from "./logoBase64.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (request) => {
  if (request.method !== "POST") {
    return Response.json(
      {
        success: false,
        message: "Method Not Allowed",
      },
      {
        status: 405,
      },
    );
  }

  try {
    const formData = await request.formData();

    const businessName = formData.get("businessName");
    const businessType = formData.get("businessType");

    const ownerName = formData.get("ownerName");
    const contactName = formData.get("contactName");

    const mobile = formData.get("mobile");
    const whatsapp = formData.get("whatsapp");

    const email = formData.get("email");
    const landline = formData.get("landline");

    const address = formData.get("address");
    const city = formData.get("city");
    const district = formData.get("district");
    const state = formData.get("state");
    const pincode = formData.get("pincode");

    const rawCategories = formData.getAll("categories");
    let categoriesList = [];

    rawCategories.forEach((item) => {
      if (typeof item === "string" && item.trim()) {
        if (item.trim().startsWith("[") && item.trim().endsWith("]")) {
          try {
            const parsed = JSON.parse(item);
            if (Array.isArray(parsed)) {
              categoriesList.push(...parsed);
            }
          } catch (e) {
            categoriesList.push(item.trim());
          }
        } else if (item.includes(",")) {
          item.split(",").forEach((sub) => {
            if (sub.trim()) categoriesList.push(sub.trim());
          });
        } else {
          categoriesList.push(item.trim());
        }
      }
    });

    const categoriesFormatted =
      categoriesList.length > 0 ? categoriesList.join(", ") : "-";

    const monthlyPurchase = formData.get("monthlyPurchase");
    const requirements = formData.get("requirements");

    const agreeTerms = formData.get("agreeTerms");

    const drugLicense = formData.get("drugLicense");
    const gstCertificate = formData.get("gstCertificate");

    if (
      !businessName ||
      !ownerName ||
      !mobile ||
      !email ||
      !address ||
      !city ||
      !district ||
      !state ||
      !pincode ||
      categoriesList.length === 0 ||
      !agreeTerms ||
      !drugLicense ||
      !gstCertificate
    ) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        },
      );
    }

    const drugBuffer = Buffer.from(await drugLicense.arrayBuffer());

    const gstBuffer = Buffer.from(await gstCertificate.arrayBuffer());

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.HR_EMAIL,
      subject: `New Partnership Application - ${businessName}`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { box-sizing: border-box; }
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #ffffff; margin: 0; padding: 0; color: #333333; width: 100% !important; }
            .container { width: 100% !important; max-width: 100% !important; margin: 0; background-color: #ffffff; padding: 10px 15px; }
            .header { background-color: #ffffff; padding: 10px 0 20px 0; text-align: center; border-bottom: 3px solid #1C8A3C; width: 100%; }
            .content { padding: 25px 0; line-height: 1.6; width: 100%; }
            .title { color: #0B4E8C; font-size: 18px; font-weight: 700; margin-top: 0; margin-bottom: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; word-wrap: break-word; }
            .highlight-box { background-color: #E8F5EB; border-left: 4px solid #1C8A3C; padding: 14px 18px; border-radius: 6px; margin: 18px 0; color: #1C8A3C; font-weight: 600; font-size: 14px; word-wrap: break-word; }
            .details-table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px; }
            .details-table th, .details-table td { padding: 10px 12px; border: 1px solid #e2e8f0; text-align: left; word-break: break-word; }
            .details-table th { background-color: #0B4E8C; color: #ffffff; font-weight: 600; width: 35%; }
            .details-table td { color: #334155; }
            .details-table tr:nth-child(even) { background-color: #f8fafc; }
            .footer { background-color: #ffffff; padding: 20px 0 10px 0; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; width: 100%; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${process.env.LOGO_URL || "https://res.cloudinary.com/dk75r8sim/image/upload/v1785771294/logo_1_ird2bh.png"}" alt="Meenakshi Pharma Logo" width="180" style="max-width: 180px; width: 180px; height: auto; display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none;" />
            </div>
            <div class="content">
              <h2 class="title">New Partnership Application Received</h2>
              
              <div class="highlight-box">
                A new partnership application has been submitted on the Partner With Us page. The Drug License and GST Certificate attachments are included with this email.
              </div>

              <h3 style="color: #0B4E8C; font-size: 15px; margin-top: 20px; margin-bottom: 10px;">Partner Application Details</h3>

              <table class="details-table">
                <tr>
                  <th>Business Name</th>
                  <td><strong>${businessName}</strong></td>
                </tr>
                <tr>
                  <th>Business Type</th>
                  <td>${businessType}</td>
                </tr>
                <tr>
                  <th>Owner Name</th>
                  <td>${ownerName}</td>
                </tr>
                <tr>
                  <th>Contact Person</th>
                  <td>${contactName}</td>
                </tr>
                <tr>
                  <th>Mobile Number</th>
                  <td><a href="tel:${mobile}" style="color: #0B4E8C; font-weight: 600; text-decoration: none;">${mobile}</a></td>
                </tr>
                <tr>
                  <th>WhatsApp Number</th>
                  <td>${whatsapp ? `<a href="https://wa.me/91${whatsapp}" style="color: #1C8A3C; font-weight: 600; text-decoration: none;">${whatsapp}</a>` : "-"}</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td><a href="mailto:${email}" style="color: #0B4E8C; font-weight: 600; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <th>Landline</th>
                  <td>${landline || "-"}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>${address}</td>
                </tr>
                <tr>
                  <th>City / District</th>
                  <td>${city}, ${district}</td>
                </tr>
                <tr>
                  <th>State / PIN Code</th>
                  <td>${state} - ${pincode}</td>
                </tr>
                <tr>
                  <th>Interested Categories</th>
                  <td><span style="background-color: #E8F5EB; color: #1C8A3C; padding: 3px 8px; border-radius: 4px; font-weight: 600;">${categoriesFormatted}</span></td>
                </tr>
                <tr>
                  <th>Est. Monthly Purchase</th>
                  <td>${monthlyPurchase || "-"}</td>
                </tr>
                <tr>
                  <th>Requirements / Notes</th>
                  <td style="white-space: pre-wrap; line-height: 1.5;">${requirements || "-"}</td>
                </tr>
              </table>

              <div style="margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 15px; color: #475569; font-size: 13px;">
                <p style="margin: 0; font-style: italic;">Automated Notification</p>
                <p style="margin: 3px 0 0 0; font-weight: 700; color: #0B4E8C; font-style: italic;">Partner Portal</p>
                <p style="margin: 2px 0 0 0; font-weight: 600; color: #334155; font-style: italic;">Meenakshi Pharma System</p>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0; font-weight: 700; color: #0B4E8C; font-size: 13px;">Meenakshi Pharma</p>
              <p style="margin: 3px 0 0 0;">Building Healthier Communities</p>
            </div>
          </div>
        </body>
        </html>
      `,

      attachments: [
        {
          filename: drugLicense.name,
          content: drugBuffer.toString("base64"),
        },
        {
          filename: gstCertificate.name,
          content: gstBuffer.toString("base64"),
        },
      ],
    });

    if (error) {
      console.error(error);

      return Response.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 500,
        },
      );
    }

    const { error: applicantError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,

      subject:
        "Thank You for Your Interest in Partnering with Meenakshi Pharma",
      // .header { background-color: #ffffff; padding: 25px 20px; text-align: center; border-bottom: 3px solid #1C8A3C; }
      //             .logo { max-width: 180px; width: 180px; height: auto; display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none; pointer-events: none; }

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * { box-sizing: border-box; }
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #ffffff; margin: 0; padding: 0; color: #333333; width: 100% !important; }
            .container { width: 100% !important; max-width: 100% !important; margin: 0; background-color: #ffffff; padding: 10px 15px; }
            .header { background-color: #ffffff; padding: 10px 0 20px 0; text-align: center; border-bottom: 3px solid #1C8A3C; width: 100%; }
            .content { padding: 25px 0; line-height: 1.6; width: 100%; }
            .title { color: #0B4E8C; font-size: 18px; font-weight: 700; margin-top: 0; margin-bottom: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; word-wrap: break-word; }
            .text-block { font-size: 14px; color: #334155; margin-bottom: 14px; word-wrap: break-word; }
            .highlight-box { background-color: #E8F5EB; border-left: 4px solid #1C8A3C; padding: 14px 18px; border-radius: 6px; margin: 18px 0; color: #1C8A3C; font-weight: 600; font-size: 14px; word-wrap: break-word; }
            .footer { background-color: #ffffff; padding: 20px 0 10px 0; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; width: 100%; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${process.env.LOGO_URL || "https://meenakshipharma.netlify.app/logo_1.png"}" alt="Meenakshi Pharma Logo" width="180" style="max-width: 180px; width: 180px; height: auto; display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none;" />
            </div>
            <div class="content">
              <h2 class="title">Thank You for Your Interest in Partnering with Meenakshi Pharma</h2>
              
              <p class="text-block" style="color:#1e293b; font-weight: 600;">Hello ${ownerName || "Valued Partner"},</p>

              <div class="highlight-box">
                Your partnership request has been submitted successfully.
              </div>

              <p class="text-block">
                Our team will review the information you have provided and verify your Drug License and GST Certificate as part of our standard onboarding process. Once the verification is complete, one of our representatives will contact you to discuss the next steps.
              </p>

              <p class="text-block">
                We appreciate your interest in partnering with Meenakshi Pharma and look forward to building a trusted, long-term business relationship.
              </p>

              <p class="text-block" style="font-weight: 700; color: #0B4E8C; margin-top: 20px;">
                Thank you for choosing Meenakshi Pharma as your pharmaceutical supply partner.
              </p>

              <div style="margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 15px; color: #475569; font-size: 14px;">
                <p style="margin: 0; font-style: italic;">Regards,</p>
                <p style="margin: 3px 0 0 0; font-weight: 700; color: #0B4E8C; font-style: italic;">Partner Portal</p>
                <p style="margin: 2px 0 0 0; font-weight: 600; color: #334155; font-style: italic;">Meenakshi Pharma</p>
              </div>

              <div style="margin-top: 20px; text-align: center; font-size: 11px; color: #94a3b8;">
                <p style="margin: 0;">This is an automated message. Please do not reply to this email, as this inbox is not monitored.</p>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0; font-weight: 700; color: #0B4E8C; font-size: 13px;">Meenakshi Pharma</p>
              <p style="margin: 3px 0 0 0;">Building Healthier Communities</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (applicantError) {
      console.error(applicantError);
      return Response.json(
        {
          success: false,
          message: applicantError.message,
        },
        {
          status: 500,
        },
      );
    }

    return Response.json({
      success: true,
      message: "Partnership Application Submitted Successfully",
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      },
    );
  }
};
