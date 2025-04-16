
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nirbhaya
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              to="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              to="/journey"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Journey Tracking
            </Link>
            <Link
              to="/safety-map"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Safety Map
            </Link>
            <Link
              to="/knowledge"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Knowledge Center
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-destructive text-destructive-foreground text-xs">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex flex-col gap-2 p-2">
                <div className="rounded-md p-2 hover:bg-accent cursor-pointer">
                  <div className="font-medium">SOS Alert</div>
                  <div className="text-sm text-muted-foreground">
                    Satwik entered a red zone at 9:42 PM
                  </div>
                </div>
                <div className="rounded-md p-2 hover:bg-accent cursor-pointer">
                  <div className="font-medium">New Report</div>
                  <div className="text-sm text-muted-foreground">
                    Poor street lighting reported near your saved route
                  </div>
                </div>
                <div className="rounded-md p-2 hover:bg-accent cursor-pointer">
                  <div className="font-medium">Journey Update</div>
                  <div className="text-sm text-muted-foreground">
                    Priya has safely reached her destination
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground">MS</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/journey"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Journey Tracking
            </Link>
            <Link
              to="/safety-map"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Safety Map
            </Link>
            <Link
              to="/knowledge"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Knowledge Center
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
