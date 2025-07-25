const name = 'Swan Hellenic';

export const SwanHellenic = {
  name: 'Swan Hellenic',
  description: 'Desde la naturaleza salvaje de las regiones polares, hasta los increíbles paisajes de África y América Latina.',
  subtitles: 'Desde la naturaleza salvaje de las regiones polares, hasta los increíbles paisajes de África y América Latina.',
  subtitleBrands: 'Desde la naturaleza salvaje de las regiones polares, hasta los increíbles paisajes de África y América Latina.',
  fullDescription: 'Optimice sus viajes de negocios con nuestros servicios especializados. Ofrecemos planificación completa, alojamientos estratégicos, salas de reuniones equipadas y soporte 24/7 para garantizar el éxito de sus actividades empresariales.',
  secondDescription: 'Nuestro equipo especializado trabaja incansablemente para asegurar que cada detalle de su experiencia sea perfecto. Desde la planificación inicial hasta el regreso a casa, estamos aquí para hacer que su viaje sea inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#004155',
  colorEnd: '#E4A660',
  heroImage: 'Ejecutivos en un aeropuerto moderno con servicios premium de negocios',
  Image: '/Header/swan-header.webp',
  logoRGB: '/RGB/logo-swan-rgb.png',
  logoHeight: 'h-[45px]',
  exp: ' Ofrecemos mucho más que simples viajes. Creamos experiencias transformadoras que lo conectan con culturas, paisajes y aventuras que quedarán en su memoria para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Planificación corporativa completa',
    'Alojamientos estratégicos',
    'Salas de reuniones equipadas',
    'Soporte especializado 24/7',
    'Gestión de gastos',
    'Informes detallados'
  ],
  destinations: [
    {
      name: 'São Paulo',
      image: 'Centro financiero de São Paulo con rascacielos',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Centro financiero de América Latina',
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
      shortDescription: 'Capital mundial de los negocios',
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
      shortDescription: 'Hub financiero europeo',
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
      shortDescription: 'Puerta de entrada a Asia',
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
      name: 'Fráncfort',
      image: 'Panorama del distrito financiero de Fráncfort',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Centro financiero alemán',
      description: 'Fráncfort es el corazón financiero de Alemania y un importante hub europeo. Ofrecemos servicios especializados para viajes corporativos eficientes.',
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
      shortDescription: 'Hub de negocios del Medio Oriente',
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
