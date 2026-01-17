import { Copy, Check, FileJson } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultsDisplayProps {
  results: object | null;
  isLoading: boolean;
}

export function ResultsDisplay({ results, isLoading }: ResultsDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (results) {
      navigator.clipboard.writeText(JSON.stringify(results, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <Card className="shadow-elevated border-border/50 animate-slide-in">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <FileJson className="h-5 w-5 text-primary" />
            Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!results) {
    return null;
  }

  return (
    <Card className="shadow-elevated border-border/50 animate-slide-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <FileJson className="h-5 w-5 text-primary" />
          Results
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="gap-2">
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative rounded-lg bg-surface-sunken border border-border overflow-hidden">
          <pre className="p-4 overflow-x-auto text-sm">
            <code className="text-foreground font-mono">
              {JSON.stringify(results, null, 2)
                .split("\n")
                .map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    <span className="select-none text-muted-foreground/50 mr-4 text-xs">
                      {String(i + 1).padStart(2, " ")}
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: syntaxHighlight(line),
                      }}
                    />
                  </div>
                ))}
            </code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}

function syntaxHighlight(line: string): string {
  return line
    .replace(/"([^"]+)":/g, '<span class="text-primary">"$1"</span>:')
    .replace(/: "([^"]+)"/g, ': <span class="text-green-600 dark:text-green-400">"$1"</span>')
    .replace(/: (\d+)/g, ': <span class="text-amber-600 dark:text-amber-400">$1</span>')
    .replace(/: (true|false)/g, ': <span class="text-blue-600 dark:text-blue-400">$1</span>')
    .replace(/: (null)/g, ': <span class="text-muted-foreground">$1</span>');
}
