import React from 'react';
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

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      name: 'Core',
      icon: Code2,
      skills: [
        { name: t.skills_java, description: "Expert level in Java development with strong focus on Java 8+ features and best practices." },
        { name: t.skills_spring, description: "Extensive experience with Spring Framework, Spring Boot, and Spring Cloud." },
        { name: t.skills_hibernate, description: "Proficient in ORM and database management using Hibernate/JPA." },
      ],
    },
    {
      name: 'Data',
      icon: Database,
      skills: [
        { name: t.skills_sql, description: "Advanced SQL knowledge, database design, and optimization." },
        { name: 'MongoDB', description: "Experience with NoSQL databases and document-based storage." },
        { name: 'Redis', description: "Caching and in-memory data structure store implementation." },
      ],
    },
    {
      name: 'Architecture',
      icon: Server,
      skills: [
        { name: t.skills_rest, description: "Design and implementation of RESTful APIs following best practices." },
        { name: t.skills_microservices, description: "Microservices architecture design and implementation." },
        { name: 'Design Patterns', description: "Strong knowledge of software design patterns and principles." },
      ],
    },
    {
      name: 'DevOps',
      icon: Cloud,
      skills: [
        { name: t.skills_docker, description: "Container orchestration and deployment using Docker." },
        { name: 'Jenkins', description: "CI/CD pipeline setup and maintenance." },
        { name: t.skills_aws, description: "Cloud infrastructure management using AWS services." },
      ],
    },
    {
      name: 'Tools',
      icon: GitBranchPlus,
      skills: [
        { name: t.skills_git, description: "Version control and collaborative development using Git." },
        { name: 'Maven/Gradle', description: "Build automation and dependency management." },
        { name: 'IntelliJ IDEA', description: "Advanced IDE usage and optimization." },
      ],
    },
    {
      name: 'Soft Skills',
      icon: Users,
      skills: [
        { name: t.skills_agile, description: "Agile methodologies and Scrum framework experience." },
        { name: 'Communication', description: "Strong written and verbal communication skills." },
        { name: 'Problem Solving', description: "Analytical thinking and efficient problem-solving abilities." },
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
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-base">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                      </div>
                    </div>
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
