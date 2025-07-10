const name = 'Scenic';

export const Scenic = {
  name: 'Scenic',
  description: 'Turismo sostenible y respetuoso con la naturaleza',
  fullDescription: 'Viaje de forma consciente com nossos tours ecológicos. Focamos em práticas sustentáveis, conservação ambiental e apoio às comunidades locais, proporcionando experiências únicas em harmonia com a natureza.',
  icon: '🌿',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#C6A367',
  colorEnd: '#000000',
  heroImage: 'Floresta tropical exuberante com vida selvagem diversificada',
  Image:'/Header/scenic-header.webp',
  features: [
    'Práticas 100% sustentáveis',
    'Apoio a comunidades locais',
    'Observação da vida selvagem',
    'Acomodações eco-friendly',
    'Atividades de conservação',
    'Educação ambiental'
  ],
  destinations: [
      { 
        name: 'Amazônia', 
        image: 'Rio serpenteando pela floresta amazônica densa',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Pulmão do mundo e biodiversidade única',
        description: 'A Amazônia oferece a experiência mais autêntica de contato com a natureza. Explore a maior floresta tropical do mundo, observe vida selvagem única e aprenda sobre conservação.',
        bestTime: 'Jun - Nov',
        duration: '7-10 dias',
        rating: '4.9',
        highlights: [
          'Navegação pelos rios amazônicos',
          'Observação de vida selvagem única',
          'Comunidades ribeirinhas tradicionais',
          'Caminhadas na floresta tropical',
          'Projetos de conservação'
        ]
      },
      { 
        name: 'Galápagos', 
        image: 'Tartarugas gigantes nas Ilhas Galápagos',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Laboratório natural da evolução',
        description: 'As Ilhas Galápagos são um santuário natural único no mundo. Observe espécies endêmicas, aprenda sobre evolução e contribua para a conservação deste patrimônio mundial.',
        bestTime: 'Ano todo',
        duration: '7-10 dias',
        rating: '4.9',
        highlights: [
          'Espécies endêmicas únicas no mundo',
          'Mergulho com vida marinha',
          'Projetos de conservação',
          'Educação sobre evolução',
          'Turismo de baixo impacto'
        ]
      },
      { 
        name: 'Borneo', 
        image: 'Orangotangos em habitat natural em Borneo',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Orangotangos e florestas primitivas',
        description: 'Borneo preserva algumas das florestas mais antigas do mundo. Observe orangotangos em seu habitat natural e contribua para projetos de conservação desta biodiversidade única.',
        bestTime: 'Mar - Out',
        duration: '8-12 dias',
        rating: '4.8',
        highlights: [
          'Orangotangos em habitat natural',
          'Florestas tropicais primitivas',
          'Centros de reabilitação',
          'Comunidades locais tradicionais',
          'Biodiversidade excepcional'
        ]
      },
      { 
        name: 'Madagascar', 
        image: 'Lêmures em uma árvore em Madagascar',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Ilha da biodiversidade única',
        description: 'Madagascar é um laboratório natural com 90% de espécies endêmicas. Explore paisagens únicas, observe lêmures e contribua para a conservação desta biodiversidade excepcional.',
        bestTime: 'Abr - Nov',
        duration: '10-14 dias',
        rating: '4.7',
        highlights: [
          'Lêmures e espécies endêmicas',
          'Paisagens únicas no mundo',
          'Projetos de conservação',
          'Cultura malgaxe autêntica',
          'Turismo responsável'
        ]
      },
      { 
        name: 'Quênia', 
        image: 'Manada de elefantes na savana do Quênia',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Safáris sustentáveis e conservação',
        description: 'O Quênia oferece safáris sustentáveis que contribuem para a conservação da vida selvagem africana. Observe a Grande Migração e apoie comunidades locais.',
        bestTime: 'Jul - Out',
        duration: '8-12 dias',
        rating: '4.8',
        highlights: [
          'Grande Migração no Masai Mara',
          'Conservação da vida selvagem',
          'Comunidades Masai tradicionais',
          'Safáris sustentáveis',
          'Projetos de conservação'
        ]
      },
      { 
        name: 'Noruega', 
        image: 'Fiordes espetaculares na Noruega',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Fiordes e turismo sustentável',
        description: 'A Noruega é líder mundial em turismo sustentável. Explore fiordes espetaculares, observe auroras boreais e experimente práticas de turismo responsável.',
        bestTime: 'Mai - Set (fiordes), Set - Mar (aurora)',
        duration: '7-10 dias',
        rating: '4.8',
        highlights: [
          'Fiordes patrimônio mundial',
          'Auroras boreais sustentáveis',
          'Transporte eco-friendly',
          'Acomodações sustentáveis',
          'Cultura sami tradicional'
        ]
      }
    ],
  testimonials: [
    {
      name: 'Marina Oliveira',
      text: 'Viagem consciente e transformadora. Recomendo!',
      rating: 5
    },
    {
      name: 'João Ferreira',
      text: 'Conectei com a natureza de forma única.',
      rating: 5
    }
  ]
};