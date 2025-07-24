import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from "/Logo-RCORP-RGB.png";
import { brandsData } from '../data/brandsData';

const Header = () => {
  const brands = Object.values(brandsData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 300);
    setTimeoutId(id);
  };

  const linkClasses = (path) =>
    cn(
      "font-medium transition-colors hover:text-[#0099d8]",
      location.pathname === path ? "text-[#002d5f]" : "text-[#002d5f]"
    );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#fff] backdrop-blur-md shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={logo}
              alt="Logo RCORP"
              className="h-14 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/sobre" className={linkClasses('/sobre')}>Sobre Nosotros</Link>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/marcas"
                className={cn(linkClasses('/marcas'), "flex items-center space-x-1")}
              >
                <span>Nuestras Marcas</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    className="fixed top-[80px] left-0 right-0 w-full bg-white shadow-lg border-b border-gray-200 rounded-b-lg z-40"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between gap-10">
                      <div className="w-1/2 grid grid-cols-1 gap-2">
                        <h3 className="text-lg font-semibold text-[#002d5f] mb-4">Nuestras Marcas</h3>
                        {brands.map((brand) => (
                          <div
                            key={brand.slug}
                            className="flex flex-col"
                            onMouseEnter={() => setHoveredBrand(brand)}
                            onMouseLeave={() => setHoveredBrand(false)}
                          >
                            <Link
                              to={`/marca/${brand.slug}`}
                              onClick={() => setIsMegaMenuOpen(false)}
                              className="font-medium text-[#002d5f] mb-2 hover:underline text-sm"
                            >
                              {brand.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                      <div className="w-1/2 hidden md:flex items-center justify-center">
                        {hoveredBrand ? (
                          <motion.img
                            key={hoveredBrand.slug}
                            src={hoveredBrand.Image}
                            alt={hoveredBrand.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="object-contain max-h-48"
                          />
                        ) : (
                          <motion.img
                            key="default-image"
                            src={logo}
                            alt="Logo RCORP"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="object-contain max-h-48"
                          />
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contactos" className={linkClasses('/contactos')}>Contactos</Link>
          </nav>

          <button className="lg:hidden p-2 z-80" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#002d5f] z-80 hidden" />
            ) : (
              <Menu className={cn("w-6 h-6", "text-[#002d5f]")} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-white z-40"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl text-[#002d5f] hover:text-[#0099d8] z-50"
              aria-label="Fechar menu"
            >
              &#10005;
            </button>

            <div className="pt-24 min-h-screen bg-white">
              <nav className="px-8 flex flex-col space-y-8 text-2xl font-medium">
                <Link
                  to="/sobre"
                  className="text-[#002d5f] hover:text-[#0099d8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nosotros
                </Link>
                <Link
                  to="/marcas"
                  className="text-[#002d5f] hover:text-[#0099d8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nuestras Marcas
                </Link>
                <Link
                  to="/contactos"
                  className="text-[#002d5f] hover:text-[#0099d8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contactos
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
