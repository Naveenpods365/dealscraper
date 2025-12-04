import { Package, Send, Tag, Clock } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { WeeklyActivityChart } from "@/components/dashboard/WeeklyActivityChart";
import { TopCategoriesSection } from "@/components/dashboard/TopCategoriesSection";
import { AffiliateLinksSection } from "@/components/dashboard/AffiliateLinksSection";
import { RecentDealsTable } from "@/components/dashboard/RecentDealsTable";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stats Row */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="animate-slide-up" style={{ animationDelay: "0ms" }}>
              <StatsCard
                title="Total Deals"
                value="2,847"
                change="+12% from last week"
                changeType="positive"
                icon={Package}
                iconColor="bg-primary/10 text-primary"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "50ms" }}>
              <StatsCard
                title="Deals Sent"
                value="1,234"
                change="+8% this week"
                changeType="positive"
                icon={Send}
                iconColor="bg-accent/10 text-accent"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "100ms" }}>
              <StatsCard
                title="Top Category"
                value="Electronics"
                change="43% engagement"
                changeType="neutral"
                icon={Tag}
                iconColor="bg-warning/10 text-warning"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "150ms" }}>
              <StatsCard
                title="Next Run"
                value="2h 15m"
                change="Auto-scheduled"
                changeType="neutral"
                icon={Clock}
                iconColor="bg-success/10 text-success"
              />
            </div>
          </section>

          {/* Metrics Row */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard label="Total Deals Sent" value="12,487" change="+15.3%" isPositive />
            <MetricCard label="Active Users" value="8,234" change="+8.7%" isPositive />
            <MetricCard label="Engagement Rate" value="67.8%" change="-2.3%" isPositive={false} />
            <MetricCard label="Avg. Discount" value="28.5%" change="+3.2%" isPositive />
          </section>

          {/* Chart & Affiliate Links */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <WeeklyActivityChart />
            <AffiliateLinksSection />
          </section>

          {/* Top Categories */}
          <section>
            <TopCategoriesSection />
          </section>

          {/* Recent Deals Table */}
          <section>
            <RecentDealsTable />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
