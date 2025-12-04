import { Plus, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const AffiliateLinksSection = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Affiliate Links</h3>
          <p className="text-sm text-muted-foreground">Upload links and track performance</p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <Input 
          placeholder="Paste your affiliate link..." 
          className="flex-1"
        />
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Link
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center py-10 text-center border-2 border-dashed border-border rounded-lg bg-muted/30">
        <div className="p-4 bg-secondary rounded-full mb-4">
          <Link2 className="h-6 w-6 text-secondary-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">No affiliate links yet. Add your first link above!</p>
      </div>
    </div>
  );
};
