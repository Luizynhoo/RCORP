import { brandsData } from '../brandsData';

export const infosHome = {
  banners: [
    {
      id: 1,
      imageURL:'https://images.unsplash.com/photo-1604257601296-65d349c74773',
      title: 'Descubre destinos increíbles',
      subtitle: 'Experiencias únicas alrededor del mundo',
      image: 'Paisaje tropical paradisíaco con aguas cristalinas y palmeras'
    },
    {
      id: 2,
      imageURL:'https://images.unsplash.com/photo-1604257601296-65d349c74773',
      title: 'Aventuras inolvidables',
      subtitle: 'Vive momentos que durarán para siempre',
      image: 'Montañas majestuosas con aventureros explorando senderos'
    },
    {
      id: 3,
      imageURL:'https://images.unsplash.com/photo-1604257601296-65d349c74773',
      title: 'Lujo y confort',
      subtitle: 'Viajes premium con todo el refinamiento',
      image: 'Resort de lujo com piscina infinita y vista al océano'
    }
  ],

  brands: Object.entries(brandsData).map(([id, brand]) => ({
    id,
    name: brand.name,
    description: brand.description,
    image: brand.logoRGB,
    height: brand.logoHeight,
  }))
};