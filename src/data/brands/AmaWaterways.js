const name = 'AmaWaterways';

export const AmaWaterways = {
  name: 'AmaWaterways',
  description: 'Viajes de lujo y destinos exclusivos definen el concepto de esta marca. ',
  subtitles:'Viajes que desbordan lujo y comodidad por los más hermosos rios del mundo.',
  subtitleBrands:'Adentrese en culturas exclusivas y el lujo más exquisito en una experiencia única diseñada para aquellos que buscan lo extraordinario.',
  fullDescription: 'Viva la cumbre del lujo y la exclusividad con nuestros tours premium. Ofrecemos alojamientos de primera clase, gastronomía de alta cocina y el privilegio de explorar destinos exclusivos del mundo reservados para unos pocos privilegiados.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#00263E',
  colorEnd: '#BD965C',
  heroImage: 'Resort de lujo con piscina infinita y vista panorámica al océano',
  Image: '/Header/amawaterways-header.webp',
  logoRGB: '/RGB/logo-amawaterways-rgb.png',
  logoHeight: 'h-[30px]',
  exp: 'Ofrecemos mucho más que viajes; creamos experiencias transformadoras que lo conectarán con culturas fascinantes, paisajes asombrosos y aventuras inolvidables que permanecerán en su memoria para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Alojamientos exclusivos de 5 estrellas',
    'Experiencias gastronómicas con chefs de renombre',
    'Acceso VIP a atracciones y eventos',
    'Conserje personal 24/7',
  ],
  destinations: [
    { 
      name: 'Maldivas', 
      image: 'Bungalows sobre el agua cristalina en Maldivas',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Un paraíso tropical de aguas cristalinas y playas de arena blanca.',
      description: 'Las Maldivas ofrecen una experiencia única de lujo tropical, con resorts exclusivos sobre las aguas cristalinas del Océano Índico. Disfrute de bungalows privados, spas de clase mundial y experiencias gastronómicas inolvidables.',
      bestTime: 'Nov - Abr',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Bungalows sobre el agua con vistas panorámicas',
        'Buceo en arrecifes de coral prístinos',
        'Tratamientos de spa con vista al océano',
        'Cenas románticas en la playa',
        'Excursiones de pesca al atardecer'
      ]
    },
    { 
      name: 'Dubái', 
      image: 'Skyline lujoso de Dubái con rascacielos modernos',
      DestinoImg: 'https://shoppingdecruzeiros.com.br/wp-content/uploads/2018/08/dubai-1.jpg',
      shortDescription: ' Lujo y modernidad que desafían el desierto.',
      description: 'Dubái combina la tradición árabe con la modernidad futurista. Experimente hoteles de 7 estrellas, compras en centros comerciales de lujo, safaris por el desierto y una hospitalidad árabe incomparable.',
      bestTime: 'Nov - Mar',
      duration: '5-7 días',
      rating: '4.8',
      highlights: [
        'Burj Al Arab – el hotel más lujoso del mundo',
        'Safari en el desierto con cena beduina',
        'Compras en Dubai Mall y Gold Souk',
        'Vistas panorámicas desde el Burj Khalifa',
        'Experiencias culinarias de clase mundial'
      ]
    },
    { 
      name: 'Santorini', 
      image: 'Casas blancas con cúpulas azules en Santorini',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'El romance se fusiona con la belleza de Grecia.',
      description: 'Santorini encanta con sus casas blancas, cúpulas azules y el atardecer más famoso del mundo. Disfrute de vinos locales, gastronomía mediterránea y vistas impresionantes del Mar Egeo.',
      bestTime: 'Abr - Oct',
      duration: '4-6 días',
      rating: '4.9',
      highlights: [
        'Atardecer en Oia – el más famoso del mundo',
        'Degustación de vinos en bodegas locales',
        'Paseos en barco por la caldera volcánica',
        'Auténtica gastronomía mediterránea',
        'Arquitectura cicládica única'
      ]
    },
    { 
      name: 'Toscana', 
      image: 'Paisajes de colinas y cipreses en la Toscana',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Vinos excepcionales y gastronomía auténtica en un destino que combina arte, historia y naturaleza.',
      description: 'La Toscana ofrece paisajes de ensueño, vinos mundialmente famosos y un rico patrimonio cultural. Explore bodegas centenarias, ciudades medievales y la auténtica cocina italiana.',
      bestTime: 'Abr - Oct',
      duration: '6-8 días',
      rating: '4.8',
      highlights: [
        'Degustación en bodegas de Chianti',
        'Paseos por Florencia y Siena',
        'Clases de cocina italiana',
        'Paisajes de colinas y cipreses',
        'Arte renacentista incomparable'
      ]
    },
    { 
      name: 'Bora Bora', 
      image: 'Bungalows sobre la laguna azul turquesa de Bora Bora',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Paraíso exclusivo de aguas turquesas, bungalows sobre el agua y belleza natural inigualable. ',
      description: 'Bora Bora es el destino soñado para quienes buscan total exclusividad. Con sus aguas turquesas, montañas volcánicas y resorts de lujo, ofrece una experiencia paradisíaca única.',
      bestTime: 'May - Oct',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Bungalows sobre lagunas cristalinas',
        'Buceo con tiburones y rayas',
        'Paseos en helicóptero sobre la isla',
        'Cultura polinesia auténtica',
        'Spas con tratamientos tradicionales'
      ]
    },
    { 
      name: 'Seychelles', 
      image: 'Playa Anse Source d\'Argent con rocas de granito en Seychelles',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Archipiélago encantador en el Índico, lujo discreto y belleza natural para la privacidad y el romance.',
      description: 'Las Seychelles ofrecen playas de arena blanca, aguas cristalinas y una naturaleza preservada única. Es el destino perfecto para quienes buscan privacidad y contacto con la naturaleza.',
      bestTime: 'Abr - May, Oct - Nov',
      duration: '7-9 días',
      rating: '4.8',
      highlights: [
        'Playas de arena blanca y rocas de granito',
        'Reservas naturales con especies endémicas',
        'Buceo en aguas cristalinas',
        'Resorts eco-friendly exclusivos',
        'Auténtica cocina criolla'
      ]
    }
  ],
};
