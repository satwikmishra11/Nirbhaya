
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/animations/AnimatedElement";
import { Bell, Navigation, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="text-center mb-12">
        <AnimatedElement animation="fade-in">
          <h2 className="text-3xl font-bold tracking-tight">
            Comprehensive Safety Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our integrated safety ecosystem designed to protect and empower.
          </p>
        </AnimatedElement>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedElement animation="fade-in" delay={0.1}>
          <Card className="shadow-card">
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bell className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="mt-4">SOS Alerts</CardTitle>
              <CardDescription>
                Instant emergency alerts to trusted contacts with real-time location tracking.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link to="/dashboard">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </AnimatedElement>

        <AnimatedElement animation="fade-in" delay={0.2}>
          <Card className="shadow-card">
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Navigation className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="mt-4">Journey Tracking</CardTitle>
              <CardDescription>
                Share your journey with trusted contacts who can monitor your progress in real-time.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link to="/journey">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </AnimatedElement>

        <AnimatedElement animation="fade-in" delay={0.3}>
          <Card className="shadow-card">
            <CardHeader>
              <div className="p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="mt-4">Safety Map</CardTitle>
              <CardDescription>
                AI-powered route recommendations and community safety reports for informed decisions.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link to="/safety-map">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
}
