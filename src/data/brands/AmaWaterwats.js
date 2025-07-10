const name = 'AmaWaterwats';

export const AmaWaterwats = {
  name: 'AmaWaterways',
  description: 'Viajes de lujo exclusivos a destinos únicos',
  fullDescription: 'Experimente o máximo em luxo e exclusividade com nossos tours premium. Oferecemos acomodações de primeira classe, experiências gastronômicas excepcionais e acesso a locais exclusivos que poucos têm o privilégio de conhecer.',
  icon: '✈️',
  slug: name.replace(/\s+/g, '-'),
  colorStart: '#00263E',
  colorEnd: '#BD965C',
  heroImage: 'Resort de luxo com piscina infinita e vista panorâmica para o oceano',
  Image:'/Header/amawaterways-header.webp',
  features: [
    'Acomodações 5 estrelas exclusivas',
    'Experiências gastronômicas com chefs renomados',
    'Acesso VIP a atrações e eventos',
    'Concierge pessoal 24/7',
    'Transporte privativo de luxo',
    'Roteiros personalizados únicos'
  ],
  destinations: [
      { 
        name: 'Maldivas', 
        image: 'Bangalôs sobre a água cristalina nas Maldivas',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Paraíso tropical com águas cristalinas',
        description: 'As Maldivas oferecem uma experiência única de luxo tropical, com resorts exclusivos sobre as águas cristalinas do Oceano Índico. Desfrute de bangalôs privativos, spas de classe mundial e experiências gastronômicas inesquecíveis.',
        bestTime: 'Nov - Abr',
        duration: '7-10 dias',
        rating: '4.9',
        highlights: [
          'Bangalôs sobre a água com vista panorâmica',
          'Mergulho em recifes de coral pristinos',
          'Spa treatments com vista para o oceano',
          'Jantares românticos na praia',
          'Excursões de pesca ao pôr do sol'
        ]
      },
      { 
        name: 'Dubai', 
        image: 'Skyline luxuoso de Dubai com arranha-céus modernos',
        DestinoImg:'https://shoppingdecruzeiros.com.br/wp-content/uploads/2018/08/dubai-1.jpg',
        shortDescription: 'Luxo e modernidade no deserto',
        description: 'Dubai combina tradição árabe com modernidade futurística. Experimente hotéis de 7 estrelas, compras em malls luxuosos, safáris no deserto e a hospitalidade árabe incomparável.',
        bestTime: 'Nov - Mar',
        duration: '5-7 dias',
        rating: '4.8',
        highlights: [
          'Burj Al Arab - hotel mais luxuoso do mundo',
          'Safari no deserto com jantar beduíno',
          'Compras no Dubai Mall e Gold Souk',
          'Vistas panorâmicas do Burj Khalifa',
          'Experiências culinárias de classe mundial'
        ]
      },
      { 
        name: 'Santorini', 
        image: 'Casas brancas com cúpulas azuis em Santorini',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Romance e beleza nas ilhas gregas',
        description: 'Santorini encanta com suas casas brancas, cúpulas azuis e pôr do sol mais famoso do mundo. Desfrute de vinhos locais, gastronomia mediterrânea e vistas deslumbrantes do Mar Egeu.',
        bestTime: 'Abr - Out',
        duration: '4-6 dias',
        rating: '4.9',
        highlights: [
          'Pôr do sol em Oia - o mais famoso do mundo',
          'Degustação de vinhos em vinícolas locais',
          'Passeios de barco pela caldeira vulcânica',
          'Gastronomia mediterrânea autêntica',
          'Arquitetura cicládica única'
        ]
      },
      { 
        name: 'Toscana', 
        image: 'Paisagens de colinas e ciprestes na Toscana',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Charme italiano e vinhos excepcionais',
        description: 'A Toscana oferece paisagens de tirar o fôlego, vinhos mundialmente famosos e uma rica herança cultural. Explore vinícolas centenárias, cidades medievais e a autêntica culinária italiana.',
        bestTime: 'Abr - Out',
        duration: '6-8 dias',
        rating: '4.8',
        highlights: [
          'Degustação em vinícolas de Chianti',
          'Passeios por Florença e Siena',
          'Aulas de culinária italiana',
          'Paisagens de colinas e ciprestes',
          'Arte renascentista incomparável'
        ]
      },
      { 
        name: 'Bora Bora', 
        image: 'Bangalôs sobre a lagoa azul turquesa de Bora Bora',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Paraíso polinésio exclusivo',
        description: 'Bora Bora é o destino dos sonhos para quem busca exclusividade total. Com suas águas turquesa, montanhas vulcânicas e resorts de luxo, oferece uma experiência paradisíaca única.',
        bestTime: 'Mai - Out',
        duration: '7-10 dias',
        rating: '4.9',
        highlights: [
          'Bangalôs sobre lagoa cristalina',
          'Mergulho com tubarões e raias',
          'Passeios de helicóptero sobre a ilha',
          'Cultura polinésia autêntica',
          'Spas com tratamentos tradicionais'
        ]
      },
      { 
        name: 'Seychelles', 
        image: 'Praia Anse Source d\'Argent com rochas graníticas em Seychelles',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Arquipélago exclusivo no Índico',
        description: 'As Seychelles oferecem praias de areia branca, águas cristalinas e uma natureza preservada única. É o destino perfeito para quem busca privacidade e contato com a natureza.',
        bestTime: 'Abr - Mai, Out - Nov',
        duration: '7-9 dias',
        rating: '4.8',
        highlights: [
          'Praias de areia branca e rochas graníticas',
          'Reservas naturais com espécies endêmicas',
          'Mergulho em águas cristalinas',
          'Resorts eco-friendly exclusivos',
          'Culinária crioula autêntica'
        ]
      }
    ],
  testimonials: [
    {
      name: 'Carlos Mendes',
      text: 'Uma experiência absolutamente incrível! Cada detalhe foi perfeito.',
      rating: 5
    },
    {
      name: 'Ana Rodrigues',
      text: 'O melhor investimento que já fiz. Valeu cada centavo!',
      rating: 5
    }
  ]
};