import { Clock, Play, Trash2 } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const historyItems = [
  {
    id: 1,
    query: "Show all users who signed up in the last 30 days",
    timestamp: "2 hours ago",
    duration: "124ms",
    rows: 42,
  },
  {
    id: 2,
    query: "Get total revenue by product category for Q4 2025",
    timestamp: "5 hours ago",
    duration: "89ms",
    rows: 8,
  },
  {
    id: 3,
    query: "Find customers with more than 5 orders",
    timestamp: "Yesterday",
    duration: "156ms",
    rows: 127,
  },
  {
    id: 4,
    query: "Calculate average order value by region",
    timestamp: "2 days ago",
    duration: "203ms",
    rows: 12,
  },
];

export default function History() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="animate-slide-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">Query History</h1>
          <p className="text-muted-foreground">
            View and re-run your previous queries.
          </p>
        </div>

        <div className="space-y-3">
          {historyItems.map((item, index) => (
            <Card
              key={item.id}
              className="shadow-elevated border-border/50 hover:shadow-lg transition-shadow animate-slide-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate mb-1">
                      {item.query}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {item.timestamp}
                      </span>
                      <span>{item.duration}</span>
                      <span>{item.rows} rows</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
