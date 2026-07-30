import { Resend } from "resend";

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

    const categories = formData.get("categories");
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
        <h2>New Partnership Application</h2>

        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;width:100%">
          <tr>
            <th align="left">Business Name</th>
            <td>${businessName}</td>
          </tr>

          <tr>
            <th align="left">Business Type</th>
            <td>${businessType}</td>
          </tr>

          <tr>
            <th align="left">Owner Name</th>
            <td>${ownerName}</td>
          </tr>

          <tr>
            <th align="left">Contact Person</th>
            <td>${contactName}</td>
          </tr>

          <tr>
            <th align="left">Mobile</th>
            <td>${mobile}</td>
          </tr>

          <tr>
            <th align="left">WhatsApp</th>
            <td>${whatsapp || "-"}</td>
          </tr>

          <tr>
            <th align="left">Email</th>
            <td>${email}</td>
          </tr>

          <tr>
            <th align="left">Landline</th>
            <td>${landline || "-"}</td>
          </tr>

          <tr>
            <th align="left">Address</th>
            <td>${address}</td>
          </tr>

          <tr>
            <th align="left">City</th>
            <td>${city}</td>
          </tr>

          <tr>
            <th align="left">District</th>
            <td>${district}</td>
          </tr>

          <tr>
            <th align="left">State</th>
            <td>${state}</td>
          </tr>

          <tr>
            <th align="left">PIN Code</th>
            <td>${pincode}</td>
          </tr>

          <tr>
            <th align="left">Interested Categories</th>
            <td>${categories || "-"}</td>
          </tr>

          <tr>
            <th align="left">Estimated Monthly Purchase</th>
            <td>${monthlyPurchase || "-"}</td>
          </tr>

          <tr>
            <th align="left">Requirements</th>
            <td>${requirements || "-"}</td>
          </tr>
        </table>
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

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,

      subject: "Partnership Application Received",

      html: `
        <h2>Hello ${ownerName},</h2>

        <p>Thank you for your interest in partnering with <b>Meenakshi Pharma</b>.</p>

        <p>We have successfully received your partnership application along with your documents.</p>

        <p>Our Business Development team will review your application and contact you shortly.</p>

        <br>

        <p>Regards,</p>

        <p><b>Meenakshi Pharma</b></p>
      `,
    });

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
