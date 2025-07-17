const name = 'The Ritz-Carlton Yacht Collection';

export const RitzCarlton = {
  name: 'The Ritz-Carlton Yacht Collection',
  description: 'Excelencia en hospitalidad y experiencias de lujo en alta mar',
  fullDescription: 'The Ritz-Carlton Yacht Collection lleva el legado de la marca Ritz-Carlton a los mares, ofreciendo una nueva era de viajes en yates de lujo. Con un diseño elegante, servicio personalizado y rutas exclusivas, redefine el concepto de hospitalidad de alto nivel en el mundo náutico.',
  secondDescription: 'Nuestro equipo especializado trabaja incansablemente para garantizar que cada detalle de su experiencia sea perfecto. Desde la planificación inicial hasta el regreso a casa, estamos aquí para hacer que su viaje sea inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#000000',
  colorEnd: '#BFD4EC',
  heroImage: 'Yate de lujo de The Ritz-Carlton navegando al atardecer con servicio a bordo exclusivo',
  Image: '/Header/RitzCarlton-header.webp',
  logoRGB: '/RGB/logo-Ritz-Carlton-rgb.png',
  logoHeight: 'h-[75px]',
  exp: ' Ofrecemos mucho más que simples viajes. Creamos experiencias transformadoras que lo conectan con culturas, paisajes y aventuras que permanecerán en su memoria para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Yates de lujo con suites espaciosas y terraza privada',
    'Servicio a bordo personalizado y discreto',
    'Gastronomía de clase mundial con chefs galardonados',
    'Spa, bienestar y programas de relajación en alta mar',
    'Acceso a puertos exclusivos y destinos menos explorados',
    'Excursiones cuidadosamente seleccionadas en tierra'
  ],
  destinations: [
    {
      name: 'Kyoto',
      image: 'Vista del río Kamogawa con arquitectura tradicional japonesa',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Tradición japonesa con un toque contemporáneo',
      description:
        'Ubicado a orillas del río Kamogawa, The Ritz-Carlton, Kyoto ofrece una inmersión en la cultura japonesa con diseño inspirado en ryokans y servicios de lujo. Una fusión perfecta entre serenidad y sofisticación.',
      bestTime: 'Mar - May, Oct - Nov',
      duration: '4-6 días',
      rating: '4.9',
      highlights: [
        'Ceremonia del té tradicional',
        'Jardines japoneses privados',
        'Alta cocina kaiseki',
        'Visitas a templos históricos',
        'Vistas a las montañas Higashiyama'
      ]
    },
    {
      name: 'Ginebra',
      image: 'Vista del lago Léman con montañas y hotel Ritz al fondo',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Elegancia suiza a orillas del lago Léman',
      description:
        'Con una ubicación privilegiada, The Ritz-Carlton Hotel de la Paix en Ginebra combina historia, arte y un servicio excepcional con vistas impresionantes a los Alpes y al lago.',
      bestTime: 'May - Sep',
      duration: '3-5 días',
      rating: '4.8',
      highlights: [
        'Paseos en barco por el lago Léman',
        'Degustación de chocolates suizos',
        'Vistas al Mont Blanc',
        'Exploración del casco antiguo de Ginebra',
        'Museos y galerías reconocidas'
      ]
    },
    {
      name: 'Bali',
      image: 'Villa privada del Ritz-Carlton en Ubud con piscina infinita',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Refugio espiritual entre playas y selvas',
      description:
        'The Ritz-Carlton, Bali ofrece una experiencia de lujo serena con vistas al océano y cultura balinesa auténtica. Ideal para quienes buscan tranquilidad, belleza natural y servicio cálido.',
      bestTime: 'May - Sep',
      duration: '6-8 días',
      rating: '4.9',
      highlights: [
        'Spa frente al mar con rituales balineses',
        'Villas con piscinas privadas',
        'Gastronomía asiática contemporánea',
        'Clases de yoga al amanecer',
        'Ceremonias culturales y ofrendas florales'
      ]
    }
  ]
};
