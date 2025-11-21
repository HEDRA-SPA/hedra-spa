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
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 16px; color: #333; line-height: 1.7; background-color: #f8f9fa; padding: 0; margin: 0;">

  <div style="width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">

    <!-- HEADER -->
    <div style="background: linear-gradient(135deg, #a9c7a1ff 0%, #8bb28a 100%); padding: 30px 40px; text-align: center; border-bottom: 3px solid #99b691;">
      <h1 style="margin: 0; font-size: 28px; color: #2d4a2d; font-weight: 700;">¡Nuevo Mensaje de Contacto!</h1>
      <p style="margin: 10px 0 0; font-size: 16px; color: #3a5a3a;">HEDRA SPA - Centro de Bienestar</p>
    </div>

    <!-- CUERPO -->
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #ffffff;">
      <tr>

        <!-- Imagen -->
        <td style="width: 35%; background: #f7f7f7; vertical-align: top; padding: 0;">
          <img 
            src="https://cdn.pixabay.com/photo/2023/09/01/20/06/soaps-8227624_1280.jpg"
            alt="Jabones decorativos de SPA"
            style="display: block; width: 100%; height: 100%; min-height: 300px; object-fit: cover; opacity: 0.9;"
          >
        </td>

        <!-- Contenido -->
        <td style="width: 65%; vertical-align: top; padding: 40px;">

          <p style="font-size: 18px; color: #555; margin-top: 0;">Un cliente se ha contactado con el equipo, detalles a continuación.</p>

          <!-- Datos del cliente -->
          <div style="
            margin: 30px 0;
            padding: 25px;
            border: 2px solid #e8f5e8;
            border-radius: 10px;
            background: linear-gradient(135deg, #f8fff8 0%, #f0f7f0 100%);
            box-shadow: 0 2px 15px rgba(169,199,161,0.15);
          ">
            <h2 style="font-size: 20px; color: #2d4a2d; margin: 0 0 20px; padding-bottom: 12px; border-bottom: 2px solid #a9c7a1;">Detalles del Cliente</h2>

            <p style="margin: 0 0 15px; padding: 10px 15px; background-color: #fff; border-radius: 6px; border-left: 3px solid #a9c7a1;">
              <strong style="color: #2d4a2d;">Nombre:</strong> 
              <span style="font-weight: 600;">${from_name}</span>
            </p>

            <p style="margin: 0 0 15px; padding: 10px 15px; background-color: #fff; border-radius: 6px; border-left: 3px solid #a9c7a1;">
              <strong style="color: #2d4a2d;">Email:</strong> 
              <a href="mailto:${from_email}" style="color: #4CAF50; text-decoration: none; font-weight: 600;">${from_email}</a>
            </p>

            <p style="margin: 0; padding: 10px 15px; background-color: #fff; border-radius: 6px; border-left: 3px solid #a9c7a1;">
              <strong style="color: #2d4a2d;">Teléfono:</strong> 
              <span style="font-weight: 600;">${phone}</span>
            </p>
          </div>

          <!-- Mensaje -->
          <h2 style="font-size: 20px; color: #2d4a2d; margin-bottom: 15px; padding-bottom: 12px; border-bottom: 2px solid #a9c7a1;">
            Mensaje del Cliente
          </h2>

          <div style="background-color: #fafafa; padding: 25px; border-radius: 8px; border-left: 4px solid #a9c7a1;">
            <p style="font-size: 16px; color: #444; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

        </td>

      </tr>
    </table>

    <!-- FOOTER -->
    <div style="background: linear-gradient(135deg, #2d4a2d 0%, #3a5a3a 100%); padding: 25px 40px; text-align: center; color: white; border-top: 3px solid #a9c7a1;">
      <p style="margin: 0 0 10px; font-size: 16px; font-weight: 600;">
        Recuerda responder directamente a: 
        <a href="mailto:${from_email}" style="color: #a9c7a1; font-weight: 700; text-decoration: none;">${from_email}</a>
      </p>
      <p style="margin: 8px 0 0; font-size: 14px; color: #c8e6c8; opacity: 0.9;">
        Este es un correo automático. © 2025 HEDRA SPA - Todos los derechos reservados.
      </p>
    </div>

  </div>

</div>
`,

      replyTo: from_email, // 🔥 Si das clic en responder, se responde al cliente directamente
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ error: "Error enviando correo" });
  }
}
