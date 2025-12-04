import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DealCardProps {
  title: string;
  discount: string;
  category: string;
  retailer: string;
  imageUrl?: string;
}

export const DealCard = ({ title, discount, category, retailer, imageUrl }: DealCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group">
      <div className="relative h-40 bg-gradient-to-br from-secondary to-muted overflow-hidden">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold">
          {discount} OFF
        </Badge>
        <Badge variant="secondary" className="absolute top-3 right-3">
          {category}
        </Badge>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-xs text-muted-foreground font-medium">{retailer}</p>
        <h4 className="font-semibold text-card-foreground line-clamp-2 leading-tight">{title}</h4>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          <span>Preview Message</span>
          <ExternalLink className="ml-2 h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
};
