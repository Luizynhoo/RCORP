import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import LogoRcorp from "/Logo-RCORP-white.png"
import { infosFooter } from '../../data/Pages/infosFooter';

import './footer.css'

const Footer = () => {

  const { brands, brandsLogo, contacts, socialLinks } = infosFooter;

  return (
    <footer className='FooterStyle' id="footer">
      <div className='containerStyle'>
        <div className='gridStyle'>
          <div>
            <div>
              <span style={{ color: '#fff', fontWeight: 600, display: 'block', margin: '30px 0px' }}>
                Nuestras Marcas
              </span>
              {brands.map((brand, index) => (
                <motion.a
                  key={brand.label}
                  href={brand.href}
                  style={{
                    fontSize: '14px',
                    color: '#D1D5DB',
                    cursor: 'pointer',
                    marginBottom: '8px',
                    display: 'block',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={(e) => e.target.style.color = 'white'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  {brand.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <motion.span
              className='sectionTitleStyle'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Navegación
            </motion.span>
            <div>
              <Link
                to="/sobre"
                className='linkStyle'
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Sobre nosotros
              </Link>
              <Link
                to="/marcas"
                className='linkStyle'
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Nuestras Marcas
              </Link>
              <Link
                to="/contactos"
                className='linkStyle'
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Contactos
              </Link>
            </div>
          </div>

          <div>
            <motion.span
              className='sectionTitleStyle'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Contactos internacionales
            </motion.span>
            <div>
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.country}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', marginBottom: '12px' }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`flag-icon ${contact.flag}`}></div>
                  <div>
                    <div style={{ color: '#d1d5db' }}>{contact.country}</div>
                    <div style={{ color: '#9ca3af' }}>{contact.phone}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.span
              className='sectionTitleStyle'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Conéctate, conoce
            </motion.span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <FaEnvelope style={{ width: '20px', height: '20px', color: '#60a5fa' }} />
              <div>
                <div style={{ color: '#d1d5db' }}>Correo Electrónico</div>
                <div style={{ color: '#9ca3af' }}>contacto@Rcorp.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className='socialLinksStyle'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={(e) => {
                    if (social.gradient) {
                      e.currentTarget.style.background = social.gradient;
                      e.currentTarget.style.backgroundSize = '200%';
                      e.currentTarget.style.backgroundPosition = 'center';
                      e.currentTarget.style.transition = 'all 0.4s ease';
                    } else {
                      e.currentTarget.style.backgroundColor = social.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#374151';
                    e.currentTarget.style.transition = 'all 0.4s ease';
                  }}
                >
                  <social.icon style={{ width: '20px', height: '20px' }} />
                </motion.a>
              ))}
            </div>

          </div>
        </div>

        {/*Logos do footer*/}

        <div className="flex justify-center pb-6">
          <img
            src={LogoRcorp}
            alt="Logo Principal"
            className="h-16 object-contain mt-11"
          />
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {brandsLogo.map((logo, index) => (
            <Link to={logo.href} key={index}>
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className={`${logo.height} object-contain grayscale hover:grayscale-0 transition-all duration-300`}
              />
            </Link>
          ))}

        </motion.div>
        
        {/*Logos do footer*/}

        <motion.div
          className='copyrightStyle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Rcorp Travel - Todos los derechos reservados</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;