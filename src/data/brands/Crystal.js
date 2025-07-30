const name = 'Crystal';

export const Crystal = {
  name: 'Crystal',
  description: 'Elegancia y confort que navegan por los más inusitados destinos alrededor del mundo. ',
  subtitles: 'Elegancia y confort que navegan por los másinusitados destinos alrededor del mundo.',
  subtitleBrands: 'Experimente la elegancia y el confort, en un viaje por los destinos más singulares del planeta.',
  fullDescription: 'Cree instantes memorables en perfecta armonía familiar. Nuestros paquetes integran actividades para todas las edades, residencias familiares de confort superior y entretenimiento asegurado para el deleite de cada participante.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#232122',
  colorEnd: '#E4E1DC',
  heroImage: 'Familia feliz jugando en la playa durante unas vacaciones tropicales',
  Image: '/Header/crystal-header.webp',
  logoRGB: '/RGB/logo-crystal-rgb.png',
  logoHeight: 'h-[30px]',
  expTitle: 'Experiencias Inigualables',
  exp: 'Ofrecemos mucho más que viajes comunes. Conectamos a nuestros viajeros con culturas auténticas, paisajes sublimes y aventuras memorables.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Actividades para cada generación',
    'Residencias familiares selectas',
    'Entretenimiento cautivador para los más jóvenes',
    'Bienestar y tranquilidad asegurados',
  ],
  destinations: [
    {
      name: 'Europa y Mediterráneo',
      image: 'Ciudad costera junto al mar Mediterráneo con arquitectura europea',
      DestinoImg: '../Destinations/EuropayMediterraneo.webp',
      shortDescription: 'Descubra vibrantes ciudades europeas desde Monte Carlo hasta Barcelona.',
      description: 'Navegue por Europa y el Mediterráneo a bordo de Crystal Serenity o Crystal Symphony. Visite destinos icónicos como Monte Carlo, Cannes, Barcelona, Roma, Santorini y Dubrovnik, combinando cultura, historia y paisajes impresionantes.',
      bestTime: 'Abr - Oct',
      duration: '7-11 días',
      rating: '4.9',
      highlights: [
        'Puerto de Mónaco y circuito de Fórmula 1',
        'Playas y ciudades cosmopolitas como Barcelona',
        'Islas griegas como Santorini y Mykonos',
        'Ciudades históricas como Dubrovnik, Roma y Venecia',
        'Excursiones terrestres exclusivas con Abercrombie & Kent'
      ]
    },
    {
      name: 'Américas y Caribe',
      image: 'Paisajes caribeños con aguas turquesas y playas paradisíacas',
      DestinoImg: '../Destinations/AmericasyCaribe.webp',
      shortDescription: 'Escapadas tropicales en islas y costas llenas de sol y cultura.',
      description: 'Explora el Caribe y las Américas navegando desde el Canal de Panamá hasta el Caribe, con puertos como Cartagena, Nueva York, Florida, Aruba, cayos del Caribe y ciudades costeras vibrantes.',
      bestTime: 'Dic - Abr',
      duration: '7-14 días',
      rating: '4.8',
      highlights: [
        'Playas paradisíacas y aguas cristalinas',
        'Cultura colonial en Cartagena',
        'Islas como Aruba, Curaçao y San Juan',
        'Travesía del Canal de Panamá',
        'Festividades locales y gastronomía regional'
      ]
    },
    {
      name: 'Asia y Sudeste Asiático',
      image: 'Templos exóticos y paisajes fluviales en Asia',
      DestinoImg: '../Destinations/AsiaySudesteAsiatico.webp',
      shortDescription: 'Un viaje cultural al corazón del sudeste asiático y Asia Oriental.',
      description: 'Crystal Cruises ofrece itinerarios en Asia visitando Vietnam, Camboya, Japón, China e India. Incluye estancias múltiples en ciudades como Ho Chi Minh, Phnom Penh y Shanghai, además de excursiones profundas con enfoque cultural.',
      bestTime: 'Mar - Sep',
      duration: '12-20 días',
      rating: '4.8',
      highlights: [
        'Templos de Angkor y mercados flotantes',
        'Ciudades como Shanghai, Mumbai y Bangkok',
        'Experiencias culinarias auténticas',
        'Visitas culturales profundas con expertos locales',
        'Playas vírgenes y excursiones naturales'
      ]
    },
    {
      name: 'África y Océano Índico',
      image: 'Playas exóticas y paisajes africanos frente al océano Índico',
      DestinoImg: '../Destinations/AfricayOceanoIndico.webp',
      shortDescription: 'Safaris costeros y oasis exóticos desde África hasta Seychelles.',
      description: 'La travesía Grand Voyage de Crystal incluye itinerarios desde Ciudad del Cabo pasando por Zanzíbar, Seychelles, Maldivas y la India. Ideal para combinar safaris, playas exóticas y cultura ancestral.',
      bestTime: 'Mar - May',
      duration: '40-51 días',
      rating: '5.0',
      highlights: [
        'Safari costero en Kenia o Tanzania',
        'Playas de Seychelles y Maldivas',
        'Experiencia cultural en Mumbai y el Medio Oriente',
        'Paisajes dramáticos y fauna africana',
        'Itinerarios transcontinentales ultra lujo'
      ]
    },
    {
      name: 'Canadá y Nueva Inglaterra',
      image: 'Paisajes otoñales y costas rocosas en Canadá y Nueva Inglaterra',
      DestinoImg: '../Destinations/Canada.webp',
      shortDescription: 'Otoños dorados y encantadoras ciudades costeras del noreste de América.',
      description: 'Cruceros por Canadá y Nueva Inglaterra en épocas de otoño, con paradas en Quebec, Halifax, Boston y Nueva York. Ideal para apreciar paisajes otoñales y cultura norteamericana clásica.',
      bestTime: 'Sep - Nov',
      duration: '7-10 días',
      rating: '4.7',
      highlights: [
        'Foliage de otoño en Nueva Inglaterra',
        'Ciudades históricas como Boston y Quebec',
        'Mariscos frescos y gastronomía local',
        'Recorridos por acantilados rocosos y paisajes costeros',
        'Ambiente cultural norteamericano clásico'
      ]
    },
    {
      name: 'Grand Voyages / World Cruises',
      image: 'Mapa de ruta global conectando continentes en un viaje épico',
      DestinoImg: '../Destinations/WorldCruises.webp',
      shortDescription: 'Experiencias transcontinentales épicas alrededor del mundo.',
      description: 'Los Grand Voyages de Crystal en 2025 incluyen rutas como Ciudad del Cabo a Barcelona y Estocolmo a Liverpool. Estas expediciones globales ofrecen experiencias culturales profundas en múltiples continentes, con paradas en África, Asia, Europa y América.',
      bestTime: 'Mar - Sep',
      duration: '40-51 días',
      rating: '5.0',
      highlights: [
        'Itinerarios épicos (ej. Cape Town–Barcelona, Estocolmo–Liverpool)',
        'Paradas exóticas como Seychelles, Mauricio e India',
        'Experiencias únicas con Abercrombie & Kent',
        'Lujo a bordo con espacio amplio en suites',
        'Vida cultural inmersiva y destinos fuera de lo común'
      ]
    }
  ],
};
