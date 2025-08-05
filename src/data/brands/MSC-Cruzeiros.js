const name = 'MSC Cruceros';

export const MSCCruzeiros = {
  name: 'MSC Cruceros',
  description: 'Experiencias que se traducen en alegría y diversidad para toda la familia.',
  subtitles: 'Descubra experiencias que unen diversión, cultura y a toda la familia. ',
  subtitleBrands: 'Donde las conexiones auténticas y enriquecedoras cobran vida.',
  fullDescription: 'Sumérjase en la rica historia y cultura de diversas civilizaciones. Nuestros itinerarios incluyen visitas privilegiadas a museos de renombre, exploraciones de sitios arqueológicos fascinantes y experiencias auténticas en comunidades locales.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#000033',
  colorEnd: '#FF6900',
  heroImage: 'Templo antiguo majestuoso con arquitectura histórica impresionante',
  Image: '/Header/msc-header.webp',
  logoRGB: '/RGB/logo-msc-rgb.png',
  logoHeight: 'h-[50px]',
  expTitle: 'Experiencias Inigualables',
  exp: 'Ofrecemos mucho más que simples trayectos; creamos experiencias transformadoras que lo conectan profundamente con culturas milenarias, paisajes sublimes y aventuras inolvidables que perdurarán en su memoria para siempre.',
  videoUrlone: 'https://youtu.be/8McJUhsoDVY?si=I8zW9rxMadLDGzHS',
  videoUrltwo: 'https://youtu.be/dle83luOjLw?si=InbBycgJOBv9gMLB',
  features: [
    'Guías especializados en historia que revelan los secretos de cada destino.',
    'Acceso exclusivo a sitios arqueológicos, permitiéndole explorar sin las multitudes.',
    'Experiencias auténticas con comunidades locales, para una conexión cultural genuina.',
    'Talleres culturales auténticos que le permitirán vivir y aprender las tradiciones.',
  ],
  destinations: [
    {
      name: 'Caribe',
      image: 'Playas paradisíacas y escenarios tropicales en el Caribe',
      DestinoImg: '../Destinations/Caribe.jpg',
      shortDescription: 'Islas exóticas con aguas turquesas y ritmos vibrantes.',
      description: 'Disfrute de itinerarios en el Caribe a bordo de MSC World America, MSC Seashore o MSC Seascape, con salidas desde Miami y Port Canaveral. Incluye destinos como Bahamas, Cayman, Costa Maya y Ocean Cay MSC Marine Reserve.',
      bestTime: 'Dic - Abr',
      duration: '3-7 días',
      rating: '4.8',
      highlights: [
        'Parada privada en Ocean Cay MSC Marine Reserve',
        'Visitas a Nassau, Roatán y Cozumel',
        'Playas cristalinas y deportes acuáticos',
        'Restaurantes temáticos y gastronomía caribeña',
        'Experiencia boutique con nuevo MSC World America'
      ]
    },
    {
      name: 'Mediterráneo',
      image: 'Puertos europeos y costas bañadas por el sol en el Mediterráneo',
      DestinoImg: '../Destinations/Mediterraneo.webp',
      shortDescription: 'Rutas clásicas por las costas más emblemáticas de Europa.',
      description: 'Navegue por el Mediterráneo Occidental desde puertos españoles como Barcelona y Málaga, visitando ciudades como Roma, Cannes, Génova o Mallorca, a bordo de MSC Grandiosa, Seashore o otros barcos icónicos.',
      bestTime: 'Abr - Oct',
      duration: '7-14 días',
      rating: '4.9',
      highlights: [
        'Itinerarios desde Barcelona, Valencia y Málaga',
        'Destinos como Italia, Francia y Mallorca',
        'Cultura, playas y gastronomía italiana y española',
        'Escalas frecuentes en puertos españoles en 2025',
        'Tecnología ecológica en barcos como MSC Grandiosa y Seashore'
      ]
    },
    {
      name: 'América del Sur / Brasil',
      image: 'Costa brasileña, ciudades históricas y playas tropicales',
      DestinoImg: '../Destinations/AmericadoSul.jpg',
      shortDescription: ' Cruceros por Brasil, Uruguay y Argentina.',
      description: 'MSC opera múltiples barcos —como MSC Seaview, Grandiosa, Splendida, Poesia, Armonia y Lirica— en itinerarios de 7 noches que conectan Santos, Río de Janeiro, Salvador, Búzios, Montevideo y Buenos Aires.',
      bestTime: 'Nov - Abr',
      duration: '7-9 noches',
      rating: '4.8',
      highlights: [
        'Temporada 2025–26 con cinco barcos en Sudamérica',
        'Escalas exclusivas en Búzios, Maceió, Salvador y Punta del Este',
        'Posibilidad de embarcar en Santos, Rio e Itajaí',
        'Experiencias culturales en Argentina y Uruguay',
        'Clima cálido y playas en Brasil durante el verano australes'
      ]
    },
    {
      name: 'Norte de Europa y Báltico',
      image: 'Fiordos noruegos y ciudades bálticas llenas de historia',
      DestinoImg: '../Destinations/NortedaEuropa.webp',
      shortDescription: 'Naturaleza escandinava y patrimonio medieval en cruceros nórdicos.',
      description: 'Itinerarios desde Kiel, Hamburgo o Southampton visitando fiordos noruegos y ciudades como Oslo, Estocolmo, Copenhague, Riga y Tallin a bordo de MSC Virtuosa, Euribia o Poesia.',
      bestTime: 'May - Sep',
      duration: '7-14 noches',
      rating: '4.8',
      highlights: [
        'Fiordos como Geirangerfjord y Herencia Fjords',
        'Ciudades bálticas y escandinavas llenas de historia',
        'Cruceros desde Southampton y Kiel',
        'Experiencias en nature y cultura europea',
        'Opciones familiares y excursiones guiadas en cada puerto'
      ]
    },
    {
      name: 'Transatlánticos (Europa ↔ América del Sur)',
      image: 'Mapa de ruta transatlántica conectando continentes',
      DestinoImg: '../Destinations/Transatlantico.webp',
      shortDescription: 'Itinerários sensacionales desde el Mediterráneo a Sudamérica o vice-versa.',
      description: 'MSC ofrece cruceros transatlánticos que conectan Europa con Brasil, incluyendo rutas desde Barcelona o Génova hasta Buenos Aires o Río, con paradas emblemáticas como Tenerife y Casablanca.',
      bestTime: 'Oct - Mar',
      duration: '17-23 noches',
      rating: '5.0',
      highlights: [
        'Itinerarios como Barcelona → Buenos Aires y viceversa',
        'Rutas que incluyen Tenerife, Casablanca y Río de Janeiro',
        'Experiencia de crucero completo, ideal para viajes prolongados',
        'Lujo a bordo con especial atención al confort y gastronomía',
        'Diversidad cultural en cada puerto visitado'
      ]
    }
  ],

};
