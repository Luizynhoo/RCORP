const name = 'Scenic';

export const Scenic = {
  name: 'Scenic',
  description: 'Viajes que inspiran sostenibilidad y armonía con la naturaleza',
  subtitles: 'Viajes que inspiran sostenibilidad y armonía con la naturaleza.',
  subtitleBrands: 'Turismo que nutre el planeta: Fomenta la sostenibilidad y la armonía natural.',
  fullDescription: 'Viaje de forma consciente con nuestros tours ecológicos. Nos dedicamos a la sostenibilidad, la conservación y el apoyo a comunidades locales, ofreciéndole experiencias únicas en armonía con la naturaleza.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#C6A367',
  colorEnd: '#000000',
  heroImage: 'Selva tropical exuberante con vida silvestre diversa',
  Image: '/Header/scenic-header.webp',
  logoRGB: '/RGB/logo-scenic-rgb.png',
  logoHeight: 'h-[35px]',
  exp: 'Vamos más allá de un simple viaje. Creamos experiencias transformadoras que lo conectan profundamente con culturas, paisajes y aventuras que recordará toda la vida.',
  videoUrlone: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  videoUrltwo: 'https://www.youtube.com/embed/0c2ueuGfhVE',
  features: [
    'Prácticas 100% sostenibles',
    'A poyo a comunidades locales',
    'Observación de vida silvestre',
    'Alojamientos ecológicos',
  ],
  destinations: [
    {
      name: 'Amazonas',
      image: 'Río serpenteando por la densa selva amazónica',
      DestinoImg: 'https://images.unsplash.com/photo-1595872018818-97555653a011',
      shortDescription: 'El pulmón del mundo, un escenario de biodiversidad única.',
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
      shortDescription: 'Donde la evolución se observa en su estado más puro.',
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
      shortDescription: 'Tierra de orangutanes y la esencia de la selva ancestral.',
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
      shortDescription: 'Un tesoro de biodiversidad única.',
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
      shortDescription: 'Vive safaris sostenibles, e impulsa la conservación.',
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
      shortDescription: 'Fiordos majestuosos y un compromiso con el turismo sostenible.',
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
