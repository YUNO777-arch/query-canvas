import { User, Bell, Shield, Palette, Database } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const settingsSections = [
  {
    icon: User,
    title: "Profile",
    description: "Manage your account details and preferences.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Configure how you receive alerts and updates.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Update your password and security settings.",
  },
  {
    icon: Database,
    title: "Data Sources",
    description: "Connect and manage your database connections.",
  },
];

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="animate-slide-in">
          <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and application preferences.
          </p>
        </div>

        {/* Quick Settings */}
        <Card className="shadow-elevated border-border/50 animate-slide-in" style={{ animationDelay: "50ms" }}>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Appearance</CardTitle>
            </div>
            <CardDescription>Customize how the dashboard looks.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode" className="font-medium">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Enable dark theme for the dashboard.
                </p>
              </div>
              <Switch id="dark-mode" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="compact" className="font-medium">Compact Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Use a more compact layout.
                </p>
              </div>
              <Switch id="compact" />
            </div>
          </CardContent>
        </Card>

        {/* Settings Categories */}
        <div className="grid gap-3">
          {settingsSections.map((section, index) => (
            <Card
              key={section.title}
              className="shadow-elevated border-border/50 hover:shadow-lg transition-shadow cursor-pointer animate-slide-in"
              style={{ animationDelay: `${(index + 1) * 50}ms` }}
            >
              <CardContent className="py-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{section.title}</h3>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
