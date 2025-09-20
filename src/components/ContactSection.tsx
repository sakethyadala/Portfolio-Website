import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7794002447",
      href: "tel:+917794002447",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sakethyadala2004@gmail.com",
      href: "mailto:sakethyadala2004@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/sakethyadala/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/sakethyadala",
      color: "from-gray-600 to-gray-800"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a server
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects. Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="project-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        className="flex items-center gap-4 text-left w-full group-hover:scale-105 transition-transform duration-300"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white`}>
                          {info.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{info.label}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="project-card border-border/50">
              <CardHeader>
                <CardTitle>Let's Build Something Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm currently looking for new opportunities and interesting projects. Whether you have a project in mind, 
                  want to collaborate, or just want to say hi, I'd love to hear from you!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Open to freelance opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Available for full-time positions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Interested in collaboration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="project-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                Send me a message
              </CardTitle>
              <div className="mt-4 p-3 bg-muted/30 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  📧 <span className="font-medium text-foreground">sakethyadala2004@gmail.com</span>
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-card border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-card border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 text-lg font-semibold shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;