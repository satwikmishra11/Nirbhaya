
import { ReactNode } from "react";
import { BookOpen, BookText, FileText, Link2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ResourceType = "guide" | "article" | "video" | "contact" | "legal";

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  category?: string;
  icon?: ReactNode;
  ctaText?: string;
  onAction?: () => void;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  type,
  category,
  icon,
  ctaText = "View Resource",
  onAction,
  className,
}: ResourceCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "guide":
        return icon || <BookText className="h-5 w-5" />;
      case "article":
        return icon || <FileText className="h-5 w-5" />;
      case "video":
        return icon || <BookOpen className="h-5 w-5" />;
      case "contact":
        return icon || <Link2 className="h-5 w-5" />;
      case "legal":
        return icon || <FileText className="h-5 w-5" />;
      default:
        return icon || <FileText className="h-5 w-5" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "guide":
        return "Guide";
      case "article":
        return "Article";
      case "video":
        return "Video";
      case "contact":
        return "Contact";
      case "legal":
        return "Legal";
      default:
        return "Resource";
    }
  };

  return (
    <Card className={cn("shadow-card overflow-hidden h-full flex flex-col", className)}>
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-md bg-primary/10 text-primary">
              {getTypeIcon()}
            </div>
            {category && <Badge>{category}</Badge>}
          </div>
          <Badge variant="outline">{getTypeLabel()}</Badge>
        </div>
        <CardTitle className="mt-2 text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-0">
        <div className="text-sm text-muted-foreground">
          {/* Additional content could go here */}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          variant={type === "guide" ? "default" : "outline"}
          onClick={onAction}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}
