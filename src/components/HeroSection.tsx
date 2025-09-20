import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl float-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl float-animation" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent glow-text animate-pulse-glow">
              Saketh Yadala
            </span>{' '}
            👋
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            A Full Stack Developer passionate about building{' '}
            <span className="text-primary font-semibold">impactful applications</span>{' '}
            and solving complex problems with innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg font-semibold shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="https://github.com/sakethyadala" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/sakethyadala/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="mailto:sakethyadala2004@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="text-muted-foreground">
            <p className="text-sm">Currently pursuing B.E in Computer Science & Engineering (AI & ML)</p>
            <p className="text-sm">@ Anurag University</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;