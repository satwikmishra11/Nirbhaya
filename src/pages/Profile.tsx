
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, User, Phone, MapPin, Bell } from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-8">My Profile</h1>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">Priya Singh</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Badge className="bg-safe">Verified</Badge>
                      <span>Member since December 2023</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value="Priya Singh" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value="priya.singh@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" value="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency-contact">Emergency Contact</Label>
                    <Input id="emergency-contact" value="+91 98765 12345" />
                  </div>
                </div>
                <Separator />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="home-address">Home Address</Label>
                    <Input id="home-address" value="123 Rajiv Gandhi Nagar, Andheri East, Mumbai" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="work-address">Work Address</Label>
                    <Input id="work-address" value="Tech Park, Bandra Kurla Complex, Mumbai" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Trusted Contacts</CardTitle>
                <CardDescription>These people will be notified in case of an emergency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">RK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Rahul Kumar</p>
                      <p className="text-sm text-muted-foreground">+91 98765 67890</p>
                    </div>
                  </div>
                  <Badge>Primary Contact</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">AS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Anjali Singh</p>
                      <p className="text-sm text-muted-foreground">+91 87654 32109</p>
                    </div>
                  </div>
                  <Badge variant="outline">Secondary</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Suresh Mehta</p>
                      <p className="text-sm text-muted-foreground">+91 76543 21098</p>
                    </div>
                  </div>
                  <Badge variant="outline">Secondary</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Add New Contact</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
