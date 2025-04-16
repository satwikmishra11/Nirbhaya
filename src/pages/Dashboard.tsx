
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCard, AlertCardActions } from "@/components/cards/AlertCard";
import { StatusCard } from "@/components/cards/StatusCard";
import { SafetyMap } from "@/components/maps/SafetyMap";
import { JourneyCard } from "@/components/journey/JourneyCard";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { AlertTriangle, Bell, MapPin, Clock, Calendar, Shield, Activity, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor SOS alerts, active journeys, and safety status in real-time.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to="/settings">Settings</Link>
            </Button>
            <Button>
              <Bell className="mr-2 h-4 w-4" />
              Manage Alerts
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatusCard 
            title="Active SOS Alerts" 
            value="1" 
            description="Requires immediate attention"
            icon={<AlertTriangle className="h-4 w-4" />}
            trend="up"
            trendValue="New alert 5 min ago"
            className="border-danger"
          />
          <StatusCard 
            title="Active Journeys" 
            value="3" 
            description="In progress right now"
            icon={<MapPin className="h-4 w-4" />}
            trend="neutral"
            trendValue="All proceeding normally"
          />
          <StatusCard 
            title="Safety Score" 
            value="84/100" 
            description="Based on recent activity and reports"
            icon={<Shield className="h-4 w-4" />}
            trend="down"
            trendValue="4 points lower this week"
          />
        </div>

        <Tabs defaultValue="sos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="sos">SOS Alerts</TabsTrigger>
            <TabsTrigger value="journeys">Active Journeys</TabsTrigger>
            <TabsTrigger value="safety">Safety Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sos">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="md:col-span-2 lg:col-span-1 space-y-6">
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

                <Card>
                  <CardHeader>
                    <CardTitle>Alert Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="p-1.5 rounded-full bg-danger/10 text-danger">
                          <Bell size={16} />
                        </div>
                        <div>
                          <p className="font-medium">SOS Triggered</p>
                          <p className="text-sm text-muted-foreground">10:45 PM</p>
                          <p className="text-sm">Bracelet emergency button pressed</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex gap-3">
                        <div className="p-1.5 rounded-full bg-primary/10 text-primary">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <p className="font-medium">Location Pinged</p>
                          <p className="text-sm text-muted-foreground">10:45 PM</p>
                          <p className="text-sm">Bandra West, Mumbai</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex gap-3">
                        <div className="p-1.5 rounded-full bg-secondary/10 text-secondary">
                          <Users size={16} />
                        </div>
                        <div>
                          <p className="font-medium">Contacts Notified</p>
                          <p className="text-sm text-muted-foreground">10:46 PM</p>
                          <p className="text-sm">3 emergency contacts</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Full Timeline</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="md:col-span-2 lg:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Real-Time Location</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[500px]">
                      <SafetyMap
                        mapHeight="h-[500px]"
                        showFilters={false}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="journeys">
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

          <TabsContent value="safety">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-danger" />
                          <p className="font-medium">Harassment</p>
                        </div>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-warning" />
                          <p className="font-medium">Poor Lighting</p>
                        </div>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-secondary" />
                          <p className="font-medium">Suspicious Activity</p>
                        </div>
                        <p className="text-sm text-muted-foreground">3 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View All Reports</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Safety Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          <p className="font-medium">Safety Score</p>
                        </div>
                        <p className="font-medium">84/100</p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-primary" />
                          <p className="font-medium">Reports This Week</p>
                        </div>
                        <p className="font-medium">12</p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <p className="font-medium">Safe Journeys</p>
                        </div>
                        <p className="font-medium">27</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Safety Map</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[600px]">
                      <SafetyMap
                        mapHeight="h-[600px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
