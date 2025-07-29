import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { brandsData } from '../brandsData';

const brandsLinks = Object.entries(brandsData).map(([slug, brand]) => ({
  href: `/nuestras-marcas/${slug}`,
  label: brand.name
})).sort((a, b) => a.label.localeCompare(b.label));

function findBrandByPartialName(partialName) {
  const entry = Object.entries(brandsData).find(([, brand]) =>
    brand.name.toLowerCase().includes(partialName.toLowerCase())
  );
  if (!entry) return null;
  const [slug, brand] = entry;
  return { slug, name: brand.name };

}

const brandsLogo = [
  { src: '/logo-amawaterways.png', match: 'AmaWaterways', height: 'h-5' },
  { src: '/logo-celebrity.png', match: 'Celebrity Cruises', height: 'h-8' },
  { src: '/logo-crystal.png', match: 'Crystal', height: 'h-5' },
  { src: '/logo-msc.png', match: 'MSC Cruzeiros', height: 'h-11' },
  { src: '/logo-scenic.png', match: 'Scenic', height: 'h-7' },
  { src: '/logo-swan.png', match: 'Swan', height: 'h-8' },
  { src: '/logo-ritz-carlton.png', match: 'Ritz', height: 'h-16' },

].map((logo) => {
  const brand = findBrandByPartialName(logo.match);
  return {
    ...logo,
    href: brand ? `/nuestras-marcas/${brand.slug}` : '#',
    alt: brand ? brand.name : 'Marca'
  };
});

export const infosFooter = {

  brandsLogo,

  brands: brandsLinks,

  contacts: [
    { country: 'Brasil', phone: '+55 11 9999-9999', flag: 'flag-br' },
    { country: 'Estados Unidos', phone: '+1 555 123-4567', flag: 'flag-us' },
    { country: 'España', phone: '+34 912 345 678', flag: 'flag-es' },
    { country: 'Francia', phone: '+33 1 23 45 67 89', flag: 'flag-fr' },
    { country: 'Italia', phone: '+39 06 1234 5678', flag: 'flag-it' },
    { country: 'Alemania', phone: '+49 30 12345678', flag: 'flag-de' }
  ],

  socialLinks: [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/RCorpTravel',
      label: 'Facebook',
      color: '#1877F2'
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/rcorptraveloficial/',
      label: 'Instagram',
      gradient:
        'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'
    },
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/@rcorptravel2196',
      label: 'Youtube',
      color: '#FF0000'
    },
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/5511950842678?text=Olá,%20gostaria%20de%20mais%20informações',
      label: 'WhatsApp',
      color: '#25D366'
    }
  ]
};
