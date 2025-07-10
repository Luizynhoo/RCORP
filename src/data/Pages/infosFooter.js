import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export const infosFooter = {
  brandsLogo: [
    { src: '/logo-amawaterways.png', href: '/marca/AmaWaterwats', alt: 'AmaWaterways', height: 'h-5' },
    { src: '/logo-celebrity.png', href: '/marca/Celebrity-Cruises', alt: 'Celebrity Cruises', height: 'h-8' },
    { src: '/logo-msc.png', href: '/marca/MSC-Cruzeiros', alt: 'MSC Cruzeiros', height: 'h-11' },
    { src: '/logo-swan.png', href: '/marca/Swan-Hellenic', alt: 'Swan Hellenic', height: 'h-8' },
    { src: '/logo-scenic.png', href: '/marca/Scenic', alt: 'Scenic', height: 'h-7' },
    { src: '/logo-crystal.png', href: '/marca/Crystal', alt: 'Crystal', height: 'h-5' }
  ].sort((a, b) => a.alt.localeCompare(b.alt)),

  brands: [
    { href: '/marca/Celebrity-Cruises', label: 'Celebrity Cruises' },
    { href: '/marca/AmaWaterwats', label: 'AmaWaterwats' },
    { href: '/marca/MSC-Cruzeiros', label: 'MSC Cruzeiros' },
    { href: '/marca/Scenic', label: 'Scenic' },
    { href: '/marca/Swan-Hellenic', label: 'Swan Hellenic' },
    { href: '/marca/Crystal', label: 'Crystal' }
  ].sort((a, b) => a.label.localeCompare(b.label)),

  contacts: [
    { country: 'Brasil', phone: '+55 11 9999-9999', flag: 'flag-br' },
    { country: 'Estados Unidos', phone: '+1 555 123-4567', flag: 'flag-us' },
    { country: 'España', phone: '+34 912 345 678', flag: 'flag-es' },
    { country: 'Francia', phone: '+33 1 23 45 67 89', flag: 'flag-fr' },
    { country: 'Italia', phone: '+39 06 1234 5678', flag: 'flag-it' },
    { country: 'Alemania', phone: '+49 30 12345678', flag: 'flag-de' },
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
      href: 'https://api.whatsapp.com/send/?phone=5511950842678&text&type=phone_number&app_absent=0',
      label: 'WhatsApp',
      color: '#25D366'
    }
  ]
};
