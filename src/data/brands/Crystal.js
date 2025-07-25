const name = 'Crystal';

export const Crystal = {
  name: 'Crystal',
  description: 'Elegancia y confort que navegan por los más inusitados destinos alrededor del mundo. ',
  subtitles: 'Elegancia y confort que navegan por los más inusitados destinos alrededor del mundo. ',
  subtitleBrands: 'Elegancia y confort que navegan por los más inusitados destinos alrededor del mundo. ',
  fullDescription: 'Cree recuerdos inolvidables con toda la familia. Nuestros paquetes incluyen actividades para todas las edades, alojamientos familiares cómodos y entretenimiento garantizado para que todos se diviertan.',
  secondDescription: 'Nuestro equipo especializado trabaja incansablemente para garantizar que cada detalle de su experiencia sea perfecto. Desde la planificación inicial hasta el regreso a casa, estamos aquí para hacer que su viaje sea inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#232122',
  colorEnd: '#E4E1DC',
  heroImage: 'Familia feliz jugando en la playa durante unas vacaciones tropicales',
  Image: '/Header/crystal-header.webp',
  logoRGB: '/RGB/logo-crystal-rgb.png',
  logoHeight: 'h-[30px]',
  exp: ' Ofrecemos mucho más que simples viajes. Creamos experiencias transformadoras que lo conectan con culturas, paisajes y aventuras que permanecerán en su memoria para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Actividades para todas las edades',
    'Alojamientos familiares',
    'Entretenimiento infantil',
    'Seguridad garantizada',
    'Comidas adaptadas',
    'Programación flexible'
  ],
  destinations: [
    {
      name: 'Orlando',
      image: 'Parques temáticos coloridos en Orlando',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Capital mundial de los parques temáticos',
      description: 'Orlando ofrece la experiencia familiar definitiva con los mejores parques temáticos del mundo. Diversión garantizada para toda la familia en un destino mágico.',
      bestTime: 'Sep - Nov, Ene - May',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Disney World y Universal Studios',
        'Parques acuáticos emocionantes',
        'Entretenimiento para todas las edades',
        'Hoteles temáticos familiares',
        'Experiencias mágicas únicas'
      ]
    },
    {
      name: 'Cancún',
      image: 'Playa familiar en Cancún con aguas turquesas',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Playas paradisíacas y diversión familiar',
      description: 'Cancún combina playas paradisíacas con actividades familiares. Resorts todo incluido con programación infantil y aventuras para toda la familia.',
      bestTime: 'Dic - Abr',
      duration: '7-10 días',
      rating: '4.8',
      highlights: [
        'Playas de arena blanca',
        'Resorts todo incluido para familias',
        'Actividades acuáticas',
        'Parques acuáticos temáticos',
        'Cultura mexicana para niños'
      ]
    },
    {
      name: 'Portugal',
      image: 'Familia explorando castillos históricos en Portugal',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Historia, cultura y playas para la familia',
      description: 'Portugal ofrece una combinación perfecta de historia, cultura y playas para familias. Un destino seguro con actividades educativas y divertidas.',
      bestTime: 'May - Sep',
      duration: '8-12 días',
      rating: '4.8',
      highlights: [
        'Castillos y historia medieval',
        'Playas seguras para familias',
        'Cultura portuguesa accesible',
        'Gastronomía familiar',
        'Actividades educativas'
      ]
    },
    {
      name: 'Costa Rica',
      image: 'Familia en puente colgante en Costa Rica',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Aventura familiar en la naturaleza',
      description: 'Costa Rica ofrece aventuras familiares seguras en la naturaleza. Observe la vida silvestre, practique actividades al aire libre y aprenda sobre conservación.',
      bestTime: 'Dic - Abr',
      duration: '7-10 días',
      rating: '4.7',
      highlights: [
        'Observación de vida silvestre',
        'Actividades de aventura seguras',
        'Educación ambiental',
        'Playas del Pacífico y el Caribe',
        'Cultura costarricense'
      ]
    },
    {
      name: 'Japón',
      image: 'Familia en el museo Ghibli en Japón',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Cultura fascinante para toda la familia',
      description: 'Japón ofrece una experiencia cultural única para familias. Tecnología, tradición y diversión se combinan en un destino fascinante para todas las edades.',
      bestTime: 'Mar - May, Sep - Nov',
      duration: '10-14 días',
      rating: '4.8',
      highlights: [
        'Parques temáticos únicos',
        'Cultura japonesa accesible',
        'Tecnología fascinante',
        'Gastronomía familiar',
        'Experiencias educativas'
      ]
    },
    {
      name: 'Australia',
      image: 'Familia con koalas en Australia',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Aventura y vida silvestre única',
      description: 'Australia ofrece aventuras familiares únicas con fauna endémica. Explore ciudades modernas, playas espectaculares y la cultura aborigen.',
      bestTime: 'Sep - Nov, Mar - May',
      duration: '12-16 días',
      rating: '4.8',
      highlights: [
        'Fauna única en el mundo',
        'Playas espectaculares',
        'Ciudades modernas y familiares',
        'Cultura aborigen',
        'Aventuras al aire libre'
      ]
    }
  ],
};
