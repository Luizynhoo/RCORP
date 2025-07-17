import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart, Target, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Componente de Seta Próxima
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow p-2 hover:bg-blue-100 transition"
      onClick={onClick}
    >
      <ChevronRight size={24} className="text-blue-600" />
    </div>
  );
};

// Componente de Seta Anterior
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full shadow p-2 hover:bg-blue-100 transition"
      onClick={onClick}
    >
      <ChevronLeft size={24} className="text-blue-600" />
    </div>
  );
};

const About = () => {
  const values = [
    { icon: Heart, title: 'Pasión por los Viajes', description: 'Nuestra pasión por explorar el mundo nos motiva a crear experiencias únicas para nuestros clientes.' },
    { icon: Target, title: 'Excelencia', description: 'Siempre buscamos la excelencia en cada detalle, desde la planificación hasta la ejecución del viaje.' },
    { icon: Users, title: 'Atención Personalizada', description: 'Cada cliente es único, por eso ofrecemos una atención completamente personalizada.' },
    { icon: Globe, title: 'Experiencia Global', description: 'Con presencia en varios países, ofrecemos soporte local dondequiera que estés.' },
    { icon: Award, title: 'Calidad Garantizada', description: 'Nuestros socios son cuidadosamente seleccionados para garantizar la mejor calidad.' },
    { icon: Zap, title: 'Innovación', description: 'Utilizamos las tecnologías más modernas para facilitar y mejorar tu experiencia de viaje.' },
  ];

  const team = [
    { name: 'María Silva', position: 'CEO y Fundadora', image: 'https://images.unsplash.com/photo-1595872018818-97555653a011' },
    { name: 'Juan Santos', position: 'Director de Operaciones', image: 'https://images.unsplash.com/photo-1595872018818-97555653a011' },
    { name: 'Ana Costa', position: 'Gerente de Experiencias', image: 'https://images.unsplash.com/photo-1595872018818-97555653a011' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Sobre Nosotros - Agencia de Viajes Premium</title>
        <meta
          name="description"
          content="Conozca nuestra historia, valores y equipo. Somos una agencia de viajes premium con más de 15 años de experiencia creando experiencias únicas."
        />
      </Helmet>

      <section className="relative py-20 lg:py-32 gradient-bg text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nuestra Historia
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Desde hace más de 15 años, convertimos sueños en realidad a través de experiencias de viaje únicas e inolvidables alrededor del mundo.
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover"
            alt="Mapa del mundo abstracto como fondo de la sección sobre nosotros"
            src="https://images.unsplash.com/photo-1697747147941-04a7aefbd0b2"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="two-column-section">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
                  Cómo Empezó Todo
                </h2>
                <div className="space-y-6 text-gray-600 text-lg">
                  <p>
                    Nuestra historia comenzó en 2009, cuando nuestra fundadora María Silva decidió transformar su pasión por los viajes en un negocio que pudiera ofrecer experiencias únicas a otras personas.
                  </p>
                  <p>
                    Comenzamos como una pequeña agencia local, pero nuestra dedicación a la excelencia y al servicio personalizado nos permitió crecer y expandirnos a mercados internacionales.
                  </p>
                  <p>
                    Hoy somos una de las principales agencias de viajes premium del país, con oficinas en 6 países y un equipo de más de 200 profesionales especializados en crear experiencias inolvidables.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  className="w-full rounded-xl shadow-2xl"
                  alt="Equipo de viaje colaborando en una oficina moderna"
                  src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestros Valores
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Los valores que nos guían en cada decisión y experiencia que creamos.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title} // Adicionando key única
                className="bg-white rounded-xl p-8 shadow-lg text-center transition-transform transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Nuestro Equipo
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conozca a los profesionales apasionados que hacen que sus viajes sean posibles.
          </motion.p>
          <div className="relative overflow-hidden max-w-full cursor-grab active:cursor-grabbing">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="0px"
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    centerPadding: '60px',
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    centerPadding: '30px',
                    nextArrow: null,
                    prevArrow: null,
                  },
                },
              ]}
            >
              {team.map((member, index) => (
                <div key={member.name} className="px-4 w-full max-w-[400px] mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto aspect-[4/3] object-cover rounded-[16px]"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mt-5">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;