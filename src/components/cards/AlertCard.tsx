
import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type AlertLevel = "critical" | "warning" | "info";

interface AlertCardProps {
  level: AlertLevel;
  title: string;
  description: string;
  timestamp: string;
  userName: string;
  userAvatar?: string;
  userInitials: string;
  actions?: ReactNode;
  className?: string;
  isPulsing?: boolean;
}

export function AlertCard({
  level,
  title,
  description,
  timestamp,
  userName,
  userAvatar,
  userInitials,
  actions,
  className,
  isPulsing = false,
}: AlertCardProps) {
  return (
    <Card 
      className={cn(
        "shadow-card overflow-hidden border-l-4",
        isPulsing && "pulse-alert",
        level === "critical" && "border-l-danger",
        level === "warning" && "border-l-warning",
        level === "info" && "border-l-primary",
        className
      )}
    >
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userAvatar} />
          <AvatarFallback className={cn(
            level === "critical" && "bg-danger/10 text-danger",
            level === "warning" && "bg-warning/10 text-warning",
            level === "info" && "bg-primary/10 text-primary",
          )}>
            {userInitials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Badge variant={
              level === "critical" ? "danger" : 
              level === "warning" ? "warning" : 
              "default"
            }>
              {level === "critical" ? "SOS Alert" : 
               level === "warning" ? "Warning" : 
               "Info"}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            {userName} • {timestamp}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p>{description}</p>
      </CardContent>
      {actions && (
        <CardFooter className="flex justify-end gap-2 p-4 pt-0">
          {actions}
        </CardFooter>
      )}
    </Card>
  );
}

export function AlertCardActions() {
  return (
    <>
      <Button variant="outline" size="sm">Dismiss</Button>
      <Button size="sm">Respond</Button>
    </>
  );
}
