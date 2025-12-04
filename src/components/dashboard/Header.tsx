import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Welcome Text */}
        <div>
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Here's your deals overview.</p>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search deals..."
              className="pl-10 w-64 bg-background border-border focus:ring-primary"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full bg-secondary">
            <User className="h-5 w-5 text-secondary-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
};
