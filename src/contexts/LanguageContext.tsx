
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the available languages
type Language = 'en' | 'pl';

// Create translations for both languages
export const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    
    // Hero section
    hero_greeting: 'Hello, my name is',
    hero_title: 'Java Developer',
    hero_subtitle: 'Building robust & scalable applications',
    hero_cta: 'View my work',
    
    // About section
    about_title: 'About Me',
    about_description: 'I am a passionate Java developer with experience in building enterprise-grade applications. My journey in software development started with a strong foundation in computer science and has evolved through working on various challenging projects.',
    about_experience: 'Years of Experience',
    about_projects: 'Projects Completed',
    about_clients: 'Satisfied Clients',
    about_button: 'Download Resume',
    
    // Skills section
    skills_title: 'My Skills',
    skills_description: 'I specialize in Java development with expertise in various frameworks and technologies.',
    skills_java: 'Java',
    skills_spring: 'Spring',
    skills_hibernate: 'Hibernate',
    skills_sql: 'SQL',
    skills_rest: 'RESTful APIs',
    skills_microservices: 'Microservices',
    skills_docker: 'Docker',
    skills_aws: 'AWS',
    skills_git: 'Git',
    skills_agile: 'Agile',
    
    // Projects section
    projects_title: 'My Projects',
    projects_description: 'Here are some of the projects I\'ve worked on.',
    projects_all: 'All',
    projects_web: 'Web Apps',
    projects_mobile: 'Mobile',
    projects_backend: 'Backend',
    projects_view: 'View Project',
    projects_source: 'Source Code',
    
    // Contact section
    contact_title: 'Get In Touch',
    contact_description: 'Interested in working together? Feel free to contact me.',
    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send Message',
    contact_success: 'Message sent successfully!',
    contact_error: 'Something went wrong. Please try again.',
    
    // Footer
    footer_rights: 'All rights reserved',
  },
  pl: {
    // Navigation
    nav_home: 'Start',
    nav_about: 'O mnie',
    nav_skills: 'Umiejętności',
    nav_projects: 'Projekty',
    nav_contact: 'Kontakt',
    
    // Hero section
    hero_greeting: 'Cześć, nazywam się',
    hero_title: 'Java Developer',
    hero_subtitle: 'Tworzę solidne i skalowalne aplikacje',
    hero_cta: 'Zobacz moje projekty',
    
    // About section
    about_title: 'O mnie',
    about_description: 'Jestem pasjonatem programowania w Java z doświadczeniem w budowaniu aplikacji klasy korporacyjnej. Moja podróż w rozwoju oprogramowania rozpoczęła się od solidnych podstaw informatyki i ewoluowała poprzez pracę nad różnymi wymagającymi projektami.',
    about_experience: 'Lat doświadczenia',
    about_projects: 'Ukończonych projektów',
    about_clients: 'Zadowolonych klientów',
    about_button: 'Pobierz CV',
    
    // Skills section
    skills_title: 'Moje umiejętności',
    skills_description: 'Specjalizuję się w rozwoju Java z wiedzą w różnych frameworkach i technologiach.',
    skills_java: 'Java',
    skills_spring: 'Spring',
    skills_hibernate: 'Hibernate',
    skills_sql: 'SQL',
    skills_rest: 'RESTful APIs',
    skills_microservices: 'Mikrousługi',
    skills_docker: 'Docker',
    skills_aws: 'AWS',
    skills_git: 'Git',
    skills_agile: 'Agile',
    
    // Projects section
    projects_title: 'Moje projekty',
    projects_description: 'Oto kilka projektów, nad którymi pracowałem.',
    projects_all: 'Wszystkie',
    projects_web: 'Aplikacje webowe',
    projects_mobile: 'Mobilne',
    projects_backend: 'Backend',
    projects_view: 'Zobacz projekt',
    projects_source: 'Kod źródłowy',
    
    // Contact section
    contact_title: 'Skontaktuj się',
    contact_description: 'Zainteresowany współpracą? Skontaktuj się ze mną.',
    contact_name: 'Imię',
    contact_email: 'Email',
    contact_message: 'Wiadomość',
    contact_send: 'Wyślij wiadomość',
    contact_success: 'Wiadomość wysłana pomyślnie!',
    contact_error: 'Coś poszło nie tak. Spróbuj ponownie.',
    
    // Footer
    footer_rights: 'Wszelkie prawa zastrzeżone',
  }
};

type TranslationsType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationsType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [t, setT] = useState<TranslationsType>(translations.en);
  
  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.split('-')[0] as Language;
    const storedLang = localStorage.getItem('language') as Language;
    
    // Only use browserLang or storedLang if they're valid options ('en' or 'pl')
    const initialLang = storedLang && (storedLang === 'en' || storedLang === 'pl') 
      ? storedLang 
      : (browserLang === 'pl' ? 'pl' : 'en');
    
    setLanguage(initialLang);
  }, []);
  
  useEffect(() => {
    // Make sure we're using the correct translations object based on the language
    if (language === 'pl') {
      setT(translations.pl);
    } else {
      setT(translations.en);
    }
    
    // Store the selected language in localStorage
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    
    // Force re-render by adding a small delay
    setTimeout(() => {
      console.log('Language changed to:', language);
    }, 10);
  }, [language]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
