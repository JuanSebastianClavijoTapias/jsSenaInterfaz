require("dotenv").config();

const nodemailer = require("nodemailer");
// Esta función se encarga de enviar un correo electrónico por medio de nodemailer
// recibe como parámetros el correo electrónico del usuario, el asunto y el texto del correo.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${process.env.MAIL}`,
    pass: `${process.env.GPASS}`,
  },
});

exports.sendEmail = async (email, asunto, mensaje) => {
  const mailOptions = {
    from: `${process.env.MAIL}`,
    to: email,
    subject: asunto,
    text: mensaje,
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Correo enviado "+ info.response);
    }
  });
};
