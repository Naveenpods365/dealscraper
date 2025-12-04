import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const MetricCard = ({ label, value, change, isPositive }: MetricCardProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className={cn(
        "flex items-center justify-center w-10 h-10 rounded-lg",
        isPositive ? "bg-success/10" : "bg-destructive/10"
      )}>
        {isPositive ? (
          <TrendingUp className="h-5 w-5 text-success" />
        ) : (
          <TrendingDown className="h-5 w-5 text-destructive" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-card-foreground">{value}</span>
          <span className={cn(
            "text-xs font-medium",
            isPositive ? "text-success" : "text-destructive"
          )}>
            {change}
          </span>
        </div>
      </div>
    </div>
  );
};
