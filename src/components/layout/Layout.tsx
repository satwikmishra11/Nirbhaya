
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { AnimatedElement } from "@/components/animations/AnimatedElement";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatedElement animation="fade-in" duration={0.4}>
          {children}
        </AnimatedElement>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ for women's safety. © {new Date().getFullYear()} Nirbhaya
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors duration-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
