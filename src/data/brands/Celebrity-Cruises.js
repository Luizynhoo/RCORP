const name = 'Celebrity Cruises';

export const CelebrityCruises = {
  name: 'Celebrity Cruises',
  description: 'Emoción y aventura para los amantes de desafíos. ',
  subtitles: 'Emoción y aventura para los amantes de desafíos. ',
  subtitleBrands: 'Pasión y audacia para los que aceptan cualquier desafío',
  fullDescription: 'Para los aventureros de corazón, diseñamos experiencias únicas: desde escalar montañas majestuosas y emocionantes safaris, hasta bucear en arrecifes de coral prístinos y liderar expediciones a lugares remotos e inexplorados.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#004275',
  colorEnd: '#E77734',
  heroImage: 'Aventureros escalando una montaña con vista espectacular',
  Image: '/Header/celebrity-header.webp',
  logoRGB: '/RGB/logo-celebrity-rgb.png',
  logoHeight: 'h-[40px]',
  expTitle:'Experiencias Únicas',
  exp: 'Más que simples viajes, creamos experiencias transformadoras. Lo conectamos con culturas vibrantes, paisajes asombrosos y aventuras que permanecerán en su alma para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Expediciones a lugares remotos',
    'Equipamiento profesional de alta gama incluido',
    'Guías especializados y apasionados',
    'Actividades de adrenalina para los espíritus más aventureros',
  ],
  destinations: [
    {
      name: 'Patagonia',
      image: 'Paisaje dramático de la Patagonia con montañas y glaciares',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Paisajes dramáticos invitan a un trekking épico, creando una aventura que recordarás para siempre',
      description: 'La Patagonia ofrece algunos de los paisajes más impresionantes del planeta. Entre glaciares, montañas y pampas, viva aventuras épicas en uno de los últimos territorios salvajes de la Tierra.',
      bestTime: 'Nov - Mar',
      duration: '10-14 días',
      rating: '4.9',
      highlights: [
        'Trekking en el Parque Torres del Paine',
        'Escalada en el Cerro Fitz Roy',
        'Navegación entre icebergs',
        'Observación única de vida silvestre',
        'Campamentos en lugares remotos'
      ]
    },
    {
      name: 'Nepal',
      image: 'Trekking en el Himalaya con vista al Everest',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Aventura en el Techo del Mundo',
      description: 'Nepal ofrece algunas de las rutas de trekking más espectaculares del mundo. Camine por las montañas del Himalaya, visite monasterios budistas y experimente la hospitalidad sherpa.',
      bestTime: 'Mar - May, Sep - Nov',
      duration: '12-18 días',
      rating: '4.8',
      highlights: [
        'Trekking al Campo Base del Everest',
        'Vista de los picos más altos del mundo',
        'Cultura sherpa auténtica',
        'Monasterios budistas centenarios',
        'Aventura en gran altitud'
      ]
    },
    {
      name: 'Costa Rica',
      image: 'Aventura en la selva tropical de Costa Rica',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Sumérgete en las maravillas de un exuberante bosque tropical',
      description: 'Costa Rica es un paraíso para los aventureros, con selvas tropicales, volcanes activos y una biodiversidad impresionante. Experimente tirolesa, rafting y observación de fauna silvestre.',
      bestTime: 'Dic - Abr',
      duration: '7-10 días',
      rating: '4.7',
      highlights: [
        'Tirolesa sobre la selva tropical',
        'Rafting en ríos con rápidos',
        'Observación de fauna silvestre',
        'Caminatas en volcanes activos',
        'Buceo en el Pacífico y el Caribe'
      ]
    },
    {
      name: 'Islandia',
      image: 'Aurora boreal sobre paisaje helado en Islandia',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Descubre la impresionante tierra de fuego y hielo',
      description: 'Islandia ofrece paisajes únicos con volcanes, glaciares, géiseres y auroras boreales. Una aventura en uno de los países más espectaculares y salvajes de Europa.',
      bestTime: 'Jun - Ago (verano), Sep - Mar (auroras)',
      duration: '8-12 días',
      rating: '4.9',
      highlights: [
        'Caminatas en glaciares',
        'Observación de auroras boreales',
        'Baños en aguas termales naturales',
        'Exploración de cuevas de hielo',
        'Avistamiento de ballenas'
      ]
    },
    {
      name: 'Nueva Zelanda',
      image: 'Paisaje dramático de fiordos en Nueva Zelanda',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Donde la aventura se entrelaza con paisajes cinematográficos',
      description: 'Nueva Zelanda es el destino definitivo para aventureros, ofreciendo desde bungee jump hasta trekking en fiordos. Paisajes que sirvieron de escenario para películas épicas.',
      bestTime: 'Nov - Mar',
      duration: '10-14 días',
      rating: '4.8',
      highlights: [
        'Bungee jump en el lugar donde nació la modalidad',
        'Trekking en los Alpes del Sur',
        'Navegación por fiordos',
        'Aventuras extremas en Queenstown',
        'Cultura maorí auténtica'
      ]
    },
    {
      name: 'Jordania',
      image: 'El Tesoro en Petra, Jordania, tallado en roca',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Experiencia inolvidable entre la majestuosidad del desierto y un legado histórico milenario',
      description: 'Jordania combina aventura en el desierto con sitios arqueológicos únicos. Explore Petra, acampe en Wadi Rum y flote en el Mar Muerto en una travesía inolvidable.',
      bestTime: 'Mar - May, Sep - Nov',
      duration: '7-10 días',
      rating: '4.7',
      highlights: [
        'Exploración de la ciudad perdida de Petra',
        'Campamento en el desierto de Wadi Rum',
        'Flotación en el Mar Muerto',
        'Trekking en cañones espectaculares',
        'Cultura beduina auténtica'
      ]
    }
  ],
};
