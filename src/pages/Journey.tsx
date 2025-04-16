
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { JourneyCard } from "@/components/journey/JourneyCard";
import { SafetyMap } from "@/components/maps/SafetyMap";
import { Check, Clock, MapPin, Plus, Search, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Journey = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Journey Tracking</h1>
            <p className="text-muted-foreground">
              Monitor and track journeys in real-time for enhanced safety.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Clock className="mr-2 h-4 w-4" />
              History
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Journey
            </Button>
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full mb-8">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:inline-flex mb-6">
            <TabsTrigger value="active">Active (3)</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled (2)</TabsTrigger>
            <TabsTrigger value="completed">Completed (27)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                alerts={1}
                onTrack={() => {}}
                onSendCheckIn={() => {}}
                onCall={() => {}}
              />
              
              <JourneyCard
                userName="Sneha Patel"
                userInitials="SP"
                startLocation="Lower Parel, Mumbai"
                endLocation="Worli, Mumbai"
                startTime="9:30 PM"
                estimatedArrival="9:50 PM"
                status="active"
                progress={85}
                distance="3.5 km"
                duration="20 min"
                onTrack={() => {}}
                onSendCheckIn={() => {}}
                onCall={() => {}}
              />
              
              <JourneyCard
                userName="Meera Kapoor"
                userInitials="MK"
                startLocation="Goregaon, Mumbai"
                endLocation="Malad, Mumbai"
                startTime="10:15 PM"
                estimatedArrival="10:40 PM"
                status="active"
                progress={30}
                distance="5.1 km"
                duration="25 min"
                onTrack={() => {}}
                onSendCheckIn={() => {}}
                onCall={() => {}}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="scheduled">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <JourneyCard
                userName="Kavita Sharma"
                userInitials="KS"
                startLocation="Powai, Mumbai"
                endLocation="Vikhroli, Mumbai"
                startTime="Tomorrow, 9:00 AM"
                estimatedArrival="Tomorrow, 9:30 AM"
                status="scheduled"
                distance="7.3 km"
                duration="30 min"
                onTrack={() => {}}
                onSendCheckIn={() => {}}
                onCall={() => {}}
              />
              
              <JourneyCard
                userName="Anjali Desai"
                userInitials="AD"
                startLocation="Chembur, Mumbai"
                endLocation="Ghatkopar, Mumbai"
                startTime="Tomorrow, 6:00 PM"
                estimatedArrival="Tomorrow, 6:25 PM"
                status="scheduled"
                distance="4.8 km"
                duration="25 min"
                onTrack={() => {}}
                onSendCheckIn={() => {}}
                onCall={() => {}}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="flex justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search completed journeys..."
                  className="pl-8"
                />
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Completed Journeys</CardTitle>
                <CardDescription>Your recent journey history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Bandra to Andheri</p>
                        <p className="text-sm text-muted-foreground">Yesterday, 8:30 PM</p>
                      </div>
                    </div>
                    <Badge variant="success" className="flex items-center gap-1">
                      <Check size={12} /> Safe Arrival
                    </Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Office to Home</p>
                        <p className="text-sm text-muted-foreground">Yesterday, 6:15 PM</p>
                      </div>
                    </div>
                    <Badge variant="success" className="flex items-center gap-1">
                      <Check size={12} /> Safe Arrival
                    </Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Home to Office</p>
                        <p className="text-sm text-muted-foreground">Yesterday, 9:00 AM</p>
                      </div>
                    </div>
                    <Badge variant="success" className="flex items-center gap-1">
                      <Check size={12} /> Safe Arrival
                    </Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Mall to Home</p>
                        <p className="text-sm text-muted-foreground">2 days ago, 9:45 PM</p>
                      </div>
                    </div>
                    <Badge variant="success" className="flex items-center gap-1">
                      <Check size={12} /> Safe Arrival
                    </Badge>
                  </div>
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">PS</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">Friend's House to Home</p>
                        <p className="text-sm text-muted-foreground">3 days ago, 11:20 PM</p>
                      </div>
                    </div>
                    <Badge variant="success" className="flex items-center gap-1">
                      <Check size={12} /> Safe Arrival
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Journeys</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Journey Map</CardTitle>
                <CardDescription>
                  Select a journey to track on the map
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[500px]">
                  <SafetyMap
                    mapHeight="h-[500px]"
                    trackMode={true}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Track Journey</CardTitle>
                <CardDescription>
                  Create a new journey to be tracked
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="start">Starting Point</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="start" placeholder="Enter starting location" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="destination" placeholder="Enter destination" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="share">Share With</Label>
                  <div className="relative">
                    <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="share" placeholder="Select trusted contacts" className="pl-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Estimated Start Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="time" type="datetime-local" className="pl-8" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Start Journey</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Journey;
