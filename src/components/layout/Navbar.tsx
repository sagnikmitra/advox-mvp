import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const { isDarkMode } = useThemeStore();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoUrl = isDarkMode 
    ? "https://raw.githubusercontent.com/sagnikmitra/pr-testing/refs/heads/main/advox-wide.png"
    : "https://raw.githubusercontent.com/sagnikmitra/pr-testing/refs/heads/main/advox-wide-blue.png";

  return (
    <nav className="bg-white dark:bg-neutral-800 shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <img src={logoUrl} alt="Advox Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium ${isActive('/') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium ${isActive('/about') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium ${isActive('/services') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium ${isActive('/contact') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
            >
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <Link to="/lawyer/login" className="btn-outline text-sm">
                {t('nav.lawyer_login')}
              </Link>
              <Link to="/client/login" className="btn-primary text-sm">
                {t('nav.client_login')}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white dark:bg-neutral-800 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-5 space-y-4">
            <Link 
              to="/" 
              className={`block text-base font-medium ${isActive('/') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
              onClick={toggleMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`block text-base font-medium ${isActive('/about') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
              onClick={toggleMenu}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className={`block text-base font-medium ${isActive('/services') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
              onClick={toggleMenu}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/contact" 
              className={`block text-base font-medium ${isActive('/contact') ? 'text-primary-600 dark:text-secondary-400' : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-secondary-400'}`}
              onClick={toggleMenu}
            >
              {t('nav.contact')}
            </Link>
            
            <div className="pt-4 space-y-3">
              <Link 
                to="/lawyer/login" 
                className="btn-outline w-full flex justify-center"
                onClick={toggleMenu}
              >
                {t('nav.lawyer_login')}
              </Link>
              <Link 
                to="/client/login" 
                className="btn-primary w-full flex justify-center"
                onClick={toggleMenu}
              >
                {t('nav.client_login')}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;