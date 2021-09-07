import nodemailer from "nodemailer";

export default function (req, res) {
  if (req.method !== "POST") {
    res.status(400).json({
      message: "Method not allowed",
    });
    return;
  }

  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  const myEmail = "carloscamilocontato@gmail.com";

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: email,
      pass: password,
    },
    secure: true,
  });

  const mailData = {
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

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      res.status(200).json({ message: "Something wrong" });
    }
    else console.log(info);
  });

  res.status(200).json({ message: "Success" });
}
