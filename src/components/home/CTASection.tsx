
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedElement } from "@/components/animations/AnimatedElement";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-12 md:py-16">
      <AnimatedElement animation="scale-in">
        <Card className="bg-primary/5 border-none">
          <CardContent className="p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Start Your Safety Journey Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of women who have taken control of their safety with Nirbhaya. Set up your account, add trusted contacts, and experience peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/knowledge">
                    Browse Resources
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedElement>
    </section>
  );
}
