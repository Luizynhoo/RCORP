const name = 'Swan Hellenic';

export const SwanHellenic = {
  name: 'Swan Hellenic',
  description: 'Desde la naturaleza salvaje de las regiones polares, hasta los increíbles paisajes de África y América Latina.',
  subtitles: 'Desde la naturaleza salvaje de las regiones polares, hasta los increíbles paisajes de África y América Latina.',
  subtitleBrands: 'Un viaje sin límites: Descubra las regiones polares y la diversidad de África y América Latina.',
  fullDescription: 'Ofrece cruceros de expedición cultural de lujo a destinos remotos, desde polos hasta trópicos. Sus pequeños barcos boutique brindan una exploración inmersiva con expertos y un fuerte compromiso sostenible. Perfectos para viajeros que buscan aventura, cultura y un descubrimiento responsable.',
  secondDescription: 'Con un equipo comprometido con la perfección, garantizamos que cada instante de su viaje sea una experiencia sin igual. Con nosotros, cada momento se convierte en un recuerdo inolvidable.',
  slug: name.toLowerCase().replace(/\s+/g, '-'),
  colorStart: '#004155',
  colorEnd: '#E4A660',
  heroImage: 'Ejecutivos en un aeropuerto moderno con servicios premium de negocios',
  Image: '/Header/swan-header.webp',
  logoRGB: '/RGB/logo-swan-rgb.png',
  logoHeight: 'h-[45px]',
  expTitle: 'Experiencias que Transforman',
  exp: 'Creamos experiencias transformadoras que lo conectan profundamente con culturas, paisajes y aventuras que recordará por siempre.',
  videoUrlone: 'https://www.youtube.com/embed/JagehTsxDmA',
  videoUrltwo: 'https://www.youtube.com/embed/_g6GzyZuW4Y',
  features: [
    'Planificación Corporativa Integral',
    'Alojamientos Estratégicos',
    'Salas de Reuniones Equipadas',
    'Soporte Especializado 24/7',
  ],
  destinations: [
    {
      name: 'Ártico y Antártida',
      image: 'Paisajes helados y glaciares espectaculares en polos remotos',
      DestinoImg: '../Destinations/Antarctic.webp',
      shortDescription: 'Exploración polar en lugares vírgenes como Groenlandia y Fiordos noruegos.',
      description: 'Experimente expediciones culturales al Ártico y la Antártida a bordo de los yates boutique SH Vega y SH Diana. Navegue por Svalbard, Groenlandia y Tierra de Fuego, con excursiones en zodiac, avistamiento de fauna y escenarios helados únicos.',
      bestTime: 'Jun - Sep (Ártico), Nov - Mar (Antártida)',
      duration: '9‑20 noches',
      rating: '5.0',
      highlights: [
        'Glaciares imponentes y icebergs gigantes',
        'Observación de ballenas, focas y pingüinos',
        'Excursiones en zodiac y kayak polar',
        'Expertos en historia y ciencia',
        'Conciencia ambiental y safaris en condiciones extremas'
      ]
    },
    {
      name: 'Islas remotas del Pacífico y Atlántico',
      image: 'Arquipélagos aislados e exóticos cercanos ao Pacífico Sul e Atlântico',
      DestinoImg: '../Destinations/IlhasRemotas.webp',
      shortDescription: 'Islas aisladas y poco visitadas en rutas boutique oceánicas.',
      description: 'Cruceros exclusivos hacia islas remotas en el Pacífico Sur y el Atlántico, como el archipiélago de Seychelles, Guyana y atolones poco explorados, en itinerarios centrados en la cultura local y la naturaleza.',
      bestTime: 'Oct - Mar',
      duration: '10‑17 noches',
      rating: '4.9',
      highlights: [
        'Atolones vírgenes y biodiversidad intacta',
        'Comunidades locales y experiencias auténticas',
        'Fauna marina exótica y snorkel cultural',
        'Paseos en parajes preservados',
        'Ambiente íntimo y exclusivo'
      ]
    },
    {
      name: 'Asia Central y Océano Índico',
      image: 'Puertos exóticos en Sri Lanka, Maldivas y Omán',
      DestinoImg: '../Destinations/AsiaCentral.webp',
      shortDescription: 'Itinerarios por puertos de cultura milenaria e islas exóticas.',
      description: 'Explore puertos legendarios como Sri Lanka, Omán, Maldivas e incluso aldeas del río Amazonas y Guyana en viajes diseñados por Swan Hellenic, combinando patrimonio cultural y naturaleza exuberante.',
      bestTime: 'Nov - Feb',
      duration: '12‑17 noches',
      rating: '4.8',
      highlights: [
        'Sri Lanka cultural y playas tranquilas',
        'Islas Maldivas intactas y hoteles boutique',
        'Historia antigua en Omán y la costa árabe',
        'Exploración en ríos tropicales y ecología regional',
        'Experiencias con guías expertos locales'
      ]
    },
    {
      name: 'Mediterráneo y Mar Negro',
      image: 'Sitios arqueológicos y puertos históricos del Mediterráneo',
      DestinoImg: '../Destinations/Mediterraneo.webp',
      shortDescription: 'Cruceros culturales visitando las raíces de civilizaciones antiguas.',
      description: 'Descubra Grecia, Turquía, Croacia y los enclaves históricos del Mar Negro, con paradas en sitios arqueológicos como Efeso, Troya y antiguos puertos bizantinos en itinerarios llenos de historia y paisajes costeros.',
      bestTime: 'Abr - Oct',
      duration: '7‑14 noches',
      rating: '4.7',
      highlights: [
        'Excursiones en yacimientos arqueológicos clásicos',
        'Ciudades costeras como Estambul, Dubrovnik y Atenas',
        'Historia viva en poblados ancestrales',
        'Cultura mediterránea y gastronomía local',
        'Grupos reducidos y experiencias privadas'
      ]
    },
    {
      name: 'Costa africana e islas atlánticas',
      image: 'Paisajes desérticos y costa de Namibia',
      DestinoImg: '../Destinations/AfricayOceanoIndico.webp',
      shortDescription: 'Rutas por zonas costeras poco exploradas e islas desérticas.',
      description: 'Exploraciones por la costa de África y las islas atlánticas como Namibia, con itinerarios que combinan escenarios naturales impresionantes, patrimonio cultural y experiencias exclusivas fuera de ruta.',
      bestTime: 'May - Sep',
      duration: '7‑14 noches',
      rating: '4.8',
      highlights: [
        'Paisajes desérticos y fauna costera africana',
        'Comunidades culturales poco visitadas',
        'Tours naturales fuera del turismo masivo',
        'Fotografía de paisajes únicos',
        'Guías expertos en ecoturismo y conservación'
      ]
    },
    {
      name: 'Grand Voyages / Expediciones transcontinentales',
      image: 'Mapa de rutas globales hacia continentes remotos',
      DestinoImg: '../Destinations/GrandVoyages.jpeg',
      shortDescription: 'Itinerarios épicos a escala global explorando regiones remotas.',
      description: 'Grand Voyages de Swan Hellenic conectan destinos como Sudamérica, África, el Ártico y Asia en viajes de hasta 20 noches a bordo de SH Vega o SH Diana. Perfecto para exploradores interesados en cultura, naturaleza y viajes excepcionales.',
      bestTime: 'Todo el año según región',
      duration: '15‑20 noches',
      rating: '5.0',
      highlights: [
        'Rutas desde Ushuaia o Ciudad del Cabo hasta alta latitud',
        'Experiencias inmersivas en destinos remotos',
        'Laboratorio científico y charlas culturales',
        'Ambiente boutique y sostenible',
        'Combinación de naturaleza, historia y exploraciones científicas'
      ]
    }
  ],
};
