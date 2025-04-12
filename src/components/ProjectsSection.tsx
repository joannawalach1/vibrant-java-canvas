
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'backend';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // For now, this will be a placeholder
  category: Exclude<ProjectCategory, 'all'>[];
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A scalable microservices-based e-commerce platform built with Spring Boot and React.',
      image: 'project1',
      category: ['backend', 'web'],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'React', 'Docker'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Banking API',
      description: 'Secure RESTful API for online banking services with transaction management.',
      image: 'project2',
      category: ['backend'],
      technologies: ['Java', 'Spring Security', 'PostgreSQL', 'JUnit', 'Swagger'],
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'Cross-platform mobile application for real-time weather forecasts.',
      image: 'project3',
      category: ['mobile'],
      technologies: ['Java', 'Android SDK', 'Retrofit', 'OpenWeatherMap API'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Full-stack task management application with real-time updates.',
      image: 'project4',
      category: ['web', 'backend'],
      technologies: ['Java', 'Spring Boot', 'WebSockets', 'Angular', 'MongoDB'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      id: 5,
      title: 'Inventory Management API',
      description: 'Backend API for inventory tracking and management for retail stores.',
      image: 'project5',
      category: ['backend'],
      technologies: ['Java', 'Spring Data', 'MySQL', 'Redis', 'Docker'],
      repoUrl: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracker App',
      description: 'Mobile application for tracking workouts and health metrics.',
      image: 'project6',
      category: ['mobile'],
      technologies: ['Java', 'Android', 'Room Database', 'Google Fit API'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category.includes(activeCategory as any)
  );

  const categories = [
    { id: 'all', label: t.projects_all },
    { id: 'web', label: t.projects_web },
    { id: 'mobile', label: t.projects_mobile },
    { id: 'backend', label: t.projects_backend },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-slide-up">
            {t.projects_title}
          </h2>
          <p className="text-lg text-muted-foreground animate-slide-up animate-delay-100">
            {t.projects_description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up animate-delay-200">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden card-hover border border-border/50 animate-zoom-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <div className="text-4xl font-bold text-primary/20">{project.title.substring(0, 1)}</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-secondary/50 flex justify-between">
                {project.demoUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {t.projects_view}
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="h-4 w-4 mr-1" />
                      {t.projects_source}
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <span>View More Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
