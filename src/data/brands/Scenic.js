const name = 'Scenic';

export const Scenic = {
  name: 'Scenic',
  description: 'Turismo sostenible y respetuoso con la naturaleza',
  fullDescription: 'Viaje de forma consciente con nuestros tours ecológicos. Nos enfocamos en prácticas sostenibles, conservación ambiental y apoyo a las comunidades locales, proporcionando experiencias únicas en armonía con la naturaleza.',
  secondDescription: 'Nuestro equipo especializado trabaja incansablemente para garantizar que cada detalle de su experiencia sea perfecto. Desde la planificación inicial hasta el regreso a casa, estamos aquí para hacer que su viaje sea inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#C6A367',
  colorEnd: '#000000',
  heroImage: 'Selva tropical exuberante con vida silvestre diversa',
  Image: '/Header/scenic-header.webp',
  logoRGB: '/RGB/logo-scenic-rgb.png',
  logoHeight: 'h-[35px]',
  exp: ' Ofrecemos mucho más que simples viajes. Creamos experiencias transformadoras que lo conectan con culturas, paisajes y aventuras que permanecerán en su memoria para siempre.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Prácticas 100% sostenibles',
    'Apoyo a comunidades locales',
    'Observación de vida silvestre',
    'Alojamientos ecológicos',
    'Actividades de conservación',
    'Educación ambiental'
  ],
  destinations: [
    {
      name: 'Amazonas',
      image: 'Río serpenteando por la densa selva amazónica',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Pulmón del mundo y biodiversidad única',
      description: 'El Amazonas ofrece la experiencia más auténtica de contacto con la naturaleza. Explore la mayor selva tropical del mundo, observe fauna única y aprenda sobre conservación.',
      bestTime: 'Jun - Nov',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Navegación por ríos amazónicos',
        'Observación de fauna única',
        'Comunidades ribereñas tradicionales',
        'Caminatas por la selva tropical',
        'Proyectos de conservación'
      ]
    },
    {
      name: 'Galápagos',
      image: 'Tortugas gigantes en las Islas Galápagos',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Laboratorio natural de la evolución',
      description: 'Las Islas Galápagos son un santuario natural único en el mundo. Observe especies endémicas, aprenda sobre evolución y contribuya a la conservación de este patrimonio mundial.',
      bestTime: 'Todo el año',
      duration: '7-10 días',
      rating: '4.9',
      highlights: [
        'Especies endémicas únicas en el mundo',
        'Buceo con vida marina',
        'Proyectos de conservación',
        'Educación sobre evolución',
        'Turismo de bajo impacto'
      ]
    },
    {
      name: 'Borneo',
      image: 'Orangutanes en su hábitat natural en Borneo',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Orangutanes y selvas primitivas',
      description: 'Borneo conserva algunas de las selvas más antiguas del mundo. Observe orangutanes en su hábitat natural y contribuya a proyectos de conservación de esta biodiversidad única.',
      bestTime: 'Mar - Oct',
      duration: '8-12 días',
      rating: '4.8',
      highlights: [
        'Orangutanes en su hábitat natural',
        'Selvas tropicales primitivas',
        'Centros de rehabilitación',
        'Comunidades locales tradicionales',
        'Biodiversidad excepcional'
      ]
    },
    {
      name: 'Madagascar',
      image: 'Lémures en un árbol en Madagascar',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Isla de biodiversidad única',
      description: 'Madagascar es un laboratorio natural con el 90% de especies endémicas. Explore paisajes únicos, observe lémures y contribuya a la conservación de esta biodiversidad excepcional.',
      bestTime: 'Abr - Nov',
      duration: '10-14 días',
      rating: '4.7',
      highlights: [
        'Lémures y especies endémicas',
        'Paisajes únicos en el mundo',
        'Proyectos de conservación',
        'Cultura malgache auténtica',
        'Turismo responsable'
      ]
    },
    {
      name: 'Kenia',
      image: 'Manada de elefantes en la sabana de Kenia',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Safaris sostenibles y conservación',
      description: 'Kenia ofrece safaris sostenibles que contribuyen a la conservación de la fauna africana. Observe la Gran Migración y apoye a las comunidades locales.',
      bestTime: 'Jul - Oct',
      duration: '8-12 días',
      rating: '4.8',
      highlights: [
        'Gran Migración en el Masai Mara',
        'Conservación de la vida silvestre',
        'Comunidades tradicionales masai',
        'Safaris sostenibles',
        'Proyectos de conservación'
      ]
    },
    {
      name: 'Noruega',
      image: 'Fiordos espectaculares en Noruega',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'Fiordos y turismo sostenible',
      description: 'Noruega es líder mundial en turismo sostenible. Explore fiordos espectaculares, observe auroras boreales y experimente prácticas de turismo responsable.',
      bestTime: 'May - Sep (fiordos), Sep - Mar (aurora)',
      duration: '7-10 días',
      rating: '4.8',
      highlights: [
        'Fiordos patrimonio mundial',
        'Auroras boreales sostenibles',
        'Transporte ecológico',
        'Alojamientos sostenibles',
        'Cultura sami tradicional'
      ]
    }
  ],
};
