const name = 'MSC Cruzeiros';

export const MSCCruzeiros = {
  name: 'MSC Cruzeiros',
  description: 'Experiencias que se traducen en alegría y diversidad para toda la familia.',
  subtitles: 'Experiencias que se traducen en alegría y diversidad para toda la familia.',
  subtitleBrands: 'Experiencias que se traducen en alegría y diversidad para toda la familia.',
  fullDescription: 'Sumérjase en la rica historia y cultura de diferentes civilizaciones. Nuestros recorridos culturales incluyen visitas a museos de renombre, sitios arqueológicos fascinantes y experiencias auténticas con comunidades locales.',
  secondDescription: 'Nuestro equipo especializado trabaja incansablemente para garantizar que cada detalle de su experiencia sea perfecto. Desde la planificación inicial hasta el regreso a casa, estamos aquí para hacer que su viaje sea inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#000033',
  colorEnd: '#FF6900',
  heroImage: 'Templo antiguo majestuoso con arquitectura histórica impresionante',
  Image: '/Header/msc-header.webp',
  logoRGB: '/RGB/logo-msc-rgb.png',
  logoHeight: 'h-[50px]',
  exp: ' Ofrecemos mucho más que simples viajes. Creamos experiencias transformadoras que lo conectan con culturas, paisajes y aventuras que permanecerán en su memoria para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Guías especializados en historia',
    'Acceso exclusivo a sitios arqueológicos',
    'Experiencias con comunidades locales',
    'Talleres culturales auténticos',
    'Visitas a museos y galerías',
    'Degustación de gastronomía tradicional'
  ],
  destinations: [
    {
      name: 'Egipto',
      image: 'Pirámides de Guiza con camellos en el desierto',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Cuna de la civilización antigua',
      description: 'Egipto ofrece un viaje a través de 5000 años de historia. Explore las pirámides, navegue por el Nilo y descubra los tesoros de los faraones en una experiencia cultural única.',
      bestTime: 'Oct - Abr',
      duration: '8-12 días',
      rating: '4.8',
      highlights: [
        'Pirámides de Guiza y la Gran Esfinge',
        'Crucero por el Río Nilo',
        'Valle de los Reyes y tumba de Tutankamón',
        'Templos de Luxor y Karnak',
        'Museo Egipcio en El Cairo'
      ]
    },
    {
      name: 'Perú',
      image: 'Machu Picchu envuelta en neblina matinal',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Imperio Inca y cultura andina',
      description: 'Perú conserva la rica herencia del Imperio Inca y culturas precolombinas. Explore Machu Picchu, Cusco y experimente la auténtica cultura andina.',
      bestTime: 'May - Sep',
      duration: '8-10 días',
      rating: '4.9',
      highlights: [
        'Machu Picchu - maravilla del mundo',
        'Ciudad imperial de Cusco',
        'Valle Sagrado de los Incas',
        'Mercados tradicionales andinos',
        'Gastronomía peruana auténtica'
      ]
    },
    {
      name: 'Grecia',
      image: 'Acrópolis de Atenas al atardecer',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Cuna de la civilización occidental',
      description: 'Grecia es la cuna de la democracia, la filosofía y el teatro. Explore la Acrópolis, las islas paradisíacas y sumérjase en la rica mitología griega en un viaje cultural fascinante.',
      bestTime: 'Abr - Oct',
      duration: '7-10 días',
      rating: '4.8',
      highlights: [
        'Acrópolis y Partenón en Atenas',
        'Sitio arqueológico de Delfos',
        'Islas griegas y cultura local',
        'Museos arqueológicos únicos',
        'Gastronomía mediterránea'
      ]
    },
    {
      name: 'Japón',
      image: 'Templo Kinkaku-ji (Pabellón Dorado) en Kioto',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Tradición milenaria y modernidad',
      description: 'Japón ofrece una fascinante combinación de tradición milenaria y modernidad. Experimente ceremonias del té, templos zen, arte tradicional y la cultura japonesa única.',
      bestTime: 'Mar - May, Sep - Nov',
      duration: '10-14 días',
      rating: '4.9',
      highlights: [
        'Templos y jardines zen en Kioto',
        'Ceremonia tradicional del té',
        'Arte y cultura samurái',
        'Festivales tradicionales estacionales',
        'Gastronomía japonesa auténtica'
      ]
    },
    {
      name: 'India',
      image: 'Taj Mahal en Agra al amanecer',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Espiritualidad y diversidad cultural',
      description: 'India ofrece una experiencia cultural intensa con su diversidad de religiones, tradiciones y paisajes. Desde el Taj Mahal hasta los templos sagrados, un viaje espiritual único.',
      bestTime: 'Oct - Mar',
      duration: '10-15 días',
      rating: '4.7',
      highlights: [
        'Taj Mahal - símbolo del amor eterno',
        'Palacios de maharajás en Rajastán',
        'Espiritualidad en Varanasi',
        'Templos y ashrams sagrados',
        'Diversidad cultural única'
      ]
    },
    {
      name: 'Camboya',
      image: 'Templo de Angkor Wat al amanecer en Camboya',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Templos de Angkor y cultura jemer',
      description: 'Camboya preserva uno de los complejos arqueológicos más impresionantes del mundo. Explore Angkor Wat y sumérjase en la rica cultura jemer en una experiencia transformadora.',
      bestTime: 'Nov - Mar',
      duration: '6-8 días',
      rating: '4.8',
      highlights: [
        'Complejo de templos de Angkor',
        'Angkor Wat al amanecer',
        'Cultura jemer tradicional',
        'Mercados flotantes únicos',
        'Artesanía local auténtica'
      ]
    }
  ],
};
