
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  GitBranchPlus, 
  Users,
  CheckCircle2
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      name: 'Core',
      icon: Code2,
      skills: [
        { name: t.skills_java, value: 95 },
        { name: t.skills_spring, value: 90 },
        { name: t.skills_hibernate, value: 85 },
      ],
    },
    {
      name: 'Data',
      icon: Database,
      skills: [
        { name: t.skills_sql, value: 85 },
        { name: 'MongoDB', value: 75 },
        { name: 'Redis', value: 70 },
      ],
    },
    {
      name: 'Architecture',
      icon: Server,
      skills: [
        { name: t.skills_rest, value: 90 },
        { name: t.skills_microservices, value: 85 },
        { name: 'Design Patterns', value: 80 },
      ],
    },
    {
      name: 'DevOps',
      icon: Cloud,
      skills: [
        { name: t.skills_docker, value: 80 },
        { name: 'Jenkins', value: 75 },
        { name: t.skills_aws, value: 70 },
      ],
    },
    {
      name: 'Tools',
      icon: GitBranchPlus,
      skills: [
        { name: t.skills_git, value: 90 },
        { name: 'Maven/Gradle', value: 85 },
        { name: 'IntelliJ IDEA', value: 95 },
      ],
    },
    {
      name: 'Soft Skills',
      icon: Users,
      skills: [
        { name: t.skills_agile, value: 90 },
        { name: 'Communication', value: 85 },
        { name: 'Problem Solving', value: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-up">
            {t.skills_title}
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animate-delay-100">
            {t.skills_description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="bg-card rounded-lg p-6 shadow-sm border border-border card-hover animate-zoom-in"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-medium">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-1 text-primary" />
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.value}%
                      </span>
                    </div>
                    <Progress 
                      value={hoveredSkill === skill.name ? skill.value : 0} 
                      className="h-2 group-hover:animate-pulse transition-all duration-1000 ease-out"
                      style={{
                        '--progress-value': hoveredSkill === skill.name ? skill.value : 0,
                        '--animation-delay': `${skillIndex * 100}ms`,
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {['Java', 'Spring Boot', 'Hibernate', 'JPA', 'MySQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'REST API', 'GraphQL', 'Microservices', 'JUnit', 'Maven', 'Gradle'].map((tag, i) => (
              <span 
                key={tag} 
                className="skill-tag animate-zoom-in"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
