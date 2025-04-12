
import React, { useState, useEffect } from 'react';
import { Menu, Languages, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { themeColor, setThemeColor } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: t.nav_home },
    { href: '#about', label: t.nav_about },
    { href: '#skills', label: t.nav_skills },
    { href: '#projects', label: t.nav_projects },
    { href: '#contact', label: t.nav_contact },
  ];

  const themeOptions = [
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'green', label: 'Green' },
    { value: 'orange', label: 'Orange' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-primary">
              <span>Java</span>
              <span className="text-foreground">Dev</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 px-3 text-sm font-medium text-foreground hover:text-primary link-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                  <Languages className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  <span className={language === 'en' ? 'font-bold' : ''}>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('pl')}>
                  <span className={language === 'pl' ? 'font-bold' : ''}>Polski</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 px-2 gap-1">
                  <span className="w-3 h-3 rounded-full bg-primary mr-1"></span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {themeOptions.map((theme) => (
                  <DropdownMenuItem 
                    key={theme.value} 
                    onClick={() => setThemeColor(theme.value as any)}
                    className="flex items-center gap-2"
                  >
                    <span 
                      className={`w-3 h-3 rounded-full bg-theme-${theme.value}`} 
                      style={{ background: `var(--theme-${theme.value})` }}
                    ></span>
                    <span className={themeColor === theme.value ? 'font-bold' : ''}>
                      {theme.label}
                    </span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 px-3 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-around py-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
              >
                <Languages className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Polski' : 'English'}
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <span 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ background: `var(--theme-${themeColor})` }}
                    ></span>
                    Theme
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {themeOptions.map((theme) => (
                    <DropdownMenuItem 
                      key={theme.value} 
                      onClick={() => setThemeColor(theme.value as any)}
                    >
                      <span 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ background: `var(--theme-${theme.value})` }}
                      ></span>
                      {theme.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
