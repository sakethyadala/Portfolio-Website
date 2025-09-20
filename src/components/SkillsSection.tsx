import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Cloud, Brain, Users, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "SQL" }
      ]
    },
    {
      title: "Frontend",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "React" }
      ]
    },
    {
      title: "Backend",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" }
      ]
    }
  ];


  return (
    <section id="skills" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills developed through continuous learning and hands-on experience.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg text-white">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;