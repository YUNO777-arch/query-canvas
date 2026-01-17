import { TrendingUp, TrendingDown, Users, Database, Clock, Zap } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const queryData = [
  { day: "Mon", queries: 45 },
  { day: "Tue", queries: 52 },
  { day: "Wed", queries: 78 },
  { day: "Thu", queries: 65 },
  { day: "Fri", queries: 124 },
  { day: "Sat", queries: 38 },
  { day: "Sun", queries: 42 },
];

const responseTimeData = [
  { hour: "00:00", time: 85 },
  { hour: "04:00", time: 72 },
  { hour: "08:00", time: 120 },
  { hour: "12:00", time: 145 },
  { hour: "16:00", time: 110 },
  { hour: "20:00", time: 95 },
];

const stats = [
  {
    title: "Total Queries",
    value: "1,284",
    change: "+12.5%",
    trend: "up",
    icon: Database,
  },
  {
    title: "Active Users",
    value: "48",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Avg Response Time",
    value: "89ms",
    change: "-15.3%",
    trend: "down",
    icon: Clock,
  },
  {
    title: "Success Rate",
    value: "99.2%",
    change: "+0.5%",
    trend: "up",
    icon: Zap,
  },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="animate-slide-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">Analytics</h1>
          <p className="text-muted-foreground">
            Monitor your query performance and usage patterns.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={stat.title}
              className="shadow-elevated border-border/50 animate-slide-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-green-600"
                  }`}>
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-elevated border-border/50 animate-slide-in" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Queries This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={queryData}>
                    <defs>
                      <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="day" className="text-muted-foreground" fontSize={12} />
                    <YAxis className="text-muted-foreground" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="queries"
                      stroke="hsl(239, 84%, 67%)"
                      fillOpacity={1}
                      fill="url(#colorQueries)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elevated border-border/50 animate-slide-in" style={{ animationDelay: "250ms" }}>
            <CardHeader>
              <CardTitle className="text-lg">Response Time (ms)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={responseTimeData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis dataKey="hour" className="text-muted-foreground" fontSize={12} />
                    <YAxis className="text-muted-foreground" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar
                      dataKey="time"
                      fill="hsl(239, 84%, 67%)"
                      radius={[4, 4, 0, 0]}
                      opacity={0.9}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
