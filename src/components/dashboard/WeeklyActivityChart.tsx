import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { day: "Mon", value: 1234 },
  { day: "Tue", value: 1567 },
  { day: "Wed", value: 1423 },
  { day: "Thu", value: 1789 },
  { day: "Fri", value: 2134 },
  { day: "Sat", value: 2456 },
  { day: "Sun", value: 1884 },
];

export const WeeklyActivityChart = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
      <h3 className="text-lg font-semibold text-card-foreground mb-6">Weekly Activity</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              width={40}
            />
            <Tooltip
              cursor={{ fill: "hsl(var(--muted))", radius: 8 }}
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                boxShadow: "var(--shadow-md)",
              }}
              labelStyle={{ color: "hsl(var(--card-foreground))", fontWeight: 600 }}
              itemStyle={{ color: "hsl(var(--primary))" }}
            />
            <Bar 
              dataKey="value" 
              radius={[6, 6, 0, 0]}
              maxBarSize={48}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={index === 5 ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.6)"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
