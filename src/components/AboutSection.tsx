import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, Trophy } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      institution: "Anurag University",
      degree: "B.E, Computer Science & Engineering (AI & ML)",
      period: "2022 – 2026",
      score: "CGPA: 6.52",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      period: "2020 – 2022", 
      score: "Score: 900/1000",
      icon: <Trophy className="h-6 w-6 text-accent" />
    },
    {
      institution: "St. Martin High School",
      degree: "Secondary Education",
      period: "2010 – 2020",
      score: "GPA: 7.0",
      icon: <Calendar className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm currently pursuing a <span className="text-primary font-semibold">B.E in Computer Science & Engineering (AI & ML)</span> at Anurag University. 
            I enjoy problem-solving, working on web applications, and learning new technologies.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            My passion lies in creating innovative solutions that bridge the gap between complex algorithms and user-friendly interfaces. 
            I'm particularly interested in <span className="text-accent font-semibold">artificial intelligence, machine learning,</span> and 
            <span className="text-primary font-semibold"> full-stack development</span>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">B.E in Computer Science & Engineering (AI & ML) at Anurag University</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
              <Trophy className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Achievements</h3>
              <p className="text-sm text-muted-foreground">100+ coding problems solved, Multiple certifications</p>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Milestones</h3>
              <p className="text-sm text-muted-foreground">2022-2026: B.E in CSE (AI & ML), 100+ problems solved, Multiple certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;