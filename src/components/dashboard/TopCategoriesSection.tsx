import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DealCard } from "./DealCard";

const topDeals = [
  {
    title: "Sony WH-1000XM5 Wireless Headphones",
    discount: "35%",
    category: "Electronics",
    retailer: "Amazon.ca",
  },
  {
    title: "Organic Coffee Beans Premium Blend",
    discount: "25%",
    category: "Food & Beverage",
    retailer: "Costco.ca",
  },
  {
    title: "Luxury Skincare Set with Vitamin C",
    discount: "40%",
    category: "Beauty",
    retailer: "Walmart.ca",
  },
  {
    title: "LEGO Star Wars Millennium Falcon",
    discount: "30%",
    category: "Toys",
    retailer: "BestBuy.ca",
  },
];

export const TopCategoriesSection = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Top Categories</h3>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 gap-1">
          View All
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topDeals.map((deal, index) => (
          <div
            key={index}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <DealCard {...deal} />
          </div>
        ))}
      </div>
    </div>
  );
};
