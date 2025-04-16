
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedElement } from "@/components/animations/AnimatedElement";
import { SafetyMap } from "@/components/maps/SafetyMap";
import { AlertCard, AlertCardActions } from "@/components/cards/AlertCard";
import { JourneyCard } from "@/components/journey/JourneyCard";
import { Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function DemoSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="text-center mb-12">
        <AnimatedElement animation="fade-in">
          <h2 className="text-3xl font-bold tracking-tight">
            Experience Nirbhaya In Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Preview our core features and see how Nirbhaya keeps you connected and protected.
          </p>
        </AnimatedElement>
      </div>

      <Tabs defaultValue="sos" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="sos">SOS Dashboard</TabsTrigger>
          <TabsTrigger value="journey">Journey Tracking</TabsTrigger>
          <TabsTrigger value="knowledge">Knowledge Center</TabsTrigger>
        </TabsList>
        <TabsContent value="sos">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedElement animation="fade-in">
              <div>
                <h3 className="text-xl font-bold mb-4">Real-time SOS Monitoring</h3>
                <p className="mb-6 text-muted-foreground">
                  Receive instant alerts when a loved one triggers an SOS from their bracelet or mobile app. Track their location in real-time and coordinate assistance.
                </p>
                <AlertCard
                  level="critical"
                  title="SOS Alert Triggered"
                  description="Priya has triggered an SOS alert. Current location appears to be in a red zone. Immediate attention required."
                  timestamp="Just now"
                  userName="Priya Singh"
                  userInitials="PS"
                  isPulsing={true}
                  actions={<AlertCardActions />}
                />
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={0.2}>
              <div className="relative aspect-video min-h-[300px] rounded-lg overflow-hidden border shadow-md">
                <SafetyMap 
                  mapHeight="h-full" 
                  showFilters={true}
                  showLayers={true}
                />
              </div>
            </AnimatedElement>
          </div>
        </TabsContent>
        <TabsContent value="journey">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedElement animation="fade-in">
              <div className="relative aspect-video min-h-[300px] rounded-lg overflow-hidden border shadow-md">
                <SafetyMap 
                  mapHeight="h-full" 
                  showFilters={false}
                  showLayers={true}
                  trackMode={true}
                />
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={0.2}>
              <div>
                <h3 className="text-xl font-bold mb-4">Virtual Journey Escort</h3>
                <p className="mb-6 text-muted-foreground">
                  Monitor the journey of your loved ones in real-time, receive notifications about route deviations, and send check-in requests for peace of mind.
                </p>
                <JourneyCard
                  userName="Priya Singh"
                  userInitials="PS"
                  startLocation="Andheri East, Mumbai"
                  endLocation="Bandra West, Mumbai"
                  startTime="10:45 PM"
                  estimatedArrival="11:20 PM"
                  status="active"
                  progress={60}
                  distance="8.2 km"
                  duration="35 min"
                  onTrack={() => {}}
                  onSendCheckIn={() => {}}
                  onCall={() => {}}
                />
              </div>
            </AnimatedElement>
          </div>
        </TabsContent>
        <TabsContent value="knowledge">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedElement animation="fade-in">
              <div>
                <h3 className="text-xl font-bold mb-4">Safety Knowledge Center</h3>
                <p className="mb-6 text-muted-foreground">
                  Access comprehensive safety guides, self-defense techniques, legal resources, and emergency contacts - all in one place.
                </p>
                <div className="space-y-4">
                  <Card className="shadow-card">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                          <Shield size={16} />
                        </div>
                        <Badge>Self-Defense</Badge>
                      </div>
                      <CardTitle className="mt-2">Basic Self-Defense Techniques</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">
                        Learn fundamental self-defense moves that can help you escape dangerous situations.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Guide
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                          <BookOpen size={16} />
                        </div>
                        <Badge>Legal</Badge>
                      </div>
                      <CardTitle className="mt-2">Know Your Rights</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground">
                        Essential legal information about women's rights and protection laws in India.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Guide
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={0.2}>
              <div className="flex flex-col gap-4">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Emergency Helplines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="font-medium">Women's Helpline</span>
                        <span className="text-primary">1091</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Police</span>
                        <span className="text-primary">100</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Ambulance</span>
                        <span className="text-primary">102</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Emergency Disaster</span>
                        <span className="text-primary">108</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">National Commission for Women</span>
                        <span className="text-primary">011-26942369</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/knowledge">View All Contacts</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="shadow-card flex-1">
                  <CardHeader>
                    <CardTitle>Emergency SOS Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Configure your bracelet and app SOS triggers to ensure maximum protection.</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Triple-click Emergency</span>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Voice Trigger</span>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Silent Mode</span>
                        <Badge variant="outline">Disabled</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/settings">Configure Settings</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </AnimatedElement>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
