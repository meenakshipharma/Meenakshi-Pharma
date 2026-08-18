import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (request) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method Not Allowed",
      }),
      { status: 405 },
    );
  }

  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const gender = formData.get("gender") || "N/A";
    const phone = formData.get("phone");
    const email = formData.get("email");
    const location = formData.get("location");
    const position = formData.get("position");
    const experience = formData.get("experience");
    const currentEmployer = formData.get("currentEmployer") || "N/A";
    const currentDesignation = formData.get("currentDesignation") || "N/A";
    const expectedSalary = formData.get("expectedSalary");
    const noticePeriod = formData.get("noticePeriod");
    const resume = formData.get("resume");
    const coverLetter = formData.get("coverLetter") || "N/A";

    if (
      !fullName ||
      !phone ||
      !email ||
      !location ||
      !position ||
      !experience ||
      !expectedSalary ||
      !noticePeriod ||
      !resume
    ) {
      return Response.json(
        { success: false, message: "Required fields are missing." },
        { status: 400 },
      );
    }

    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 1. Notification Email to HR Admin
    const { error: adminError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.HR_EMAIL || process.env.FROM_EMAIL,
      subject: `New Job Application: ${fullName} - ${position}`,
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
              <h2 class="title">New Job Application Received</h2>
              
              <div class="highlight-box">
                A new job application has been submitted on the Career page. The applicant's resume is attached to this email.
              </div>

              <h3 style="color: #0B4E8C; font-size: 15px; margin-top: 20px; margin-bottom: 10px;">Applicant Details</h3>

              <table class="details-table">
                <tr>
                  <th>Full Name</th>
                  <td>${fullName}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>${gender}</td>
                </tr>
                <tr>
                  <th>Mobile Number</th>
                  <td><a href="tel:${phone}" style="color: #0B4E8C; font-weight: 600; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td><a href="mailto:${email}" style="color: #0B4E8C; font-weight: 600; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <th>Current Location</th>
                  <td>${location}</td>
                </tr>
                <tr>
                  <th>Position Applying For</th>
                  <td><span style="background-color: #E8F5EB; color: #1C8A3C; padding: 3px 8px; border-radius: 4px; font-weight: 600;">${position}</span></td>
                </tr>
                <tr>
                  <th>Total Experience</th>
                  <td>${experience}</td>
                </tr>
                <tr>
                  <th>Current Employer</th>
                  <td>${currentEmployer}</td>
                </tr>
                <tr>
                  <th>Current Designation</th>
                  <td>${currentDesignation}</td>
                </tr>
                <tr>
                  <th>Expected Salary</th>
                  <td>${expectedSalary}</td>
                </tr>
                <tr>
                  <th>Notice Period</th>
                  <td>${noticePeriod}</td>
                </tr>
                <tr>
                  <th>Cover Letter / Comments</th>
                  <td style="white-space: pre-wrap; line-height: 1.5;">${coverLetter}</td>
                </tr>
              </table>

              <div style="margin-top: 25px; border-top: 1px solid #e2e8f0; padding-top: 15px; color: #475569; font-size: 13px;">
                <p style="margin: 0; font-style: italic;">Automated Notification</p>
                <p style="margin: 3px 0 0 0; font-weight: 700; color: #0B4E8C; font-style: italic;">Recruitment Portal</p>
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
          filename: resume.name,
          content: buffer.toString("base64"),
        },
      ],
    });

    if (adminError) {
      console.error(adminError);
      return Response.json(
        { success: false, message: adminError.message },
        { status: 500 }
      );
    }

    // 2. Auto-Reply Email to Applicant (Full-Screen White Template)
    const { error: replyError } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "Thank You for Your Application - Meenakshi Pharma",
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
              <h2 class="title">Thank You for Your Interest in Joining Meenakshi Pharma</h2>
              
              <p class="text-block" style="color:#1e293b; font-weight: 600;">Hello ${fullName},</p>

              <div class="highlight-box">
                We have successfully received your application and resume. Our recruitment team will review your profile based on the requirements of the position you applied for.
              </div>

              <p class="text-block">
                If your qualifications and experience match our current or future hiring requirements, we will contact you regarding the next steps in the recruitment process.
              </p>

              <p class="text-block">
                We appreciate the time and effort you have taken to apply and thank you for considering <i>Meenakshi Pharma</i> as your career destination.
              </p>

              <p class="text-block" style="font-weight: 700; color: #0B4E8C; margin-top: 20px;">
                We wish you every success and look forward to connecting with you soon.
              </p>

              <div style="margin-top: 25px; pt-15; border-top: 1px solid #e2e8f0; padding-top: 15px; color: #475569; font-size: 14px;">
                <p style="margin: 0; font-style: italic;">Regards,</p>
                <p style="margin: 3px 0 0 0; font-weight: 700; color: #0B4E8C; font-style: italic;">Recruitment Team</p>
                <p style="margin: 2px 0 0 0; font-weight: 600; color: #334155; font-style: italic;">Meenakshi Pharma</p>
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

    if (replyError) {
      console.error(replyError);
      return Response.json(
        { success: false, message: replyError.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Application Submitted Successfully",
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { success: false, message: err.message },
      { status: 500 },
    );
  }
};
