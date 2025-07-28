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
  expTitle:'Experiencias Inigualables',
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
      name: 'Orlando',
      image: 'Parques temáticos coloridos en Orlando',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'El epicentro global de los parques temáticos.',
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
      shortDescription: 'Playas idílicas y la promesa de momentos excepcionales',
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
      description: 'Un legado de historia, vibrante cultura y costas para explorar en familia.',
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
      description: 'Sumérgete en las maravillas de un exuberante bosque tropical.',
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
      description: 'Donde la cultura milenaria revela su enigmático encanto.',
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
      description: 'El epicentro de la aventura y la biodiversidad extraordinaria.',
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
