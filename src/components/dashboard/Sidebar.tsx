import { 
  LayoutDashboard, 
  TrendingUp, 
  Package, 
  Link2, 
  Settings, 
  Bell,
  LogOut
} from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}

const NavItem = ({ icon, label, active, badge }: NavItemProps) => (
  <button
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
      active
        ? "bg-sidebar-accent text-sidebar-primary"
        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
    )}
  >
    {icon}
    <span>{label}</span>
    {badge && (
      <span className="ml-auto bg-sidebar-primary text-sidebar-primary-foreground text-xs px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </button>
);

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <img src={logo} alt="iJustPaid" className="h-12 w-auto" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          active
        />
        <NavItem
          icon={<TrendingUp size={20} />}
          label="Analytics"
        />
        <NavItem
          icon={<Package size={20} />}
          label="Deals"
          badge={12}
        />
        <NavItem
          icon={<Link2 size={20} />}
          label="Affiliate Links"
        />
        <NavItem
          icon={<Bell size={20} />}
          label="Notifications"
          badge={3}
        />
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
        />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <NavItem
          icon={<LogOut size={20} />}
          label="Sign Out"
        />
      </div>
    </aside>
  );
};
