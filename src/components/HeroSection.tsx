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
        <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Lighter overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(1.1) contrast(0.9) grayscale(0.2)"
          }}
        ></div>
        {/* Soft blue and gray gradient overlays */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl z-20 mix-blend-overlay"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-500/20 rounded-full filter blur-3xl z-20 mix-blend-overlay"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center z-10">
        <p className="text-lg sm:text-xl text-white animate-slide-down animate-once animate-fill-both">
          {t.hero_greeting}
        </p>
        
        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 animate-slide-up animate-once animate-fill-both animate-delay-200">
          <span 
            className="block bg-white/70 text-gray-900 px-4 py-2 rounded-lg mb-2 backdrop-blur-sm border border-gray-300/50"
          >
            Joanna Wałach
          </span>
          <span 
            className="block mt-2 text-blue-600 bg-white/70 px-4 py-2 rounded-lg backdrop-blur-sm border border-blue-200/50"
          >
            {t.hero_title}
          </span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-xl sm:text-2xl text-white animate-slide-up animate-once animate-fill-both animate-delay-300">
          {t.hero_subtitle}
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up animate-once animate-fill-both animate-delay-400">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {t.hero_cta}
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            {t.contact_title}
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-subtle-bounce">
          <a href="#about" className="text-white hover:text-primary transition-colors">
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
