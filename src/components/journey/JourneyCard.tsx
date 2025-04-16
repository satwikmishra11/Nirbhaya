
import { BellRing, Calendar, Clock, MapPin, MoreVertical, Navigation, Phone, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

type JourneyStatus = "active" | "completed" | "paused" | "scheduled";

interface JourneyCardProps {
  userName: string;
  userInitials: string;
  userAvatar?: string;
  startLocation: string;
  endLocation: string;
  startTime: string;
  estimatedArrival: string;
  status: JourneyStatus;
  progress?: number;
  distance?: string;
  duration?: string;
  alerts?: number;
  onTrack?: () => void;
  onSendCheckIn?: () => void;
  onCall?: () => void;
}

export function JourneyCard({
  userName,
  userInitials,
  userAvatar,
  startLocation,
  endLocation,
  startTime,
  estimatedArrival,
  status,
  progress = 0,
  distance,
  duration,
  alerts = 0,
  onTrack,
  onSendCheckIn,
  onCall,
}: JourneyCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "active":
        return <Badge variant="success">Active</Badge>;
      case "completed":
        return <Badge variant="secondary">Completed</Badge>;
      case "paused":
        return <Badge variant="warning">Paused</Badge>;
      case "scheduled":
        return <Badge>Scheduled</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="shadow-card overflow-hidden border">
      <CardHeader className="p-4 pb-2 flex flex-row justify-between items-start">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={userAvatar} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {userInitials}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{userName}</CardTitle>
            <div className="flex items-center gap-2 mt-1">
              {getStatusBadge()}
              {alerts > 0 && (
                <Badge variant="danger" className="flex items-center gap-1">
                  <BellRing size={12} /> {alerts} {alerts === 1 ? 'Alert' : 'Alerts'}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onTrack}>
              <Navigation className="mr-2 h-4 w-4" />
              <span>Track Journey</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onSendCheckIn}>
              <BellRing className="mr-2 h-4 w-4" />
              <span>Send Check-in</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onCall}>
              <Phone className="mr-2 h-4 w-4" />
              <span>Call</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground flex items-center">
                <Clock size={12} className="mr-1" /> Started At
              </div>
              <div className="font-medium">{startTime}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground flex items-center">
                <Calendar size={12} className="mr-1" /> Est. Arrival
              </div>
              <div className="font-medium">{estimatedArrival}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary">
                <MapPin size={16} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">From</div>
                <div className="font-medium">{startLocation}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary">
                <MapPin size={16} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted-foreground">To</div>
                <div className="font-medium">{endLocation}</div>
              </div>
            </div>
          </div>

          {status === "active" && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          {(distance || duration) && (
            <div className="grid grid-cols-2 gap-4 mt-2">
              {distance && (
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Distance</div>
                  <div className="font-medium">{distance}</div>
                </div>
              )}
              {duration && (
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">Duration</div>
                  <div className="font-medium">{duration}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" onClick={onSendCheckIn}>
          Send Check-in
        </Button>
        <Button size="sm" className="flex-1" onClick={onTrack}>
          Track
        </Button>
      </CardFooter>
    </Card>
  );
}
