
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SafetyMap as SafetyMapComponent } from "@/components/maps/SafetyMap";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Users, 
  Moon, 
  Plus, 
  MapIcon,
  Navigation,
  Shield,
  Search
} from "lucide-react";

const SafetyMapPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Safety Map</h1>
            <p className="text-muted-foreground">
              Explore safe routes, community reports, and safety insights.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Shield className="mr-2 h-4 w-4" />
              My Safe Zones
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Report
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <CardTitle>Community Safety Map</CardTitle>
                <CardDescription>
                  View safety information and community reports
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[600px]">
                  <SafetyMapComponent
                    mapHeight="h-[600px]"
                    showFilters={true}
                    showLayers={true}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Route Finder</CardTitle>
                <CardDescription>
                  Find the safest route to your destination
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="start-route">Starting Point</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="start-route" placeholder="Enter starting location" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination-route">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="destination-route" placeholder="Enter destination" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time-route">Estimated Travel Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="time-route" type="time" className="pl-8" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Navigation className="mr-2 h-4 w-4" />
                  Find Safe Route
                </Button>
              </CardFooter>
            </Card>

            <Tabs defaultValue="reports">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="metrics">Safety Metrics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="reports" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Safety Reports</CardTitle>
                    <CardDescription>
                      Community-reported safety concerns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="p-1.5 rounded-full bg-danger/10 text-danger">
                          <AlertTriangle size={16} />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Street Harassment</p>
                            <Badge variant="outline">2h ago</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Hill Road, Bandra West</p>
                          <p className="text-sm">Verbal harassment incident reported</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex gap-3">
                        <div className="p-1.5 rounded-full bg-warning/10 text-warning">
                          <Moon size={16} />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Poor Lighting</p>
                            <Badge variant="outline">1d ago</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">SV Road, Andheri</p>
                          <p className="text-sm">Several street lights not working</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex gap-3">
                        <div className="p-1.5 rounded-full bg-secondary/10 text-secondary">
                          <Users size={16} />
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <p className="font-medium">Suspicious Activity</p>
                            <Badge variant="outline">3h ago</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Near Juhu Beach</p>
                          <p className="text-sm">Group gathering near parking area</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Reports
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="metrics" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Area Safety Score</CardTitle>
                    <CardDescription>
                      AI-generated safety metrics by area
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">Bandra West</p>
                          <Badge variant="success">Safe - 86/100</Badge>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-safe w-[86%]"></div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">Andheri East</p>
                          <Badge variant="warning">Caution - 72/100</Badge>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-warning w-[72%]"></div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">Dharavi</p>
                          <Badge variant="danger">Alert - 58/100</Badge>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-danger w-[58%]"></div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">Powai</p>
                          <Badge variant="success">Safe - 91/100</Badge>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-safe w-[91%]"></div>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium">Juhu</p>
                          <Badge variant="success">Safe - 88/100</Badge>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-safe w-[88%]"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Full Analysis
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SafetyMapPage;
