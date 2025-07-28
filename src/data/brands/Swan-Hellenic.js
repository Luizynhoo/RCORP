const name = 'Swan Hellenic';

export const SwanHellenic = {
  name: 'Swan Hellenic',
  description: 'Desde la naturaleza salvaje de las regiones polares, hasta los increíbles paisajes de África y América Latina.',
  subtitles: 'Desde la naturaleza salvaje de las regiones polares, hasta los increíbles paisajes de África y América Latina.',
  subtitleBrands: 'Un viaje sin límites: Descubra las regiones polares y la diversidad de África y América Latina.',
  fullDescription: 'Ofrece cruceros de expedición cultural de lujo a destinos remotos, desde polos hasta trópicos. Sus pequeños barcos boutique brindan una exploración inmersiva con expertos y un fuerte compromiso sostenible. Perfectos para viajeros que buscan aventura, cultura y un descubrimiento responsable.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#004155',
  colorEnd: '#E4A660',
  heroImage: 'Ejecutivos en un aeropuerto moderno con servicios premium de negocios',
  Image: '/Header/swan-header.webp',
  logoRGB: '/RGB/logo-swan-rgb.png',
  logoHeight: 'h-[45px]',
  expTitle:'Experiencias que Transforman',
  exp: 'Creamos experiencias transformadoras que lo conectan profundamente con culturas, paisajes y aventuras que recordará por siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Planificación Corporativa Integral',
    'Alojamientos Estratégicos',
    'Salas de Reuniones Equipadas',
    'Soporte Especializado 24/7',
  ],
  destinations: [
    {
      name: 'São Paulo',
      image: 'Centro financiero de São Paulo con rascacielos',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'El epicentro financiero que impulsa América Latina.',
      description: 'São Paulo es el principal hub de negocios de América Latina. Ofrecemos servicios completos para viajes corporativos en la mayor metrópolis brasileña.',
      bestTime: 'Todo el año',
      duration: '2-5 días',
      rating: '4.7',
      highlights: [
        'Hoteles ejecutivos en el centro financiero',
        'Salas de reuniones equipadas',
        'Transporte ejecutivo',
        'Networking en eventos corporativos',
        'Soporte logístico completo'
      ]
    },
    {
      name: 'Nueva York',
      image: 'Distrito financiero de Manhattan',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Donde los negocios del mundo convergen.',
      description: 'Nueva York es el centro financiero mundial. Ofrecemos servicios premium para ejecutivos que buscan eficiencia y productividad en sus viajes de negocios.',
      bestTime: 'Todo el año',
      duration: '3-7 días',
      rating: '4.8',
      highlights: [
        'Hoteles en Manhattan',
        'Acceso a Wall Street',
        'Salas de reuniones premium',
        'Transporte ejecutivo',
        'Networking internacional'
      ]
    },
    {
      name: 'Londres',
      image: 'Distrito financiero de Londres con arquitectura moderna',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Hub financiero europeo.',
      description: 'Londres es el principal centro financiero de Europa. Ofrecemos servicios especializados para ejecutivos que hacen negocios en la capital británica.',
      bestTime: 'Todo el año',
      duration: '2-6 días',
      rating: '4.8',
      highlights: [
        'Hoteles en la City de Londres',
        'Acceso al distrito financiero',
        'Salas de conferencias modernas',
        'Transporte ejecutivo',
        'Eventos de networking'
      ]
    },
    {
      name: 'Singapur',
      image: 'Marina Bay Sands en Singapur',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Tu acceso directo al corazón de Asia.',
      description: 'Singapur es el principal hub de negocios de Asia. Ofrecemos servicios completos para ejecutivos que hacen negocios en el continente asiático.',
      bestTime: 'Todo el año',
      duration: '3-7 días',
      rating: '4.9',
      highlights: [
        'Hoteles en el distrito financiero',
        'Facilidades para negocios',
        'Conectividad asiática',
        'Infraestructura moderna',
        'Eficiencia logística'
      ]
    },
    {
      name: 'Frankfurt',
      image: 'Panorama del distrito financiero de Frankfurt',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'El corazón financiero de Alemania.',
      description: 'Frankfurt es el corazón financiero de Alemania y un importante hub europeo. Ofrecemos servicios especializados para viajes corporativos eficientes.',
      bestTime: 'Todo el año',
      duration: '2-5 días',
      rating: '4.7',
      highlights: [
        'Cercanía al distrito bancario',
        'Infraestructura para negocios',
        'Conectividad europea',
        'Eficiencia alemana',
        'Facilidades corporativas'
      ]
    },
    {
      name: 'Dubái',
      image: 'Centro de negocios moderno en Dubái',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Hub de negócios del Medio Oriente.',
      description: 'Dubái es el principal centro de negocios del Medio Oriente. Ofrecemos servicios premium para ejecutivos que hacen negocios en la región.',
      bestTime: 'Nov - Mar',
      duration: '3-6 días',
      rating: '4.8',
      highlights: [
        'Hoteles de negocios de lujo',
        'Facilidades corporativas',
        'Conectividad global',
        'Zona franca de negocios',
        'Networking internacional'
      ]
    }
  ],
};
