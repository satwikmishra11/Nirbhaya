
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceCard } from "@/components/knowledge/ResourceCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  FileText, 
  Link2, 
  PhoneCall, 
  Search, 
  Shield, 
  CheckCircle2, 
  AlertTriangle
} from "lucide-react";

const Knowledge = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Knowledge Center</h1>
            <p className="text-muted-foreground">
              Access safety resources, guides, and emergency contacts.
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="pl-8 w-full md:w-[300px]"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full md:w-auto grid-cols-4 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="self-defense">Self-Defense</TabsTrigger>
            <TabsTrigger value="legal">Legal Rights</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Basic Self-Defense Techniques"
                description="Learn fundamental self-defense moves that can help you escape dangerous situations."
                type="guide"
                category="Self-Defense"
                icon={<Shield className="h-5 w-5" />}
                ctaText="View Guide"
              />
              
              <ResourceCard
                title="Know Your Rights"
                description="Essential legal information about women's rights and protection laws in India."
                type="legal"
                category="Legal"
                icon={<FileText className="h-5 w-5" />}
                ctaText="Read Article"
              />
              
              <ResourceCard
                title="Emergency Response Protocol"
                description="Step-by-step procedure to follow during and after an emergency situation."
                type="guide"
                category="Emergency"
                icon={<AlertTriangle className="h-5 w-5" />}
                ctaText="View Guide"
              />
              
              <ResourceCard
                title="Self-Defense Video Tutorial"
                description="Video demonstration of effective self-defense techniques for women."
                type="video"
                category="Self-Defense"
                icon={<BookOpen className="h-5 w-5" />}
                ctaText="Watch Video"
              />
              
              <ResourceCard
                title="Sexual Harassment Laws in India"
                description="Comprehensive guide to laws against sexual harassment at workplace and public places."
                type="legal"
                category="Legal"
                icon={<FileText className="h-5 w-5" />}
                ctaText="Read Article"
              />
              
              <ResourceCard
                title="First Aid Basics"
                description="Essential first aid techniques that could save a life in emergency situations."
                type="guide"
                category="Emergency"
                icon={<CheckCircle2 className="h-5 w-5" />}
                ctaText="View Guide"
              />
              
              <ResourceCard
                title="City Safety Directory"
                description="Safety contacts, police stations, and healthcare facilities sorted by city and area."
                type="contact"
                category="Emergency"
                icon={<Link2 className="h-5 w-5" />}
                ctaText="View Directory"
              />
              
              <ResourceCard
                title="Domestic Violence Resources"
                description="Support resources and legal aid for victims of domestic violence."
                type="guide"
                category="Legal"
                icon={<Shield className="h-5 w-5" />}
                ctaText="View Resources"
              />
              
              <ResourceCard
                title="Mental Health Support"
                description="Resources for mental health support and counseling for trauma and stress."
                type="contact"
                category="Support"
                icon={<PhoneCall className="h-5 w-5" />}
                ctaText="Get Help"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="self-defense">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Basic Self-Defense Techniques"
                description="Learn fundamental self-defense moves that can help you escape dangerous situations."
                type="guide"
                category="Self-Defense"
                icon={<Shield className="h-5 w-5" />}
                ctaText="View Guide"
              />
              
              <ResourceCard
                title="Self-Defense Video Tutorial"
                description="Video demonstration of effective self-defense techniques for women."
                type="video"
                category="Self-Defense"
                icon={<BookOpen className="h-5 w-5" />}
                ctaText="Watch Video"
              />
              
              <ResourceCard
                title="Situational Awareness Training"
                description="Techniques to improve your awareness of surroundings and potential threats."
                type="guide"
                category="Self-Defense"
                icon={<Shield className="h-5 w-5" />}
                ctaText="View Guide"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="legal">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Know Your Rights"
                description="Essential legal information about women's rights and protection laws in India."
                type="legal"
                category="Legal"
                icon={<FileText className="h-5 w-5" />}
                ctaText="Read Article"
              />
              
              <ResourceCard
                title="Sexual Harassment Laws in India"
                description="Comprehensive guide to laws against sexual harassment at workplace and public places."
                type="legal"
                category="Legal"
                icon={<FileText className="h-5 w-5" />}
                ctaText="Read Article"
              />
              
              <ResourceCard
                title="Domestic Violence Resources"
                description="Support resources and legal aid for victims of domestic violence."
                type="guide"
                category="Legal"
                icon={<Shield className="h-5 w-5" />}
                ctaText="View Resources"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="emergency">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ResourceCard
                title="Emergency Response Protocol"
                description="Step-by-step procedure to follow during and after an emergency situation."
                type="guide"
                category="Emergency"
                icon={<AlertTriangle className="h-5 w-5" />}
                ctaText="View Guide"
              />
              
              <ResourceCard
                title="First Aid Basics"
                description="Essential first aid techniques that could save a life in emergency situations."
                type="guide"
                category="Emergency"
                icon={<CheckCircle2 className="h-5 w-5" />}
                ctaText="View Guide"
              />
              
              <ResourceCard
                title="City Safety Directory"
                description="Safety contacts, police stations, and healthcare facilities sorted by city and area."
                type="contact"
                category="Emergency"
                icon={<Link2 className="h-5 w-5" />}
                ctaText="View Directory"
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Helplines</CardTitle>
              <CardDescription>
                Important contact numbers for emergency situations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Women's Helpline</span>
                      <Badge className="font-mono">1091</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Police</span>
                      <Badge className="font-mono">100</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Ambulance</span>
                      <Badge className="font-mono">102</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Emergency Disaster</span>
                      <Badge className="font-mono">108</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">National Commission for Women</span>
                      <Badge className="font-mono">011-26942369</Badge>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Domestic Violence Helpline</span>
                      <Badge className="font-mono">181</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Safety Tips</CardTitle>
              <CardDescription>
                Essential safety practices to remember
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Share your location</p>
                    <p className="text-sm text-muted-foreground">Always share your live location with trusted contacts when traveling alone at night.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Stay alert in public</p>
                    <p className="text-sm text-muted-foreground">Avoid using headphones or being distracted by your phone in isolated areas.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Trust your instincts</p>
                    <p className="text-sm text-muted-foreground">If something feels wrong, it probably is. Don't hesitate to seek help or leave the situation.</p>
                  </div>
                </div>
                <Separator />
                <div className="flex gap-2">
                  <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="font-medium">Prepare for emergencies</p>
                    <p className="text-sm text-muted-foreground">Keep your phone charged and have emergency contacts easily accessible.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Knowledge;
