import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Film, Globe, BarChart3, Bot } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "An intelligent movie recommendation system using machine learning algorithms to suggest personalized content based on user preferences and viewing history.",
      icon: <Film className="h-8 w-8" />,
      tech: ["Python", "scikit-learn", "Streamlit", "Pandas", "NumPy"],
      features: ["Content-based filtering", "Collaborative filtering", "Interactive UI", "Real-time recommendations"],
      github: "https://github.com/sakethyadala/movie-recommendation-system",
      demo: "https://github.com/sakethyadala/movie-recommendation-system",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects, skills, and achievements. Built with modern web technologies for optimal performance.",
      icon: <Globe className="h-8 w-8" />,
      tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      features: ["Responsive design", "Smooth animations", "Dark theme", "SEO optimized"],
      github: "https://github.com/sakethyadala/portfolio-website",
      demo: "https://sakethyadala.dev/",
      gradient: "from-blue-500 to-cyan-500"
    },
  {
  title: "DevTasks Task Manager",
  description: "A web-based task management application designed to help users organize their daily tasks. Features user authentication, persistent task storage, and core task management functionalities.",
  icon: <BarChart3 className="h-8 w-8" />, // Using the BarChart3 as requested, ensure it's imported if needed
  tech: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "react-router-dom",
    "zod"
  ],
  features: [
    "User Authentication",
    "Persistent Task Storage",
    "Task Creation & Deletion",
    "Mark Tasks as Complete"
  ],
  github: "https://github.com/sakethyadala/DevTasks-task-manager", // **IMPORTANT: Replace with your actual GitHub link**
  demo: "https://your-devtasks-demo-link.vercel.app",             // **IMPORTANT: Replace with your actual live demo link (if you deploy it)**
  gradient: "from-blue-500 to-indigo-500"
},
    {
      title: "FAQ Chatbot",
      description: "An intelligent chatbot designed to handle frequently asked questions using natural language processing and machine learning techniques.",
      icon: <Bot className="h-8 w-8" />,
      tech: ["Python", "NLP", "Flask", "TensorFlow", "REST API"],
      features: ["Natural language understanding", "Context awareness", "Multi-language support", "Learning capabilities"],
      github: "https://github.com/sakethyadala/faq-chatbot",
      demo: "https://github.com/sakethyadala/faq-chatbot",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development, machine learning, and data visualization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card border-border/50 hover:border-primary/50 transition-all duration-500 group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;