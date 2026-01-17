import { ArrowRight, Database, History, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Database,
    title: "Query Studio",
    description: "Write natural language queries and get instant results.",
    href: "/query",
  },
  {
    icon: History,
    title: "Query History",
    description: "Access and re-run your previous queries anytime.",
    href: "/history",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Visualize your data with interactive charts and insights.",
    href: "/analytics",
  },
];

const stats = [
  { label: "Queries Today", value: "124" },
  { label: "Success Rate", value: "99.2%" },
];

export default function Index() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="animate-slide-in">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Welcome back</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Good morning, John
          </h1>
          <p className="text-muted-foreground text-lg">
            Your data platform is ready. Start querying or explore your analytics.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-in" style={{ animationDelay: "100ms" }}>
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-elevated border-border/50">
              <CardContent className="pt-6">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="space-y-4 animate-slide-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group shadow-elevated border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <Link to={feature.href} className="block">
                  <CardHeader>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {feature.title}
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="gradient-primary text-primary-foreground border-0 shadow-glow animate-slide-in" style={{ animationDelay: "300ms" }}>
          <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Ready to get started?</h3>
              <p className="text-primary-foreground/80">
                Open Query Studio and describe what you're looking for.
              </p>
            </div>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/query">
                Open Query Studio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
