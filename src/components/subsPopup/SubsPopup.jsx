import { useState, useEffect } from 'react';
import './SubsPopup.css';

export default function SubsPopup({ delaySeconds = 10800 }) { 
  const [showPopup, setShowPopup] = useState(false);
  const [formStatus, setFormStatus] = useState(null); 
  const [formError, setFormError] = useState(null); 

  useEffect(() => {
    const isSubscribed = localStorage.getItem('popupSubscribed');
    if (isSubscribed) return; 

    const lastClosed = localStorage.getItem('popupClosedAt');
    if (lastClosed) {
      const lastClosedTime = new Date(parseInt(lastClosed, 10));
      const now = new Date();
      const diffSeconds = (now - lastClosedTime) / 1000;
      if (diffSeconds >= delaySeconds) {
        setShowPopup(true);
      }
    } else {
      setShowPopup(true);
    }
  }, [delaySeconds]);

  const handleClose = () => {
    setShowPopup(false);
    setFormStatus(null); 
    setFormError(null); 
    localStorage.setItem('popupClosedAt', Date.now().toString());
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('EMAIL');
    const fname = formData.get('FNAME');

    const mailchimpUrl =
      'https://rcorptravel.us18.list-manage.com/subscribe/post-json?u=d0e5c22ffe5105e8d5b1bb001&id=706cc08afc&c=?';

    try {
      await fetch(
        `${mailchimpUrl}&EMAIL=${encodeURIComponent(email)}&FNAME=${encodeURIComponent(fname)}`,
        {
          method: 'GET',
          mode: 'no-cors', 
        }
      );
      setFormStatus('success');
      setFormError(null);
      localStorage.setItem('popupSubscribed', 'true'); 
      setTimeout(() => {
        handleClose(); 
      }, 2000);
    } catch (error) {
      setFormStatus('error');
      setFormError('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
      console.error('Form submission error:', error);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="popup-close" onClick={handleClose}>
          ✕
        </button>

        <div className="popup-body">
          <div className="popup-image">
            <img src="./Banners/Banner-CEL-RCORP.webp" alt="Crucero Celebrity" />
          </div>

          <div className="popup-form">
            <h2>Recibe novedades de Rcorp Travel</h2>
            {formStatus === 'success' && (
              <p style={{ color: 'green' }}>¡Gracias por suscribirte!</p>
            )}
            {formStatus === 'error' && (
              <p style={{ color: 'red' }}>{formError}</p>
            )}
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="mce-FNAME">
                Nombre <span style={{ color: '#ff0000' }}>*</span>
              </label>
              <input
                id="mce-FNAME"
                type="text"
                name="FNAME"
                placeholder="Tu nombre"
                required
              />

              <label htmlFor="mce-EMAIL">
                Correo electrónico <span style={{ color: '#ff0000' }}>*</span>
              </label>
              <input
                id="mce-EMAIL"
                name="EMAIL"
                type="email"
                placeholder="Tu correo electrónico"
                required
              />

              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_d0e5c22ffe5105e8d5b1bb001_706cc08afc"
                  tabIndex={-1}
                  defaultValue=""
                  placeholder="No completar este campo"
                />
              </div>

              <button type="submit" className="btn-enviar">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}