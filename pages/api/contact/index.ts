import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).json({
      message: "Method not allowed",
    });
    return;
  }

  const email: string = process.env.EMAIL;
  const password: string = process.env.PASSWORD;
  const myEmail: string = "carloscamilocontato@gmail.com";

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailData: object = {
    from: email,
    to: myEmail,
    subject: `Fabrica logs - from ${req.body.name}`,
    text: req.body.content,
    html: `
        <div>
            From: ${req.body.email}
            <br>
            <br>
            ${req.body.content}
        </div>
    `,
  };

  transporter.sendMail(mailData, (err: any, info: any) => {
    if (err) {
      console.log(err);
      res.status(400).json({ message: err });
    } else {
      console.log(info);
      res.status(200).json({ message: info });
    }
  });
}
