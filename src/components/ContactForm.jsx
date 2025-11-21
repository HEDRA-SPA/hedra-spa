/*import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const recipientEmail = 'hedraspa@gmail.com';
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    message: ''
  });

const ACCENT_COLOR = '#2d621e'; 
const FORM_CARD_COLOR = '#f7f6ef'; 
const INPUT_BG_COLOR = '#f4f3ebff'; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      to_email: recipientEmail,
      from_name: formData.from_name,
      from_email: formData.from_email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.from_email
    };

    // Mostrar toast de carga
    const loadingToast = toast.loading('Enviando mensaje...', {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    emailjs.send(
      'service_ufaokzg',
      'template_ssioke8',
      templateParams,
      'luOp_05zDN90nais8'
    )
    .then(() => {
      // Cerrar toast de carga y mostrar éxito
      toast.dismiss(loadingToast);
      toast.success('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb'
        }
      });
      
      setFormData({
        from_name: '',
        from_email: '',
        phone: '',
        message: ''
      });
      setIsLoading(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.dismiss(loadingToast);
      toast.error('Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb'
        }
      });
      setIsLoading(false);
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      
      <section 
        id="contacto" 
        className="py-5" 
        style={{ 
            backgroundColor: '#f7f6ef', 
            fontFamily: 'Playfair Display, serif ' 
        }} 
      > 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
                <div 
                    className="p-5 p-md-5 rounded-4 shadow-lg" 
                    style={{ backgroundColor: FORM_CARD_COLOR }}
                >
              <h2>{t('contact.title')}</h2>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label htmlFor="name" className="form-label">{t('contact.name')}</label>
                    <input 
                      type="text" 
                      name="from_name" 
                      className="form-control" 
                      id="name" 
                      placeholder={t('contact.name')} 
                      required 
                      value={formData.from_name}
                      onChange={handleChange} 
                      disabled={isLoading}
                      style={{ 
                            borderRadius: '0.75rem',
                            backgroundColor: INPUT_BG_COLOR 
                        }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">{t('contact.email')}</label>
                    <input 
                      type="email" 
                      name="from_email" 
                      className="form-control" 
                      id="email" 
                      placeholder={t('contact.email')} 
                      required 
                      value={formData.from_email}
                      onChange={handleChange} 
                      disabled={isLoading}
                      style={{ 
                            borderRadius: '0.75rem',
                            backgroundColor: INPUT_BG_COLOR 
                        }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">{t('contact.phone')}</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    className="form-control" 
                    id="phone" 
                    placeholder="+52 123 456 7890" 
                    value={formData.phone}
                    onChange={handleChange} 
                    disabled={isLoading}
                      style={{ 
                            borderRadius: '0.75rem',
                            backgroundColor: INPUT_BG_COLOR 
                        }} 
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">{t('contact.message')}</label>
                  <textarea 
                    name="message" 
                    className="form-control" 
                    id="message" 
                    rows="5" 
                    placeholder={t('contact.message')} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                      style={{ 
                            borderRadius: '0.75rem',
                            backgroundColor: INPUT_BG_COLOR 
                        }} 
                  ></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-lg px-5"
                    disabled={isLoading}
                      style={{ 
                          backgroundColor: ACCENT_COLOR, 
                          borderColor: ACCENT_COLOR,
                          color: 'white',
                          borderRadius: '0.75rem',
                          transition: 'background-color 0.3s ease' 
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4d554a'} 
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = ACCENT_COLOR} 
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </>
                    ) : (
                      t('contact.submit')
                    )}
                  </button>
                </div>
              </form>
                </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
*/
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    tipoPropiedad: '',
    direccion: '',
    codigoPostal: '',
    ciudad: '',
    numeroIntExt: '',
    mensaje: ''
  });

  const ACCENT_COLOR = '#2d621e'; 
  const FORM_CARD_COLOR = '#f7f6ef'; 
  const INPUT_BG_COLOR = '#f4f3ebff'; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const loadingToast = toast.loading('Enviando mensaje...', {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    try {
  const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

      const data = await response.json();

      if (data.success) {
        toast.dismiss(loadingToast);
        toast.success(`¡Mensaje enviado con éxito! ${data.folio ? `Folio: ${data.folio}` : ''} Nos pondremos en contacto contigo pronto.`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            background: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb'
          }
        });
        
        // Limpiar formulario
        setFormData({
          nombreCompleto: '',
          email: '',
          telefono: '',
          tipoPropiedad: '',
          direccion: '',
          codigoPostal: '',
          ciudad: '',
          numeroIntExt: '',
          mensaje: ''
        });
      } else {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.dismiss(loadingToast);
      toast.error(`Ocurrió un error al enviar el mensaje: ${error.message}. Por favor, intenta nuevamente.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: {
          background: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <section 
        id="contacto" 
        className="py-5" 
        style={{ 
          backgroundColor: '#f7f6ef', 
          fontFamily: 'Playfair Display, serif' 
        }} 
      > 
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div 
                className="p-5 p-md-5 rounded-4 shadow-lg" 
                style={{ backgroundColor: FORM_CARD_COLOR }}
              >
                <h2>{t('contact.title')}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label htmlFor="nombreCompleto" className="form-label">
                        {t('contact.name')}
                      </label>
                      <input 
                        type="text" 
                        name="nombreCompleto" 
                        className="form-control" 
                        id="nombreCompleto" 
                        placeholder={t('contact.name')} 
                        required 
                        value={formData.nombreCompleto}
                        onChange={handleChange} 
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        {t('contact.email')}
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        id="email" 
                        placeholder={t('contact.email')} 
                        required 
                        value={formData.email}
                        onChange={handleChange} 
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label htmlFor="telefono" className="form-label">
                        {t('contact.phone')}
                      </label>
                      <input 
                        type="tel" 
                        name="telefono" 
                        className="form-control" 
                        id="telefono" 
                        placeholder="+52 123 456 7890" 
                        value={formData.telefono}
                        onChange={handleChange} 
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="tipoPropiedad" className="form-label">
                        Tipo de Propiedad
                      </label>
                      <select
                        name="tipoPropiedad"
                        className="form-control"
                        id="tipoPropiedad"
                        value={formData.tipoPropiedad}
                        onChange={handleChange}
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }}
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="Casa">Casa</option>
                        <option value="Departamento">Departamento</option>
                        <option value="Oficina">Oficina</option>
                        <option value="Local Comercial">Local Comercial</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-8 mb-3 mb-md-0">
                      <label htmlFor="direccion" className="form-label">
                        Dirección
                      </label>
                      <input 
                        type="text" 
                        name="direccion" 
                        className="form-control" 
                        id="direccion" 
                        placeholder="Calle y número" 
                        value={formData.direccion}
                        onChange={handleChange} 
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }} 
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="numeroIntExt" className="form-label">
                        Int/Ext
                      </label>
                      <input 
                        type="text" 
                        name="numeroIntExt" 
                        className="form-control" 
                        id="numeroIntExt" 
                        placeholder="Ej: Int 5" 
                        value={formData.numeroIntExt}
                        onChange={handleChange} 
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }} 
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-8 mb-3 mb-md-0">
                      <label htmlFor="ciudad" className="form-label">
                        Ciudad
                      </label>
                      <input 
                        type="text" 
                        name="ciudad" 
                        className="form-control" 
                        id="ciudad" 
                        placeholder="Ciudad" 
                        value={formData.ciudad}
                        onChange={handleChange} 
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }} 
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="codigoPostal" className="form-label">
                        C.P.
                      </label>
                      <input 
                        type="text" 
                        name="codigoPostal" 
                        className="form-control" 
                        id="codigoPostal" 
                        placeholder="12345" 
                        value={formData.codigoPostal}
                        onChange={handleChange} 
                        disabled={isLoading}
                        style={{ 
                          borderRadius: '0.75rem',
                          backgroundColor: INPUT_BG_COLOR 
                        }} 
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="mensaje" className="form-label">
                      {t('contact.message')}
                    </label>
                    <textarea 
                      name="mensaje" 
                      className="form-control" 
                      id="mensaje" 
                      rows="5" 
                      placeholder={t('contact.message')} 
                      value={formData.mensaje}
                      onChange={handleChange}
                      disabled={isLoading}
                      style={{ 
                        borderRadius: '0.75rem',
                        backgroundColor: INPUT_BG_COLOR 
                      }} 
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="btn btn-lg px-5"
                      disabled={isLoading}
                      style={{ 
                        backgroundColor: ACCENT_COLOR, 
                        borderColor: ACCENT_COLOR,
                        color: 'white',
                        borderRadius: '0.75rem',
                        transition: 'background-color 0.3s ease' 
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4d554a'} 
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = ACCENT_COLOR} 
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Enviando...
                        </>
                      ) : (
                        t('contact.submit')
                      )}
                    </button>
                  </div>
                </form>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;