const name = 'MSC Cruzeiros';

export const MSCCruzeiros = {
  name: 'MSC Cruzeiros',
  description: 'Experiencias culturales auténticas y enriquecedoras',
  fullDescription: 'Mergulhe na rica história e cultura de diferentes civilizações. Nossos tours culturais incluem visitas a museus renomados, sítios arqueológicos fascinantes e experiências autênticas com comunidades locais.',
  icon: '🏛️',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#000033',
  colorEnd: '#FF6900',
  heroImage: 'Templo antigo majestoso com arquitetura histórica impressionante',
  Image: '/Header/msc-header.webp',
  features: [
    'Guias historiadores especializados',
    'Acesso exclusivo a sítios arqueológicos',
    'Experiências com comunidades locais',
    'Workshops culturais autênticos',
    'Visitas a museus e galerias',
    'Degustação de culinária tradicional'
  ],
  destinations: [
      { 
        name: 'Egito', 
        image: 'Pirâmides de Gizé com camelos no deserto',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Berço da civilização antiga',
        description: 'O Egito oferece uma jornada através de 5000 anos de história. Explore as pirâmides, navegue pelo Nilo e descubra os tesouros dos faraós em uma experiência cultural única.',
        bestTime: 'Out - Abr',
        duration: '8-12 dias',
        rating: '4.8',
        highlights: [
          'Pirâmides de Gizé e a Grande Esfinge',
          'Cruzeiro pelo Rio Nilo',
          'Vale dos Reis e tumba de Tutancâmon',
          'Templos de Luxor e Karnak',
          'Museu Egípcio no Cairo'
        ]
      },
      { 
        name: 'Peru', 
        image: 'Machu Picchu envolta em névoa matinal',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Império Inca e cultura andina',
        description: 'O Peru preserva a rica herança do Império Inca e culturas pré-colombianas. Explore Machu Picchu, Cusco e experimente a autêntica cultura andina.',
        bestTime: 'Mai - Set',
        duration: '8-10 dias',
        rating: '4.9',
        highlights: [
          'Machu Picchu - maravilha do mundo',
          'Cidade imperial de Cusco',
          'Vale Sagrado dos Incas',
          'Mercados tradicionais andinos',
          'Culinária peruana autêntica'
        ]
      },
      { 
        name: 'Grécia', 
        image: 'Acrópole de Atenas ao pôr do sol',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Berço da civilização ocidental',
        description: 'A Grécia é o berço da democracia, filosofia e teatro. Explore a Acrópole, ilhas paradisíacas e mergulhe na rica mitologia grega em uma jornada cultural fascinante.',
        bestTime: 'Abr - Out',
        duration: '7-10 dias',
        rating: '4.8',
        highlights: [
          'Acrópole e Partenon em Atenas',
          'Sítio arqueológico de Delfos',
          'Ilhas gregas e cultura local',
          'Museus arqueológicos únicos',
          'Gastronomia mediterrânea'
        ]
      },
      { 
        name: 'Japão', 
        image: 'Templo Kinkaku-ji (Pavilhão Dourado) em Kyoto',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Tradição milenar e modernidade',
        description: 'O Japão oferece uma fascinante mistura de tradição milenar e modernidade. Experimente cerimônias do chá, templos zen, arte tradicional e a cultura única japonesa.',
        bestTime: 'Mar - Mai, Set - Nov',
        duration: '10-14 dias',
        rating: '4.9',
        highlights: [
          'Templos e jardins zen em Kyoto',
          'Cerimônia do chá tradicional',
          'Arte e cultura samurai',
          'Festivais tradicionais sazonais',
          'Culinária japonesa autêntica'
        ]
      },
      { 
        name: 'Índia', 
        image: 'Taj Mahal em Agra ao nascer do sol',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Espiritualidade e diversidade cultural',
        description: 'A Índia oferece uma experiência cultural intensa com sua diversidade de religiões, tradições e paisagens. Do Taj Mahal aos templos sagrados, uma jornada espiritual única.',
        bestTime: 'Out - Mar',
        duration: '10-15 dias',
        rating: '4.7',
        highlights: [
          'Taj Mahal - símbolo do amor eterno',
          'Palácios de rajás em Rajastão',
          'Espiritualidade em Varanasi',
          'Templos e ashrams sagrados',
          'Diversidade cultural única'
        ]
      },
      { 
        name: 'Camboja', 
        image: 'Templo de Angkor Wat ao nascer do sol no Camboja',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Templos de Angkor e cultura khmer',
        description: 'O Camboja preserva um dos complexos arqueológicos mais impressionantes do mundo. Explore Angkor Wat e mergulhe na rica cultura khmer em uma experiência transformadora.',
        bestTime: 'Nov - Mar',
        duration: '6-8 dias',
        rating: '4.8',
        highlights: [
          'Complexo de templos de Angkor',
          'Angkor Wat ao nascer do sol',
          'Cultura khmer tradicional',
          'Mercados flutuantes únicos',
          'Artesanato local autêntico'
        ]
      }
    ],
  testimonials: [
    {
      name: 'Roberto Lima',
      text: 'Uma jornada transformadora através da história.',
      rating: 5
    },
    {
      name: 'Lucia Santos',
      text: 'Aprendi mais em uma semana do que em anos de livros.',
      rating: 5
    }
  ]
};