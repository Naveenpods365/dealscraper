import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type DealStatus = "Sent" | "Pending" | "Failed";

interface Deal {
  id: number;
  product: string;
  retailer: string;
  discount: string;
  coupon: string;
  status: DealStatus;
}

const deals: Deal[] = [
  { id: 1, product: "Sony WH-1000XM5", retailer: "Amazon.ca", discount: "35%", coupon: "SAVE35", status: "Sent" },
  { id: 2, product: "Organic Coffee Beans", retailer: "Costco.ca", discount: "25%", coupon: "COFFEE25", status: "Pending" },
  { id: 3, product: "Skincare Set", retailer: "Walmart.ca", discount: "40%", coupon: "BEAUTY40", status: "Sent" },
  { id: 4, product: "LEGO Millennium Falcon", retailer: "BestBuy.ca", discount: "30%", coupon: "TOY30", status: "Sent" },
  { id: 5, product: "Smart Watch Series 8", retailer: "Amazon.ca", discount: "20%", coupon: "WATCH20", status: "Failed" },
];

const tabs = ["All", "Sent", "Pending", "Failed"] as const;

export const RecentDealsTable = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("All");

  const filteredDeals = activeTab === "All" 
    ? deals 
    : deals.filter(deal => deal.status === activeTab);

  const getStatusStyles = (status: DealStatus) => {
    switch (status) {
      case "Sent":
        return "bg-success/10 text-success border-success/20";
      case "Pending":
        return "bg-warning/10 text-warning border-warning/20";
      case "Failed":
        return "bg-destructive/10 text-destructive border-destructive/20";
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-card border border-border/50">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-card-foreground">Recent Deals</h3>
        <div className="flex gap-2 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Product</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Retailer</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Discount</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Coupon</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredDeals.map((deal, index) => (
              <tr 
                key={deal.id}
                className="hover:bg-muted/30 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-6 py-4 text-sm font-medium text-card-foreground">{deal.product}</td>
                <td className="px-6 py-4 text-sm text-muted-foreground">{deal.retailer}</td>
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-primary">{deal.discount}</span>
                </td>
                <td className="px-6 py-4">
                  <code className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground">{deal.coupon}</code>
                </td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className={cn("text-xs", getStatusStyles(deal.status))}>
                    {deal.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
