import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const { from_name, from_email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // TU correo Gmail usado para enviar
        pass: process.env.MAIL_PASS, // Contraseña de App
      },
    });

    await transporter.sendMail({
      from: `"Formulario Hedra SPA" <${process.env.SMTP_USER}>`,
      to: "hedraspa.en@gmail.com", // 🔥 Tu correo fijo donde llegan los mensajes
      subject: "Nuevo mensaje del formulario de contacto",
      html: `
        <h3>Nuevo mensaje recibido</h3>
        <p><strong>Nombre:</strong> ${from_name}</p>
        <p><strong>Email del cliente:</strong> ${from_email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
      replyTo: from_email, // 🔥 Si das clic en responder, se responde al cliente directamente
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ error: "Error enviando correo" });
  }
}
