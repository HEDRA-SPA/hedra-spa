const nodemailer = require('nodemailer');

module.exports = async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      message: 'Método no permitido' 
    });
  }

  try {
    console.log('=== INICIO DEL PROCESO ===');
    console.log('Body recibido:', JSON.stringify(req.body, null, 2));
    
    // Verificar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('ERROR: Variables de entorno no configuradas');
      return res.status(500).json({ 
        success: false, 
        message: 'Error de configuración del servidor. Contacta al administrador.' 
      });
    }

    // Extraer datos del formulario
    const { from_name, from_email, phone, message } = req.body;
    
    // Validar campos requeridos
    if (!from_name || !from_email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor completa todos los campos requeridos' 
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor ingresa un email válido' 
      });
    }

    console.log('Configurando transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${from_name}`,
      html: `
        <div style="font-family: 'Playfair Display', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f7f6ef;">
          
          <div style="background-color: #2d621e; padding: 30px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 400;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            
            <h2 style="color: #2d621e; font-size: 20px; margin-top: 0; padding-bottom: 10px; border-bottom: 2px solid #2d621e;">
              Información del Cliente
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #666;">Nombre:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #333;">
                  ${from_name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #666;">Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${from_email}" style="color: #2d621e; text-decoration: none;">
                    ${from_email}
                  </a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="color: #666;">Teléfono:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="tel:${phone}" style="color: #2d621e; text-decoration: none;">
                    ${phone}
                  </a>
                </td>
              </tr>
              ` : ''}
            </table>
            
            <h2 style="color: #2d621e; font-size: 20px; margin-top: 30px; padding-bottom: 10px; border-bottom: 2px solid #2d621e;">
              Mensaje
            </h2>
            
            <div style="background-color: #f7f6ef; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; line-height: 1.7; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="text-align: center; margin-top: 40px; padding: 20px; background-color: #f7f6ef; border-radius: 8px;">
              <p style="margin: 0; font-size: 13px; color: #666;">
                📅 Mensaje recibido el ${new Date().toLocaleString('es-MX', { 
                  timeZone: 'America/Mexico_City',
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            
          </div>
          
        </div>
      `,
      replyTo: from_email
    };

    console.log('Enviando email...');
    await transporter.sendMail(mailOptions);
    console.log('✅ Email enviado exitosamente');
    
    return res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente. Gracias por contactarnos.'
    });
    
  } catch (error) {
    console.error('❌ ERROR:', error);
    
    return res.status(500).json({ 
      success: false, 
      message: 'Error al enviar el mensaje. Por favor intenta nuevamente.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};