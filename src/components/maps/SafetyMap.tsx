
import { useState, useEffect, useRef } from "react";
import { 
  MapPin, 
  AlertTriangle, 
  Moon, 
  Users, 
  Shield, 
  Info,
  Layers,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for the map
const mockSafetyReports = [
  { id: 1, lat: 19.076, lng: 72.877, type: "harassment", description: "Street harassment reported", timestamp: "2 hours ago" },
  { id: 2, lat: 19.071, lng: 72.875, type: "lighting", description: "Poor street lighting in this area", timestamp: "1 day ago" },
  { id: 3, lat: 19.082, lng: 72.870, type: "suspicious", description: "Suspicious activity noticed", timestamp: "3 hours ago" },
  { id: 4, lat: 19.074, lng: 72.882, type: "harassment", description: "Verbal harassment incident", timestamp: "5 hours ago" },
];

const mockSosAlerts = [
  { id: 1, lat: 19.078, lng: 72.880, user: "Priya S.", status: "active", time: "Now" },
];

interface SafetyMapProps {
  initialLat?: number;
  initialLng?: number;
  initialZoom?: number;
  showFilters?: boolean;
  showLayers?: boolean;
  mapHeight?: string;
  trackMode?: boolean;
}

export function SafetyMap({
  initialLat = 19.076,
  initialLng = 72.877,
  initialZoom = 14,
  showFilters = true,
  showLayers = true,
  mapHeight = "h-[500px]",
  trackMode = false,
}: SafetyMapProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>(["sos", "harassment", "lighting", "suspicious"]);
  const [activeLayers, setActiveLayers] = useState<string[]>(["safety", "standard"]);
  const [selectedReport, setSelectedReport] = useState<any>(null);

  // Toggle filter
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Toggle layer
  const toggleLayer = (layer: string) => {
    if (activeLayers.includes(layer)) {
      setActiveLayers(activeLayers.filter(l => l !== layer));
    } else {
      setActiveLayers([...activeLayers, layer]);
    }
  };

  // In a real implementation, we would use a map library like Mapbox or Google Maps
  // For now, we'll create a simple UI mockup
  return (
    <div className="relative w-full">
      <div className={`relative overflow-hidden rounded-lg border ${mapHeight}`}>
        {/* Map placeholder with gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-nirbhaya-200 via-gray-100 to-nirbhaya-100">
          {/* Simulated map content */}
          <div className="absolute inset-0 z-10">
            {/* Mock map pins for safety reports */}
            {mockSafetyReports.map(report => (
              activeFilters.includes(report.type) && (
                <div 
                  key={report.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ 
                    left: `${(report.lng - 72.86) * 1000 + 50}%`, 
                    top: `${(report.lat - 19.07) * 1000 + 50}%` 
                  }}
                  onClick={() => setSelectedReport(report)}
                >
                  {report.type === "harassment" && (
                    <div className="text-danger bg-danger/10 p-2 rounded-full">
                      <AlertTriangle size={16} />
                    </div>
                  )}
                  {report.type === "lighting" && (
                    <div className="text-warning bg-warning/10 p-2 rounded-full">
                      <Moon size={16} />
                    </div>
                  )}
                  {report.type === "suspicious" && (
                    <div className="text-secondary bg-secondary/10 p-2 rounded-full">
                      <Users size={16} />
                    </div>
                  )}
                </div>
              )
            ))}
            
            {/* SOS Alert pin */}
            {activeFilters.includes("sos") && mockSosAlerts.map(alert => (
              <div 
                key={alert.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pulse-alert"
                style={{ 
                  left: `${(alert.lng - 72.86) * 1000 + 50}%`, 
                  top: `${(alert.lat - 19.07) * 1000 + 50}%` 
                }}
                onClick={() => setSelectedReport({ ...alert, type: "sos", description: `SOS alert triggered by ${alert.user}` })}
              >
                <div className="text-white bg-danger p-2 rounded-full">
                  <MapPin size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* Safe zones overlay */}
          {activeLayers.includes("safety") && (
            <div className="absolute inset-0 z-0">
              {/* Green safe zone */}
              <div 
                className="absolute rounded-full bg-safe/20 border border-safe/30"
                style={{ 
                  width: '150px', 
                  height: '150px', 
                  left: '30%', 
                  top: '40%' 
                }}
              ></div>
              
              {/* Yellow caution zone */}
              <div 
                className="absolute rounded-full bg-warning/20 border border-warning/30"
                style={{ 
                  width: '180px', 
                  height: '180px', 
                  left: '60%', 
                  top: '20%' 
                }}
              ></div>
              
              {/* Red danger zone */}
              <div 
                className="absolute rounded-full bg-danger/20 border border-danger/30"
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  left: '70%', 
                  top: '60%' 
                }}
              ></div>
            </div>
          )}
        </div>
        
        {/* Map controls */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {showLayers && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm">
                  <Layers size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Map Layers</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => toggleLayer("standard")}>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-sm ${activeLayers.includes("standard") ? 'bg-primary' : 'bg-muted'}`}></div>
                      <span>Standard Map</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleLayer("satellite")}>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-sm ${activeLayers.includes("satellite") ? 'bg-primary' : 'bg-muted'}`}></div>
                      <span>Satellite</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toggleLayer("safety")}>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-sm ${activeLayers.includes("safety") ? 'bg-primary' : 'bg-muted'}`}></div>
                      <span>Safety Heatmap</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Filter controls */}
        {showFilters && (
          <div className="absolute bottom-4 left-4 z-20">
            <Card className="bg-background/80 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Badge 
                    variant={activeFilters.includes("sos") ? "danger" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => toggleFilter("sos")}
                  >
                    SOS Alerts
                  </Badge>
                  <Badge 
                    variant={activeFilters.includes("harassment") ? "destructive" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => toggleFilter("harassment")}
                  >
                    Harassment
                  </Badge>
                  <Badge 
                    variant={activeFilters.includes("lighting") ? "warning" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => toggleFilter("lighting")}
                  >
                    Poor Lighting
                  </Badge>
                  <Badge 
                    variant={activeFilters.includes("suspicious") ? "secondary" : "outline"} 
                    className="cursor-pointer"
                    onClick={() => toggleFilter("suspicious")}
                  >
                    Suspicious Activity
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tracking mode indicators */}
        {trackMode && (
          <div className="absolute top-4 left-4 z-20">
            <Card className="bg-background/80 backdrop-blur-sm border-primary">
              <CardContent className="p-4 flex items-center gap-2">
                <Badge variant="success">LIVE</Badge>
                <span className="text-sm font-medium">Tracking Priya's journey</span>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Selected report detail */}
        {selectedReport && (
          <div className="absolute bottom-4 right-4 z-20 max-w-xs">
            <Card className="bg-background/95 backdrop-blur-sm">
              <CardHeader className="p-4 pb-2 flex flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-lg">
                    {selectedReport.type === "sos" 
                      ? "SOS Alert" 
                      : selectedReport.type === "harassment" 
                        ? "Harassment Report"
                        : selectedReport.type === "lighting"
                          ? "Lighting Issue"
                          : "Suspicious Activity"}
                  </CardTitle>
                  <CardDescription>
                    {selectedReport.timestamp || selectedReport.time}
                  </CardDescription>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedReport(null)}
                >
                  <X size={16} />
                </Button>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm">{selectedReport.description}</p>
              </CardContent>
              {selectedReport.type === "sos" && (
                <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                  <Button variant="outline" size="sm">Call</Button>
                  <Button size="sm">Respond</Button>
                </CardFooter>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
