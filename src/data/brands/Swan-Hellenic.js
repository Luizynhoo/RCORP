const name = 'Swan Hellenic';

export const SwanHellenic = {
  name: 'Swan Hellenic',
  description: 'Soluciones completas para viajes de empresa',
  fullDescription: 'Otimize suas viagens de negócios com nossos serviços especializados. Oferecemos planejamento completo, acomodações estratégicas, salas de reunião equipadas e suporte 24/7 para garantir o sucesso dos seus negócios.',
  icon: '💼',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#004155',
  colorEnd: '#E4A660',
  heroImage: 'Executivos em aeroporto moderno com serviços business premium',
  Image:'/Header/swan-header.webp',
  features: [
    'Planejamento corporativo completo',
    'Acomodações estratégicas',
    'Salas de reunião equipadas',
    'Suporte 24/7 especializado',
    'Gestão de despesas',
    'Relatórios detalhados'
  ],
  destinations: [
      { 
        name: 'São Paulo', 
        image: 'Centro financeiro de São Paulo com arranha-céus',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Centro financeiro da América Latina',
        description: 'São Paulo é o principal hub de negócios da América Latina. Oferecemos serviços completos para viagens corporativas na maior metrópole brasileira.',
        bestTime: 'Ano todo',
        duration: '2-5 dias',
        rating: '4.7',
        highlights: [
          'Hotéis business no centro financeiro',
          'Salas de reunião equipadas',
          'Transporte executivo',
          'Networking em eventos corporativos',
          'Suporte logístico completo'
        ]
      },
      { 
        name: 'Nova York', 
        image: 'Distrito financeiro de Manhattan',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Capital mundial dos negócios',
        description: 'Nova York é o centro financeiro mundial. Oferecemos serviços premium para executivos que buscam eficiência e produtividade em suas viagens de negócios.',
        bestTime: 'Ano todo',
        duration: '3-7 dias',
        rating: '4.8',
        highlights: [
          'Hotéis em Manhattan',
          'Acesso a Wall Street',
          'Salas de reunião premium',
          'Transporte executivo',
          'Networking internacional'
        ]
      },
      { 
        name: 'Londres', 
        image: 'Distrito financeiro de Londres com arquitetura moderna',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Hub financeiro europeu',
        description: 'Londres é o principal centro financeiro da Europa. Oferecemos serviços especializados para executivos que fazem negócios na capital britânica.',
        bestTime: 'Ano todo',
        duration: '2-6 dias',
        rating: '4.8',
        highlights: [
          'Hotéis na City de Londres',
          'Acesso ao distrito financeiro',
          'Salas de conferência modernas',
          'Transporte executivo',
          'Eventos de networking'
        ]
      },
      { 
        name: 'Singapura', 
        image: 'Marina Bay Sands em Singapura',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Gateway para a Ásia',
        description: 'Singapura é o principal hub de negócios da Ásia. Oferecemos serviços completos para executivos que fazem negócios no continente asiático.',
        bestTime: 'Ano todo',
        duration: '3-7 dias',
        rating: '4.9',
        highlights: [
          'Hotéis no distrito financeiro',
          'Facilidades para negócios',
          'Conectividade asiática',
          'Infraestrutura moderna',
          'Eficiência logística'
        ]
      },
      { 
        name: 'Frankfurt', 
        image: 'Skyline do distrito financeiro de Frankfurt',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Centro financeiro alemão',
        description: 'Frankfurt é o coração financeiro da Alemanha e importante hub europeu. Oferecemos serviços especializados para viagens corporativas eficientes.',
        bestTime: 'Ano todo',
        duration: '2-5 dias',
        rating: '4.7',
        highlights: [
          'Proximidade ao distrito bancário',
          'Infraestrutura de negócios',
          'Conectividade europeia',
          'Eficiência alemã',
          'Facilidades corporativas'
        ]
      },
      { 
        name: 'Dubai', 
        image: 'Centro de negócios moderno em Dubai',
        DestinoImg:'https://images.unsplash.com/photo-1595872018818-97555653a011',
        shortDescription: 'Hub de negócios do Oriente Médio',
        description: 'Dubai é o principal centro de negócios do Oriente Médio. Oferecemos serviços premium para executivos que fazem negócios na região.',
        bestTime: 'Nov - Mar',
        duration: '3-6 dias',
        rating: '4.8',
        highlights: [
          'Hotéis de negócios luxuosos',
          'Facilidades corporativas',
          'Conectividade global',
          'Zona franca de negócios',
          'Networking internacional'
        ]
      }
    ],
  testimonials: [
    {
      name: 'Eduardo Martins',
      text: 'Eficiência total. Focamos apenas nos negócios.',
      rating: 5
    },
    {
      name: 'Patricia Alves',
      text: 'Serviço impecável para viagens corporativas.',
      rating: 5
    }
  ]
};