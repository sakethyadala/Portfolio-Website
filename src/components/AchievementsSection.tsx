import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star, Shield, Network, FileText } from 'lucide-react';

const AchievementsSection = () => {

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Certification Cards */}
            <Card className="project-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-4">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">Python Essentials 1</h4>
                <p className="text-xs text-muted-foreground">CISCO</p>
              </CardContent>
            </Card>
            
            <Card className="project-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-4">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">Python Essentials 2</h4>
                <p className="text-xs text-muted-foreground">CISCO</p>
              </CardContent>
            </Card>
            
            <Card className="project-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-4">
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">Cybersecurity</h4>
                <p className="text-xs text-muted-foreground">CISCO</p>
              </CardContent>
            </Card>
            
            <Card className="project-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-4">
                <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">Python (Basic)</h4>
                <p className="text-xs text-muted-foreground">HackerRank</p>
              </CardContent>
            </Card>
            
            <Card className="project-card border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-4">
                <Network className="h-8 w-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-sm mb-1">CCNA</h4>
                <p className="text-xs text-muted-foreground">CISCO</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Star className="h-4 w-4 mr-2" />
              100+ Problems Solved on LeetCode & HackerRank
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;