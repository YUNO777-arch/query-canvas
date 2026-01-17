import { ChevronRight, Bell, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/query": "Query Studio",
  "/history": "History",
  "/analytics": "Analytics",
  "/settings": "Settings",
};

export function Header() {
  const location = useLocation();
  const currentRoute = routeNames[location.pathname] || "Dashboard";

  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Dashboard</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
        <span className="font-medium text-foreground">{currentRoute}</span>
      </nav>

      {/* Right side actions */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 px-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                  R
                </AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline text-sm font-medium">Ramesh</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
