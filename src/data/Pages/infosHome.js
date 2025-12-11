import { brandsData } from '../brandsData';

export const infosHome = {
  banners: [
    {
      id: 1,
      mobileImageURL:'../Banners/Banner-CEL-RCORP-Mobile.webp',
      imageURL:'../Banners/Banner-CEL-RCORP.webp',
      title: 'Descubre destinos increíbles',
      subtitle: 'Experiencias únicas alrededor del mundo',
      image: 'Paisaje tropical paradisíaco con aguas cristalinas y palmeras',
      link:'/nuestras-marcas/celebrity-cruises'
    },
    {
      id: 2,
      mobileImageURL:'../Banners/Banner-MSC-RCORP-Mobile.webp',
      imageURL:'../Banners/Banner-MSC-RCORP.webp',
      title: 'Aventuras inolvidables',
      subtitle: 'Vive momentos que durarán para siempre',
      image: 'Montañas majestuosas con aventureros explorando senderos',
      link:'/nuestras-marcas/msc-cruzeiros'
    },
    {
      id: 3,
      mobileImageURL:'../Banners/Banner-CRY-RCORP.webp',
      imageURL:'../Banners/Banner-CRY-RCORP.webp',
      title: 'Lujo y confort',
      subtitle: 'Viajes premium con sofisticación y elegancia',
      image: 'Resort de lujo com piscina infinita y vista al océano',
      link:'/nuestras-marcas/crystal'
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