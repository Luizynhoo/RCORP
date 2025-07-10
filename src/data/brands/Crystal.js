const name = 'Crystal';

export const Crystal = {
  name: 'Crystal',
  description: 'Vacaciones perfectas para toda la familia',
  fullDescription: 'Crie memórias inesquecíveis com toda a família. Nossos pacotes incluem atividades para todas as idades, acomodações familiares confortáveis e entretenimento garantido para que todos se divirtam.',
  icon: '👨‍👩‍👧‍👦',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#232122',
  colorEnd: '#E4E1DC',
  heroImage: 'Família feliz brincando na praia durante férias tropicais',
  Image:'/Header/crystal-header.webp',
  features: [
    'Atividades para todas as idades',
    'Acomodações familiares',
    'Entretenimento infantil',
    'Segurança garantida',
    'Refeições adaptadas',
    'Programação flexível'
  ],
  destinations: [
      { 
        name: 'Orlando', 
        image: 'Parques temáticos coloridos em Orlando',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Capital mundial dos parques temáticos',
        description: 'Orlando oferece a experiência familiar definitiva com os melhores parques temáticos do mundo. Diversão garantida para toda a família em um destino mágico.',
        bestTime: 'Set - Nov, Jan - Mai',
        duration: '7-10 dias',
        rating: '4.9',
        highlights: [
          'Disney World e Universal Studios',
          'Parques aquáticos emocionantes',
          'Entretenimento para todas as idades',
          'Hotéis temáticos familiares',
          'Experiências mágicas únicas'
        ]
      },
      { 
        name: 'Cancún', 
        image: 'Praia familiar em Cancún com águas turquesa',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Praias paradisíacas e diversão familiar',
        description: 'Cancún combina praias paradisíacas com atividades familiares. Resorts all-inclusive com programação infantil e aventuras para toda a família.',
        bestTime: 'Dez - Abr',
        duration: '7-10 dias',
        rating: '4.8',
        highlights: [
          'Praias de areia branca',
          'Resorts all-inclusive familiares',
          'Atividades aquáticas',
          'Parques temáticos aquáticos',
          'Cultura mexicana para crianças'
        ]
      },
      { 
        name: 'Portugal', 
        image: 'Família explorando castelos históricos em Portugal',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'História, cultura e praias para a família',
        description: 'Portugal oferece uma combinação perfeita de história, cultura e praias para famílias. Destino seguro com atividades educativas e divertidas.',
        bestTime: 'Mai - Set',
        duration: '8-12 dias',
        rating: '4.8',
        highlights: [
          'Castelos e história medieval',
          'Praias familiares seguras',
          'Cultura portuguesa acessível',
          'Gastronomia familiar',
          'Atividades educativas'
        ]
      },
      { 
        name: 'Costa Rica', 
        image: 'Família em ponte suspensa na Costa Rica',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Aventura familiar na natureza',
        description: 'A Costa Rica oferece aventuras familiares seguras na natureza. Observe vida selvagem, pratique atividades ao ar livre e aprenda sobre conservação.',
        bestTime: 'Dez - Abr',
        duration: '7-10 dias',
        rating: '4.7',
        highlights: [
          'Observação de vida selvagem',
          'Atividades de aventura seguras',
          'Educação ambiental',
          'Praias do Pacífico e Caribe',
          'Cultura costarriquenha'
        ]
      },
      { 
        name: 'Japão', 
        image: 'Família no museu Ghibli no Japão',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Cultura fascinante para toda a família',
        description: 'O Japão oferece uma experiência cultural única para famílias. Tecnologia, tradição e diversão se combinam em um destino fascinante para todas as idades.',
        bestTime: 'Mar - Mai, Set - Nov',
        duration: '10-14 dias',
        rating: '4.8',
        highlights: [
          'Parques temáticos únicos',
          'Cultura japonesa acessível',
          'Tecnologia fascinante',
          'Gastronomia familiar',
          'Experiências educativas'
        ]
      },
      { 
        name: 'Austrália', 
        image: 'Família com coalas na Austrália',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Aventura e vida selvagem única',
        description: 'A Austrália oferece aventuras familiares únicas com vida selvagem endêmica. Explore cidades modernas, praias espetaculares e a cultura aborígene.',
        bestTime: 'Set - Nov, Mar - Mai',
        duration: '12-16 dias',
        rating: '4.8',
        highlights: [
          'Vida selvagem única no mundo',
          'Praias espetaculares',
          'Cidades familiares modernas',
          'Cultura aborígene',
          'Aventuras ao ar livre'
        ]
      }
    ],
  testimonials: [
    {
      name: 'Família Souza',
      text: 'As crianças se divertiram do primeiro ao último dia!',
      rating: 5
    },
    {
      name: 'Família Pereira',
      text: 'Férias perfeitas! Todos ficaram felizes.',
      rating: 5
    }
  ]
};