import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (request) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method Not Allowed",
      }),
      {
        status: 405,
      }
    );
  }

  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const resume = formData.get("resume");

    if (!fullName || !phone || !email || !resume) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const arrayBuffer = await resume.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.HR_EMAIL,
      subject: `New Career Application - ${fullName}`,
      html: `
        <h2>New Job Application</h2>

        <p><b>Name:</b> ${fullName}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Phone:</b> ${phone}</p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer.toString("base64"),
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
        }
      );
    }

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "Application Received",
      html: `
        <h2>Hello ${fullName},</h2>

        <p>
          Thank you for applying to
          <b>Meenakshi Pharma</b>.
        </p>

        <p>
          We have successfully received your application.
        </p>

        <p>
          Our HR team will contact you shortly.
        </p>
      `,
    });

    return Response.json({
      success: true,
      message: "Application Submitted Successfully",
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
      }
    );
  }
};