
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SafetyMap } from "@/components/maps/SafetyMap";
import { AnimatedElement } from "@/components/animations/AnimatedElement";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
        <AnimatedElement animation="fade-in" className="space-y-6">
          <Badge variant="secondary" className="mb-2 text-sm">Introducing Nirbhaya</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Safety at your <span className="text-primary">fingertips</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time protection with AI-powered safety tracking, SOS alerts, and community safety reports to keep you and your loved ones secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/dashboard">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/knowledge">
                Learn More
              </Link>
            </Button>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="scale-in" delay={0.3}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg -rotate-1 scale-[0.98] blur-xl"></div>
            <Card className="overflow-hidden border-2 shadow-xl gradient-card">
              <CardContent className="p-0">
                <div className="h-[360px]">
                  <SafetyMap 
                    mapHeight="h-[360px]" 
                    showFilters={false}
                    showLayers={false}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
