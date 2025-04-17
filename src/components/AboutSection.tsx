
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileDown, Code, Code2, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { 
      value: '3+', 
      label: 'Years Learning Java', 
      icon: Code 
    },
    { 
      value: '3', 
      label: 'Major Projects', 
      icon: Code2 
    },
    { 
      value: '2', 
      label: 'Frontend Projects', 
      icon: Coffee 
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className="space-y-6 max-w-xl"
            data-aos="fade-right"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-up">
              {t.about_title}
            </h2>
            
            <p className="text-lg text-muted-foreground animate-slide-right animate-delay-100">
              For me, Java is not just a tool, but a true passion that I happily employ to create creative solutions. In addition to Java, I'm also interested in microservices and enjoy exploring their implementation.
            </p>
            
            <p className="text-lg text-muted-foreground animate-slide-right animate-delay-200">
              I have experience using various technologies such as React, WordPress, and tools like Git, Visual Studio Code, and IntelliJ IDEA. My fluency in English and experience in international work environments help me communicate effectively and adapt quickly to changing conditions.
            </p>
            
            <Button className="mt-8 animate-slide-right animate-delay-300">
              <FileDown className="mr-2 h-4 w-4" />
              {t.about_button}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="card-hover animate-zoom-in" 
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
            
            <div className="relative col-span-full sm:col-span-3 h-48 mt-6 rounded-lg overflow-hidden animate-zoom-in animate-delay-400">
              <div className="absolute inset-0 bg-primary/5 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl font-bold mb-2">Contact Information</div>
                  <div className="text-sm text-muted-foreground">
                    <p>Email: joanna.walach@op.pl</p>
                    <p>Location: Białobrzegi</p>
                    <p>LinkedIn: Joanna Wałach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
