import React, { useState, useEffect } from "react";
import "./WhatsAppChat.css";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const phoneNumber = "5599999999999";
  const defaultMessage = "¡Hola! Quisiera más información.";
  const GREETING_DELAY_MS = 3000;
  const GREETING_COOLDOWN_MS = 5 * 60 * 1000;

  const canShowGreeting = () => {
    const lastClosed = localStorage.getItem("greetingClosedAt");
    if (!lastClosed) return true;
    const elapsed = Date.now() - parseInt(lastClosed, 10);
    return elapsed > GREETING_COOLDOWN_MS;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (canShowGreeting()) {
        setShowGreeting(true);
      }
    }, GREETING_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const isWithinBusinessHours = () => {
    const hour = new Date().getHours();
    return hour >= 9 && hour < 19;
  };

  const greetingText = isWithinBusinessHours()
    ? "👋 ¡Hola! ¿Necesitas ayuda? ¡Habla con nosotros!"
    : "⏰ Estamos fuera de horario, pero puedes dejar tu mensaje.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  const handleCloseGreeting = () => {
    setShowGreeting(false);
    localStorage.setItem("greetingClosedAt", Date.now().toString());
  };

  return (
    <>
      {showGreeting && !isOpen && (
        <div className="whatsapp-greeting">
          <button className="whatsapp-close-btn" onClick={handleCloseGreeting}>
            &times;
          </button>
          {greetingText}
        </div>
      )}

      {isOpen && (
        <div className="whatsapp-chat-box">
          <p>👋 ¡Hola! ¿Cómo podemos ayudarte?</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>Hablar por WhatsApp</button>
          </a>
        </div>
      )}

      <button
        className="whatsapp-floating-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
        />
      </button>
    </>
  );
};

export default WhatsAppChat;
