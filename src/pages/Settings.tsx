
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bell, Shield, Lock, Volume2, Smartphone, Clock } from "lucide-react";

const Settings = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-8">Settings</h1>
          
          <Tabs defaultValue="notifications" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="bracelet">Bracelet</TabsTrigger>
            </TabsList>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Configure how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        <Label htmlFor="sos-alerts" className="font-medium">SOS Alerts</Label>
                      </div>
                      <Switch id="sos-alerts" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Receive notifications when any of your trusted contacts trigger an SOS alert
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        <Label htmlFor="journey-notifications" className="font-medium">Journey Updates</Label>
                      </div>
                      <Switch id="journey-notifications" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Receive notifications about the status of journeys you're monitoring
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        <Label htmlFor="safety-reports" className="font-medium">Safety Reports</Label>
                      </div>
                      <Switch id="safety-reports" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Receive notifications about safety reports near your saved locations
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        <Label htmlFor="red-zone-alerts" className="font-medium">Red Zone Alerts</Label>
                      </div>
                      <Switch id="red-zone-alerts" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Get alerted when you or your contacts enter an area with low safety ratings
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>
                    Manage your account security and privacy options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="h-4 w-4 text-primary" />
                        <Label htmlFor="two-factor" className="font-medium">Two-Factor Authentication</Label>
                      </div>
                      <Switch id="two-factor" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <Label htmlFor="location-privacy" className="font-medium">Location Privacy</Label>
                      </div>
                      <Switch id="location-privacy" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Only share your location with trusted contacts during active journeys or emergencies
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <Label htmlFor="auto-delete" className="font-medium">Auto-Delete Journey Data</Label>
                      </div>
                      <Switch id="auto-delete" />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Automatically delete journey data after 30 days
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bracelet">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Bracelet Settings</CardTitle>
                      <CardDescription>
                        Configure your IoT safety bracelet
                      </CardDescription>
                    </div>
                    <Badge variant="success" className="flex items-center gap-1">
                      Connected
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-primary" />
                        <Label htmlFor="voice-command" className="font-medium">Voice Command Activation</Label>
                      </div>
                      <Switch id="voice-command" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Activate SOS with voice commands like "Help me" or "Emergency"
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-primary" />
                        <Label htmlFor="triple-tap" className="font-medium">Triple-Tap Emergency</Label>
                      </div>
                      <Switch id="triple-tap" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Quickly activate SOS by tapping the bracelet button three times
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-primary" />
                        <Label htmlFor="silent-mode" className="font-medium">Silent Mode</Label>
                      </div>
                      <Switch id="silent-mode" />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Trigger SOS silently without any sound or vibration
                    </div>
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-primary" />
                        <Label htmlFor="battery-alerts" className="font-medium">Battery Alerts</Label>
                      </div>
                      <Switch id="battery-alerts" defaultChecked />
                    </div>
                    <div className="pl-6 text-sm text-muted-foreground">
                      Get notified when your bracelet battery is running low
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full">Check for Firmware Updates</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
