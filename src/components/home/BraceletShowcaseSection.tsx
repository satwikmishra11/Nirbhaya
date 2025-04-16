
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/animations/AnimatedElement";
import BraceletModel from "@/components/3d/BraceletModel";
import { Shield, Bell, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function BraceletShowcaseSection() {
  return (
    <section className="py-12 md:py-20 bg-primary/5 rounded-3xl my-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <AnimatedElement animation="fade-in" className="order-2 md:order-1">
          <div className="space-y-6 px-6">
            <Badge variant="secondary" className="mb-2 text-sm">Smart Protection</Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              The Nirbhaya Safety Bracelet
            </h2>
            <p className="text-lg text-muted-foreground">
              Our IoT-enabled bracelet connects seamlessly with the Nirbhaya app, providing instant SOS alerts with a single press or voice command.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                  <Shield size={16} />
                </div>
                <span>Discreet emergency triggering</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                  <Bell size={16} />
                </div>
                <span>Voice-activated SOS</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                  <MapPin size={16} />
                </div>
                <span>Real-time location tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="p-1 rounded-full bg-primary/10 text-primary mt-1">
                  <Clock size={16} />
                </div>
                <span>Long-lasting battery</span>
              </li>
            </ul>
            <Button className="mt-4" asChild>
              <Link to="/knowledge">Learn More</Link>
            </Button>
          </div>
        </AnimatedElement>
        <AnimatedElement animation="scale-in" delay={0.2} className="order-1 md:order-2">
          <div className="flex justify-center items-center">
            <BraceletModel height="400px" width="100%" />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
