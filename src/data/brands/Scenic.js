const name = 'Scenic';

export const Scenic = {
  name: 'Scenic',
  description: 'Viajes que inspiran sostenibilidad y armonía con la naturaleza',
  subtitles: 'Viajes que inspiran sostenibilidad y armonía con la naturaleza.',
  subtitleBrands: 'Turismo que nutre el planeta: Fomenta la sostenibilidad y la armonía natural.',
  fullDescription: 'Explora el mundo de forma consciente. Nuestros tours ecológicos ofrecen experiencias únicas en armonía con la naturaleza, mientras apoyamos la conservación y a las comunidades locales.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#C6A367',
  colorEnd: '#000000',
  heroImage: 'Selva tropical exuberante con vida silvestre diversa',
  Image: '/Header/scenic-header.webp',
  logoRGB: '/RGB/logo-scenic-rgb.png',
  logoHeight: 'h-[35px]',
  expTitle: 'Experiencias que Transforman',
  exp: 'Vamos más allá de un simple viaje. Creamos experiencias transformadoras que lo conectan profundamente con culturas, paisajes y aventuras que recordará toda la vida.',
  videoUrlone: 'https://www.youtube.com/embed/GPy1pDj-rPA',
  videoUrltwo: 'https://www.youtube.com/embed/ir1D69PiHJw',
  features: [
    'Prácticas 100% sostenibles',
    'A poyo a comunidades locales',
    'Observación de vida silvestre',
    'Alojamientos ecológicos',
  ],
  destinations: [
    {
      name: 'Duero',
      image: 'Viñedos en terrazas y paisajes dorados del Duero portugués',
      DestinoImg: '../Destinations/DueroPortugal.jpg',
      shortDescription: 'Rutas fluviales por la histórica región vinícola de Portugal.',
      description: 'Explore el valle del Duero en barcos como Scenic Azure, combinando paisajes clásicos, pueblos pintorescos y degustaciones de vino en Porto y sus alrededores.',
      bestTime: 'Mar - Oct',
      duration: '7‑11 días',
      rating: '4.8',
      highlights: [
        'Degustación de vinos del Duero',
        'Paseos por viñedos centenarios',
        'Excursiones en kayak o en tren panorámico',
        'Cultura portuguesa y patrimonio mundial',
        'Servicio de mayordomo en suites panorámicas'
      ]
    },
    {
      name: 'Reno, Danubio, Mosela, Main, Elba',
      image: 'Castillos y viñedos a orillas del Danubio y el Rin',
      DestinoImg: '../Destinations/Mosele.webp',
      shortDescription: 'Cruceros clásicos entre los grandes ríos y capitales de Europa Central.',
      description: 'Navegue por los ríos emblemáticos de Europa como Danubio, Rin, Mosela, Meno y Elba a bordo de Scenic Emerald o Amber, con escalas en Viena, Budapest, Basilea y Praga.',
      bestTime: 'Abr - Oct',
      duration: '7‑14 días',
      rating: '4.9',
      highlights: [
        'Ciudades como Viena, Budapest y Praga',
        'Castillos medievales y arquitectura imperial',
        'Catas de vino en la región del Mosela',
        'Mercados tradicionales y gastronomía europea',
        'Conciertos clásicos y excursiones culturales'
      ]
    },
    {
      name: 'Sena (París‑Normandía)',
      image: 'La elegancia de París y los paisajes normandos desde el Sena',
      DestinoImg: '../Destinations/Sena.webp',
      shortDescription: 'Cruceros de cultura, mercados navideños y paisajes franceses desde París.',
      description: 'Disfrute del Sena con itinerarios desde París hacia Normandía, excelentes para explorar museos, pueblos como Giverny y mercados navideños únicos en barcos como Scenic Sapphire y Ruby.',
      bestTime: 'Nov - Dic (mercados navideños), Abr - Oct',
      duration: '7‑10 días',
      rating: '4.8',
      highlights: [
        'Mercados de Navidad en París y Normandía',
        'Visita al jardín de Monet en Giverny',
        'Pueblos costeros y arquitectura normanda',
        'Arte y cultura francesa clásica',
        'Experiencias fluviales con lujo europeo'
      ]
    },
    {
      name: 'Mekong (Vietnam‑Camboya‑Laos)',
      image: 'Templos, mercados flotantes y naturaleza del Mekong',
      DestinoImg: '../Destinations/Mekong.webp',
      shortDescription: 'Cruceros culturales por el Mekong con templos y mercados vibrantes.',
      description: 'Recorra el Mekong entre Vietnam y Camboya a bordo de Scenic Spirit. Incluye cenas en templos de Angkor, visitas guiadas en tuk‑tuk, mercados flotantes y patrimonio budista.</js>',
      bestTime: 'Nov - Feb',
      duration: '7‑18 días',
      rating: '4.9',
      highlights: [
        'Cena exclusiva iluminada en templo de Angkor',
        'Mercados flotantes en Cai Be',
        'Tours culturales en Phnom Penh y Siem Reap',
        'Opciones de actividades Scenic Freechoice',
        'Servicio de mayordomo, bebidas y fibra óptica incluidos'
      ]
    },
    {
      name: 'Yangtsé (China)',
      image: 'Paisajes fluviales chinos y Gargantas del Yangtsé',
      DestinoImg: '../Destinations/Yangtse.jpg',
      shortDescription: 'Ruta legendaria por el río más largo de Asia, con las Tres Gargantas.',
      description: 'Explore el Yangtsé desde Chongqing hasta Yichang o Shanghai. Disfrute de las famosas Tres Gargantas, templos ancestrales, y cultura china tradicional en trayectos de 3 a 14 noches.',
      bestTime: 'Mar - Nov',
      duration: '3‑14 noches',
      rating: '4.7',
      highlights: [
        'Las Tres Gargantas: Qutang, Wu y Xiling',
        'Visitas a Fengdu y Baidicheng',
        'Barcazas de lujo y excursiones culturales',
        'Historia china y danza tradicional',
        'Paradas en ciudades portuarias modernas'
      ]
    },
    {
      name: 'Nilo (Egipto)',
      image: 'Templos egipcios y paisajes históricos junto al Nilo',
      DestinoImg: '../Destinations/Nilo.png',
      shortDescription: 'Cruceros históricos entre monumentos egipcios milenarios.',
      description: 'Recorra el Nilo en embarcaciones boutique de Scenic Eclipse en recorridos culturales entre El Cairo, Luxor, Karnak, Valle de los Reyes y templos faraónicos.',
      bestTime: 'Oct - Abr',
      duration: '7‑12 noches',
      rating: '4.9',
      highlights: [
        'Valle de los Reyes y templos de Luxor',
        'Visitas a Karnak y templos de Giza',
        'Guias egiptólogos expertos a bordo',
        'Opciones de cronologías históricas personalizadas',
        'Experiencia cultural profunda y lujo elegante'
      ]
    }
  ]
};
