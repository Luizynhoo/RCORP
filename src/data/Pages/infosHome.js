import { brandsData } from '../brandsData';

export const infosHome = {
  banners: [
    {
      id: 1,
      title: 'Descubre destinos increíbles',
      subtitle: 'Experiencias únicas alrededor del mundo',
      image: 'Paisaje tropical paradisíaco con aguas cristalinas y palmeras'
    },
    {
      id: 2,
      title: 'Aventuras inolvidables',
      subtitle: 'Vive momentos que durarán para siempre',
      image: 'Montañas majestuosas con aventureros explorando senderos'
    },
    {
      id: 3,
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