const name = 'Celebrity Cruises';

export const CelebrityCruises = {
  
  name: 'Celebrity Cruises',
  description: 'Emocionantes aventuras para los más valientes',
  fullDescription: 'Para os aventureiros de coração, oferecemos experiências únicas como escaladas em montanhas majestosas, safáris emocionantes, mergulho em recifes de coral pristinos e expedições a locais remotos e inexplorados.',
  icon: '🏔️',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#004275',
  colorEnd: '#E77734',
  heroImage: 'Aventureiros escalando pico de montanha com vista espetacular',
  Image:'/Header/celebrity-header.webp',
  features: [
    'Expedições a locais remotos',
    'Equipamentos profissionais inclusos',
    'Guias especializados experientes',
    'Atividades de adrenalina',
    'Acampamentos em locais únicos',
    'Seguro de aventura completo'
  ],
  destinations: [
      { 
        name: 'Patagônia', 
        image: 'Paisagem dramática da Patagônia com montanhas e glaciares',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Paisagens dramáticas e trekking épico',
        description: 'A Patagônia oferece algumas das paisagens mais dramáticas do planeta. Entre glaciares, montanhas e pampas, viva aventuras épicas em um dos últimos territórios selvagens da Terra.',
        bestTime: 'Nov - Mar',
        duration: '10-14 dias',
        rating: '4.9',
        highlights: [
          'Trekking no Parque Torres del Paine',
          'Escalada no Cerro Fitz Roy',
          'Navegação entre icebergs',
          'Observação de vida selvagem única',
          'Acampamentos em locais remotos'
        ]
      },
      { 
        name: 'Nepal', 
        image: 'Trekking no Himalaia com vista para o Everest',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Trekking no teto do mundo',
        description: 'O Nepal oferece algumas das trilhas de trekking mais espetaculares do mundo. Caminhe pelas montanhas do Himalaia, visite monastérios budistas e experimente a hospitalidade sherpa.',
        bestTime: 'Mar - Mai, Set - Nov',
        duration: '12-18 dias',
        rating: '4.8',
        highlights: [
          'Trekking ao Campo Base do Everest',
          'Vista dos picos mais altos do mundo',
          'Cultura sherpa autêntica',
          'Monastérios budistas centenários',
          'Aventura em alta altitude'
        ]
      },
      { 
        name: 'Costa Rica', 
        image: 'Aventura na floresta tropical da Costa Rica',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Aventura na floresta tropical',
        description: 'A Costa Rica é um paraíso para aventureiros, com florestas tropicais, vulcões ativos e uma biodiversidade incrível. Experimente tirolesa, rafting e observação da vida selvagem.',
        bestTime: 'Dez - Abr',
        duration: '7-10 dias',
        rating: '4.7',
        highlights: [
          'Tirolesa sobre a floresta tropical',
          'Rafting em rios de corredeiras',
          'Observação de vida selvagem',
          'Caminhadas em vulcões ativos',
          'Mergulho no Pacífico e Caribe'
        ]
      },
      { 
        name: 'Islândia', 
        image: 'Aurora boreal sobre paisagem gelada na Islândia',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Terra de fogo e gelo',
        description: 'A Islândia oferece paisagens únicas com vulcões, glaciares, gêiseres e auroras boreais. Uma aventura em um dos países mais espetaculares e selvagens da Europa.',
        bestTime: 'Jun - Ago (verão), Set - Mar (aurora)',
        duration: '8-12 dias',
        rating: '4.9',
        highlights: [
          'Caminhadas em glaciares',
          'Observação de auroras boreais',
          'Banhos em fontes termais naturais',
          'Exploração de cavernas de gelo',
          'Avistamento de baleias'
        ]
      },
      { 
        name: 'Nova Zelândia', 
        image: 'Cenário dramático de fiordes na Nova Zelândia',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Aventura em cenários cinematográficos',
        description: 'A Nova Zelândia é o destino definitivo para aventureiros, oferecendo desde bungee jump até trekking em fiordes. Paisagens que serviram de cenário para filmes épicos.',
        bestTime: 'Nov - Mar',
        duration: '10-14 dias',
        rating: '4.8',
        highlights: [
          'Bungee jump no berço da modalidade',
          'Trekking nos Alpes do Sul',
          'Navegação em fiordes',
          'Aventuras radicais em Queenstown',
          'Cultura maori autêntica'
        ]
      },
      { 
        name: 'Jordânia', 
        image: 'O Tesouro em Petra, Jordânia, esculpido na rocha',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Aventura no deserto e história milenar',
        description: 'A Jordânia combina aventura no deserto com sítios arqueológicos únicos. Explore Petra, acampe no Wadi Rum e flutue no Mar Morto em uma jornada inesquecível.',
        bestTime: 'Mar - Mai, Set - Nov',
        duration: '7-10 dias',
        rating: '4.7',
        highlights: [
          'Exploração da cidade perdida de Petra',
          'Acampamento no deserto de Wadi Rum',
          'Flutuação no Mar Morto',
          'Trekking em cânions espetaculares',
          'Cultura beduína autêntica'
        ]
      }
    ],
  testimonials: [
    {
      name: 'Pedro Silva',
      text: 'Adrenalina pura! A melhor aventura da minha vida.',
      rating: 5
    },
    {
      name: 'Mariana Costa',
      text: 'Superou todas as minhas expectativas. Equipe incrível!',
      rating: 5
    }
  ]
};