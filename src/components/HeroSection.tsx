
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gray-50/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('/lovable-uploads/647f5802-3eb8-44da-ad2c-58e31dfd31fb.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(0.8) brightness(1.2)"
          }}
        ></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center z-10">
        <p className="text-lg sm:text-xl text-gray-700 animate-slide-down animate-once animate-fill-both">
          {t.hero_greeting}
        </p>
        
        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center animate-slide-up animate-once animate-fill-both animate-delay-200">
          <span className="block text-gray-900">
            Joanna Wałach
          </span>
          <span className="block mt-2 text-primary text-3xl sm:text-4xl md:text-5xl">
            {t.hero_title}
          </span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-xl sm:text-2xl text-gray-700 text-center animate-slide-up animate-once animate-fill-both animate-delay-300">
          {t.hero_subtitle}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up animate-once animate-fill-both animate-delay-400">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {t.hero_cta}
          </Button>
          <Button variant="outline" size="lg">
            {t.nav_contact}
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-subtle-bounce">
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-5 opacity-10">
        <pre className="text-[0.6rem] leading-tight text-current font-mono overflow-hidden">
          {`
import java.util.*;

public class JavaDeveloper {
    private String name;
    private List<String> skills;
    private int yearsOfExperience;
    
    public JavaDeveloper(String name) {
        this.name = name;
        this.skills = new ArrayList<>();
        this.yearsOfExperience = 0;
    }
    
    public void addSkill(String skill) {
        this.skills.add(skill);
    }
    
    public void increaseExperience() {
        this.yearsOfExperience++;
    }
    
    public void solveProblems() {
        while (problems.exist()) {
            Problem problem = problems.next();
            Solution solution = analyzeProblem(problem);
            implementSolution(solution);
            testSolution(solution);
            deploySolution(solution);
        }
    }
    
    public static void main(String[] args) {
        JavaDeveloper me = new JavaDeveloper("Joanna Wałach");
        me.addSkill("Java");
        me.addSkill("Spring Boot");
        me.addSkill("Microservices");
        me.addSkill("RESTful APIs");
        me.solveProblems();
    }
}
          `}
        </pre>
      </div>
    </section>
  );
};

export default HeroSection;
