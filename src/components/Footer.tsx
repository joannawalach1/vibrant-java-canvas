
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Mail, href: 'mailto:joanna.walach@op.pl' },
  ];

  return (
    <footer className="bg-primary/5 py-12 border-t border-border/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold text-primary">
              <span>Java</span>
              <span className="text-foreground">Dev</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">
              {language === 'pl' 
                ? 'Java Developer budująca solidne i skalowalne aplikacje. Zawsze się uczę, zawsze rozwijam.'
                : 'Java Developer building robust and scalable applications. Always learning, always growing.'}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-10 w-10 rounded-full hover:bg-primary/10"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>
                &copy; {currentYear} Joanna Wałach. {t.footer_rights}.
              </p>
              <p className="mt-1 flex items-center justify-center md:justify-end">
                {language === 'pl' ? 'Stworzone z' : 'Made with'} 
                <Heart className="h-3 w-3 mx-1 text-red-500 animate-pulse" /> 
                {language === 'pl' ? 'w Polsce' : 'in Poland'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
