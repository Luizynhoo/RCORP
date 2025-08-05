const name = 'AmaWaterways';

export const AmaWaterways = {
  name: 'AmaWaterways®',
  description: 'Viajes de lujo y destinos exclusivos definen el concepto de esta marca. ',
  subtitles: 'Viajes que desbordan lujo y comodidad por los más hermosos rios del mundo.',
  subtitleBrands: 'Adentrese en culturas exclusivas y el lujo más exquisito en una experiencia única diseñada para aquellos que buscan lo extraordinario.',
  fullDescription: 'Viva la cumbre del lujo y la exclusividad con nuestros tours premium. Ofrecemos alojamientos de primera clase, gastronomía de alta cocina y el privilegio de explorar destinos exclusivos del mundo reservados para unos pocos privilegiados.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#00263E',
  colorEnd: '#BD965C',
  heroImage: 'Resort de lujo con piscina infinita y vista panorámica al océano',
  Image: '/Header/amawaterways-header.webp',
  logoRGB: '/RGB/logo-amawaterways-rgb.png',
  logoHeight: 'h-[30px]',
  expTitle: 'Experiencias Únicas y Transformadoras',
  exp: 'Ofrecemos mucho más que viajes; creamos experiencias transformadoras que lo conectarán con culturas fascinantes, paisajes asombrosos y aventuras inolvidables que permanecerán en su memoria para siempre.',
  videoUrlone: 'https://youtu.be/j8rrDUjMrWw?si=w6kP3-DJyk4MYXI7',
  videoUrltwo: 'https://youtu.be/T0yOjQkL8mY?si=MeN1mapdq8WQL0za',
  features: [
    'Alojamientos exclusivos de 5 estrellas',
    'Experiencias gastronómicas con chefs de renombre',
    'Acceso VIP a atracciones y eventos',
    'Conserje personal 24/7',
  ],
  destinations: [
    {
      name: 'Danubio',
      image: 'Castillos y ciudades históricas a orillas del Danubio',
      DestinoImg: '../Destinations/Danubio.webp',
      shortDescription: 'Un río legendario que conecta culturas, castillos y ciudades vibrantes de Europa Central.',
      description: 'Navegue por el corazón de Europa a través del Danubio, explorando ciudades como Viena, Budapest y Bratislava. Viva la elegancia imperial, pueblos encantadores y paisajes impresionantes en un crucero culturalmente rico.',
      bestTime: 'Abr - Oct',
      duration: '7-14 días',
      rating: '4.8',
      highlights: [
        'Conciertos clásicos en palacios vieneses',
        'Catas de vino en pueblos austríacos',
        'Visitas guiadas en Budapest y Bratislava',
        'Castillos medievales a lo largo del río',
        'Gastronomía típica en tabernas locales'
      ]
    },
    {
      name: 'Rin, Mosela y Meno',
      image: 'Viñedos y pueblos encantadores a orillas del Rin',
      DestinoImg: '../Destinations/Mosele.webp',
      shortDescription: 'Romanticismo europeo entre castillos, vino y arquitectura de cuento.',
      description: 'Explore el romanticismo de Europa navegando por los ríos Rin, Mosela y Meno. Descubra castillos imponentes, deguste vinos premiados y sumérjase en el patrimonio cultural y arquitectónico de la región.',
      bestTime: 'May - Sep',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Catas en viñedos de la región de Mosela',
        'Castillos medievales como el Marksburg',
        'Arquitectura de cuento en Rüdesheim',
        'Cervecerías tradicionales y mercados históricos',
        'Senderismo suave entre viñedos centenarios'
      ]
    },
    {
      name: 'Sena, Garona y Dordoña',
      image: 'Regiones vinícolas de Francia con encanto y sabor',
      DestinoImg: '../Destinations/Sena.webp',
      shortDescription: 'Descubra el encanto de Francia entre París y Burdeos, navegando por paisajes históricos y viñedos famosos.',
      description: 'Explore el corazón vinícola de Francia en Burdeos o navegue por el río Sena desde París hasta Normandía. Degustaciones, historia y paisajes inolvidables marcan esta experiencia elegante.',
      bestTime: 'May - Oct',
      duration: '7-9 días',
      rating: '4.8',
      highlights: [
        'Degustaciones de vino en castillos históricos',
        'Paseos por viñedos centenarios',
        'Clases de cocina francesa a bordo',
        'Mercados locales en Burdeos y París',
        'Paseos en bicicleta por pueblos rurales'
      ]
    },
    {
      name: 'Duero',
      image: 'Paisajes escarpados y viñedos en terrazas',
      DestinoImg: '../Destinations/Doro.webp',
      shortDescription: 'Explore el alma de Portugal navegando por el río Duero entre vinos y tradiciones.',
      description: 'El Duero ofrece un crucero auténtico por el norte de Portugal. Visite bodegas de vino de Oporto, pueblos históricos y disfrute de paisajes naturales deslumbrantes.',
      bestTime: 'Mar - Oct',
      duration: '7 días',
      rating: '4.7',
      highlights: [
        'Catas de vino de Oporto en quintas tradicionales',
        'Visitas a ciudades como Oporto y Régua',
        'Gastronomía portuguesa con platos típicos',
        'Paseos por viñedos en terrazas',
        'Interacción con artesanos y productores locales'
      ]
    },
    {
      name: 'Mekong',
      image: 'Mercados flotantes y templos exóticos',
      DestinoImg: '../Destinations/Mekong.webp',
      shortDescription: 'Un viaje entre culturas milenarias, templos y mercados vibrantes en el sudeste asiático.',
      description: 'Navegar por el Mekong es sumergirse en la esencia de Vietnam y Camboya. Descubra templos antiguos, pueblos flotantes y una rica herencia cultural que permanece viva con el tiempo.',
      bestTime: 'Nov - Feb',
      duration: '7-12 días',
      rating: '4.8',
      highlights: [
        'Templos de Angkor Wat y Phnom Penh',
        'Mercados flotantes en Cai Be',
        'Cocina auténtica del sudeste asiático',
        'Interacción con comunidades locales',
        'Paseos en tuk-tuk por pueblos exóticos'
      ]
    },
    {
      name: 'Nilo o Magdalena (2025)',
      image: 'Colorida y cultural, la Colombia fluvial',
      DestinoImg: '../Destinations/Madalena.webp',
      shortDescription: 'Una nueva forma de explorar Colombia a través de su río más icónico.',
      description: 'El crucero por el río Magdalena será una oportunidad única para descubrir la música, gastronomía e historia colombiana, navegando entre ciudades vibrantes y paisajes tropicales.',
      bestTime: 'Dic - Mar',
      duration: '7-9 días',
      rating: 'Nuevo en 2025',
      highlights: [
        'Ritmos caribeños y espectáculos culturales',
        'Ciudades históricas como Mompox y Barranquilla',
        'Degustación de café y platos típicos colombianos',
        'Interacción con comunidades ribereñas',
        'Paisajes tropicales y vida silvestre'
      ]
    }
  ],
};
