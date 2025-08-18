const name = 'Celebrity Cruises';

export const CelebrityCruises = {
  name: 'Celebrity Cruises®',
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
  expTitle: 'Experiencias Únicas',
  exp: 'Más que simples viajes, creamos experiencias transformadoras. Lo conectamos con culturas vibrantes, paisajes asombrosos y aventuras que permanecerán en su alma para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/TExpyFLhAeI',
  videoUrltwo: 'https://www.youtube.com/embed/mUFWBJrPxEg',
  features: [
    'Expediciones a lugares remotos',
    'Equipamiento profesional de alta gama incluido',
    'Guías especializados y apasionados',
    'Actividades de adrenalina para los espíritus más aventureros',
  ],
  destinations: [
    {
      name: 'Caribe',
      image: 'Playas paradisíacas con aguas turquesas en el Caribe',
      DestinoImg: '../Destinations/Caribe.jpg',
      shortDescription: 'Relájate en playas de arena blanca y explora islas tropicales llenas de encanto caribeño',
      description: 'El Caribe es sinónimo de sol, mar cristalino y ritmo tropical. Desde las Bahamas hasta Cozumel, cada isla ofrece una mezcla única de cultura, gastronomía, naturaleza y aventura.',
      bestTime: 'Dic - Abr',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Playas de arena blanca y aguas transparentes',
        'Snorkel y buceo en arrecifes de coral',
        'Vida nocturna en islas como Cozumel',
        'Excursiones en catamarán y motos acuáticas',
        'Compras y cultura local en puertos caribeños'
      ]
    },
    {
      name: 'Mediterráneo',
      image: 'Atardecer sobre Santorini, Grecia, con casas blancas y mar azul',
      DestinoImg: '../Destinations/Mediterraneo.webp',
      shortDescription: 'Un viaje entre historia, cultura y paisajes costeros inolvidables',
      description: 'Descubre la magia del Mediterráneo con paradas en Italia, Grecia, España y Turquía. Disfruta de gastronomía local, ruinas antiguas y playas bañadas por el sol.',
      bestTime: 'May - Oct',
      duration: '10-14 días',
      rating: '4.8',
      highlights: [
        'Ruinas antiguas en Roma y Atenas',
        'Puestas de sol en Santorini',
        'Cultura y arquitectura en Barcelona',
        'Cocina mediterránea a bordo y en tierra',
        'Mercados locales y paseos costeros'
      ]
    },
    {
      name: 'Norte da Europa & Báltico',
      image: 'Fiordos noruegos con aguas tranquilas y montañas nevadas',
      DestinoImg: '../Destinations/NortedaEuropa.jpg',
      shortDescription: 'Explora castillos, fiordos y paisajes impresionantes al estilo nórdico',
      description: 'Un crucero por el norte de Europa ofrece experiencias únicas: desde fiordos noruegos y castillos daneses hasta ciudades bálticas llenas de historia y encanto escandinavo.',
      bestTime: 'May - Sep',
      duration: '10-14 días',
      rating: '4.9',
      highlights: [
        'Navegación entre fiordos noruegos',
        'Ciudades medievales como Tallin y Riga',
        'Exploración de Copenhague y Estocolmo',
        'Auroras boreales en ciertas temporadas',
        'Cultura vikinga y diseño escandinavo'
      ]
    },
    {
      name: 'Alaska',
      image: 'Glaciares y montañas en un paisaje natural impresionante',
      DestinoImg: '../Destinations/Alaska.jpg',
      shortDescription: 'Un encuentro cercano con la naturaleza salvaje en su estado más puro',
      description: 'Descubre la majestuosidad de Alaska con paisajes glaciares, avistamiento de fauna, pueblos remotos y una experiencia de conexión total con la naturaleza.',
      bestTime: 'Jun - Ago',
      duration: '7-10 días',
      rating: '4.8',
      highlights: [
        'Navegación entre glaciares activos',
        'Avistamiento de ballenas y osos',
        'Senderismo en bosques boreales',
        'Excursiones en trineos',
        'Exploración de pueblos como Juneau y Ketchikan'
      ]
    },
    {
      name: 'Galápagos',
      image: 'Tortuga gigante en las Islas Galápagos, Ecuador',
      DestinoImg: '../Destinations/Galapagos.webp',
      shortDescription: 'Una experiencia ecológica única en uno de los ecosistemas más puros del planeta',
      description: 'Las Islas Galápagos son un paraíso natural donde la vida salvaje no tiene miedo al ser humano. Ideal para amantes de la naturaleza y viajeros conscientes.',
      bestTime: 'Ene - May',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Avistamiento de tortugas gigantes y leones marinos',
        'Snorkel con tiburones y rayas',
        'Senderismo en islas volcánicas',
        'Fotografía de fauna endémica',
        'Guías expertos en ecología y conservación'
      ]
    },
    {
      name: 'Sudamérica',
      image: 'Vista aérea de Río de Janeiro con el Cristo Redentor',
      DestinoImg: '../Destinations/AmericadoSul.jpg',
      shortDescription: 'Diversidad cultural, paisajes vibrantes y ciudades llenas de ritmo',
      description: 'Desde las playas de Brasil hasta los glaciares de Chile, Sudamérica ofrece una mezcla única de naturaleza, música, gastronomía y herencia cultural fascinante.',
      bestTime: 'Nov - Mar',
      duration: '10-14 días',
      rating: '4.7',
      highlights: [
        'Playas icónicas en Río y Búzios',
        'Cultura andina en Perú y Bolivia',
        'Gastronomía sudamericana variada',
        'Exploración de ciudades como Buenos Aires y Santiago',
        'Naturaleza salvaje en la Patagonia y Amazonas'
      ]
    }
  ],
};
