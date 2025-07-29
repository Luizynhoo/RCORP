import React from 'react';
import { motion } from 'framer-motion';
import { X, MapPin, Calendar, Users, Star, AlignCenter } from 'lucide-react';
import { FaStar } from 'react-icons/fa'; 

import './DestinationPopup.css'

const DestinationPopup = ({ destination, onClose }) => {
  if (!destination) return null;

    const handleWhatsApp = () =>{
    const phone = "5511950842678";
    const message = "Olá, gostaria de solicitar um orçamento";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }

  return (
    <div className='overlayStyle' onClick={onClose}>
      <motion.div
        className='contentStyle'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='closeButtonStyle'
          onClick={onClose}
          onMouseEnter={(e) => e.target.style.color = '#333'}
          onMouseLeave={(e) => e.target.style.color = '#666'}
        >
          <X size={24} />
        </button>

        <div>
          <img
            src={destination.DestinoImg}
            alt={destination.name}
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </div>

        <div style={{ overflowY: 'auto', height:['100%'] }}>
          <h2 className='titleStyle'>
            <MapPin size={24} color="#2563eb" />
            {destination.name}
          </h2>

          <p className='descriptionItem' style={{ fontSize: '15px', color: '#4b5563', marginBottom: '24px' }}>
            {destination.description}
          </p>

          <div>
            <div className='detailItemStyle'>
              <Calendar size={20} color="#2563eb" />
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Melhor Época</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>{destination.bestTime}</div>
              </div>
            </div>

            <div className='detailItemStyle'>
              <Users size={20} color="#2563eb" />
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Duração</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>{destination.duration}</div>
              </div>
            </div>

            <div className='detailItemStyle'>
              <Star size={20} color="#2563eb" />
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Avaliação</div>
                <div style={{ fontSize: '12px', color: '#6b7280' }}>{destination.rating}/5</div>
              </div>
            </div>
          </div>
        </div>

        <div  style={{ display: 'flex', flexDirection:'column', height:['97%'] , justifyContent: 'space-between' }}>
          <h2 className='titleStyle'>
            <FaStar size={16} color="#fbbf24" />
            Destaques do Destino
          </h2>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            {destination.highlights.map((highlight, index) => (
              <li key={index} className='highlightItemStyle'>
                <Star size={16} color="#fbbf24" />
                {highlight}
              </li>
            ))}
          </ul>

          <button
            className='buttonStyle'
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            onClick={handleWhatsApp}
          >
            Solicitar Orçamento
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DestinationPopup;
