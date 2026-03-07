import nodemailer from "nodemailer";

export async function sendEmail(jobs) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const text = jobs
    .map(j => `${j.title} - ${j.company}`)
    .join("\n");

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.USER_EMAIL,
    subject: "New Jobs Found",
    text
  });

}