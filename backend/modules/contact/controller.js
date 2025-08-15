const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(req, res) {
  console.log("Data: ", req.body);

  try {
    const response = await resend.emails.send({
      from: `${req.body.data.name} ${process.env.RESEND_EMAIL}`,
      to: [`${process.env.PERSONAL_EMAIL}`],
      subject: "[RESEND] Contact Form",
      text: `This is an email from www.louiefatooey.space using the contact form, sent via Resend.\n\nName of the user is: ${req.body.data.name}.\nTheir email is: ${req.body.data.email}.\n\nHere is their message:\n"${req.body.data.message}"\n\nDo not reply to this email.`,
    });

    if (response.error === null) {
      console.log("Email sent:", response);
      res.status(200).json({ message: "Email sent", yourData: req.body });
    } else {
      console.error("Resend error:", response.error.error);
      res.status(response.error.statusCode).send(response.error.error);
    }
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Error sending email", error: err });
  }
}

module.exports = { sendEmail };
