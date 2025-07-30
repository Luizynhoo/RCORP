const name = 'The Ritz-Carlton Yacht Collection';

export const RitzCarlton = {
  name: 'The Ritz-Carlton Yacht Collection',
  description: 'Con un diseño elegante, servicio personalizado y rutas exclusivas, redefine el concepto de hospitalidad de alto nivel en el mundo náutico.',
  subtitles: 'Viva la excelencia y el lujo incomparable en cada travesía.',
  subtitleBrands: 'Un viaje sin límites: La expresión sublime del lujo y la hospitalidad enalta mar.',
  fullDescription: 'The Ritz-Carlton Yacht Collection extiende el célebre legado de hospitalidad de la marca Ritz-Carlton a los mares, marcando el inicio de una nueva era en los viajes de lujo a bordo de yates. Con un diseño excepcionalmente elegante y contemporáneo, nuestros yates son verdaderas obras de arte flotantes. Sin dudas redefinimos por completo el concepto de hospitalidad de alto nivel en el mundo náutico.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#000000',
  colorEnd: '#BFD4EC',
  heroImage: 'Yate de lujo de The Ritz-Carlton navegando al atardecer con servicio a bordo exclusivo',
  Image: '/Header/RitzCarlton-header.webp',
  logoRGB: '/RGB/logo-Ritz-Carlton-rgb.png',
  logoHeight: 'h-[75px]',
  expTitle:'Experiencias que Transforman',
  exp: 'Ofrecemos mucho más que simples viajes. Creamos experiencias transformadoras que lo conectan con culturas, paisajes y aventuras que permanecerán en su memoria para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Yates de lujo con suites espaciosas y terraza privada',
    'Servicio personalizado y discreto',
    'Gastronomía de clase mundial con chefs galardonados',
    'Spa, bienestar y programas de relajación en alta mar',
  ],
 destinations: [
  {
    name: 'Caribe',
    image: 'Playas tropicales privadas y arrecifes de coral en el Caribe',
    DestinoImg: '../Destinations/Caribe.jpg',
    shortDescription: 'Islas paradisíacas de arena blanca y aguas cristalinas.',
    description: 'Descubra el Caribe a bordo de Evrima e Ilma entre diciembre y marzo, con puertos exclusivos como Ocean Cay MSC Marine Reserve, St. Barts y Bequia. Alta gastronomía, snorkel en arrecifes y experiencias isleñas con elegancia.',
    bestTime: 'Dic - Mar',
    duration: '5‑10 noches',
    rating: '4.9',
    highlights: [
      'Playas privadas y arrecifes de coral',
      'Escalas en islas como Bequia y St. Barts',
      'Ambiente boutique en barcos luxuosos',
      'Spa y wellness a bordo',
      'Selección gastronómica de chefs reconocidos'
    ]
  },
  {
    name: 'Mediterráneo',
    image: 'Villas costeras y puertos históricos en el Mediterráneo europeo',
    DestinoImg: '../Destinations/Mediterraneo.webp',
    shortDescription: 'Puertos culturales y vistas costeras desde Roma hasta Mónaco.',
    description: 'Itinerarios de verano 2025 operados por Ilma, Luminara y Evrima visitando la Riviera Francesa, islas griegas, costa italiana y puertos como Cannes, Portofino, Santorini y Dubrovnik. Tours exclusivos en tierra y gastronomía de lujo.',
    bestTime: 'Abr - Oct',
    duration: '7‑10 noches',
    rating: '4.9',
    highlights: [
      'Visita a Mónaco, Cannes y Porto Cervo',
      'Islas como Santorini, Milos y Dubrovnik',
      'Experiencias gastronómicas y tour de vinos',
      'Excursiones en helicóptero o kayak en la Riviera',
      'Alojamiento boutique y servicio ultra personalizado'
    ]
  },
  {
    name: 'Norte de Europa & Báltico',
    image: 'Fiordos noruegos y ciudades medievales del Báltico',
    DestinoImg: '../Destinations/NortedaEuropa.webp',
    shortDescription: 'Castillos, fiordos y capitales escandinavas en viaje elegante.',
    description: 'En verano 2025, Ilma opera rutas desde Oslo o Estocolmo hasta Reykjavík incluyendo Bergen, Trondheim y Tallin. Experiencias culturales únicas con más tiempo en puerto, excursiones privadas y encanto nórdico en cada escala.',
    bestTime: 'Jul - Ago',
    duration: '7‑10 noches',
    rating: '4.9',
    highlights: [
      'Navegación por fiordos como Geirangerfjord',
      'Capitales como Oslo, Helsinki y Tallin',
      'Compras de ámbar báltico y arte local',
      'Bienestar a bordo y spa Ritz‑Carlton',
      'Excursiones culturales guiadas en cada ciudad'
    ]
  },
  {
    name: 'Alaska',
    image: 'Glaciares imponentes y naturaleza virgen de Alaska',
    DestinoImg: '../Destinations/Alaska.jpg',
    shortDescription: 'Exploración salvaje con estilo y confort inigualables.',
    description: 'Disponible en rutas ampliadas en verano 2026 y 2027 operadas por Luminara (y posiblemente Luminara también en 2025). Explore glaciares, auroras boreales, avistamiento de fauna y paisajes árticos con experiencias Ritz‑Carlton onboard y excursiones inmersivas.',
    bestTime: 'Jun - Sep',
    duration: '10‑14 noches',
    rating: '5.0',
    highlights: [
      'Visitas a glaciares y bahías remotas',
      'Avistamiento de vida salvaje (osos, ballenas)',
      'Rutas en tren panorámico y excursiones terrestres',
      'Spas y bienestar frente al océano',
      'Servicio boutique en yate de lujo'
    ]
  },
  {
    name: 'Asia / Pacífico Sur',
    image: 'Islas exóticas del Pacífico y paisajes tropicales asiáticos',
    DestinoImg: '../Destinations/AsiaySudesteAsiatico.webp',
    shortDescription: 'Aventura cultural en Asia y Paraíso en el Pacífico.',
    description: 'Desde diciembre 2025 Luminara realizará cruceros en Asia‑Pacífico, explorando Filipinas, Indonesia, Japón, Vietnam y Polinesia. Incluye itinerarios que combinan ciudades vibrantes con islas remotas como Komodo, Gili y Bora Bora.',
    bestTime: 'Dic 2025 - Mar 2026',
    duration: '7‑14 noches',
    rating: '5.0',
    highlights: [
      'Templos de Bali y jardines de Komodo',
      'Playas de arena blanca en Polinesia y Filipinas',
      'Gastronomía y cultura local en cada escala',
      'Kayak, buceo y experiencias en comunidad',
      'Itinerarios boutique en barcos ultra‑lujosos'
    ]
  },
  {
    name: 'Grand Voyages / Travessías oceánicas',
    image: 'Mapa global con rutas transcontinentales y escala exóticas',
    DestinoImg: '../Destinations/NortedaEuropa.jpg',
    shortDescription: 'Viajes épicos cruzando océanos desde Europa hasta Asia o América.',
    description: 'Los Grand Voyages de Ritz‑Carlton Yacht Collection incluyen cruces como Roma a Montecarlo a través del Mediterráneo, o desde Norte Europa hasta Río, además de itinerarios globales que conectan África, Asia, Europa y América en viajes de más de 40 noches.',
    bestTime: 'Mar - Sep',
    duration: '30‑52 noches',
    rating: '5.0',
    highlights: [
      'Rutas como Roma–Montecarlo–Barcelona y Estocolmo–Reykjavík',
      'Escalas en regiones exóticas como Seychelles o India',
      'Experiencias culturales profundas y excursiones premium',
      'Servicio Ritz‑Carlton a bordo con suite ultra espaciosa',
      'Viajes diseñados para exploradores del mundo'
    ]
  }
]

};
