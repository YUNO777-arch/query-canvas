import { useState, useRef, useEffect } from "react";
import { Play, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isLoading: boolean;
}

export function QueryInput({ onSubmit, isLoading }: QueryInputProps) {
  const [query, setQuery] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-expand textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(120, textarea.scrollHeight)}px`;
    }
  }, [query]);

  const handleSubmit = () => {
    if (query.trim() && !isLoading) {
      onSubmit(query);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      handleSubmit();
    }
  };

  return (
    <Card className="shadow-elevated border-border/50 animate-slide-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold">Query Studio</CardTitle>
        <CardDescription>
          Describe your query in natural language and we'll process it for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="query" className="text-sm font-medium">
            Describe your query
          </Label>
          <textarea
            ref={textareaRef}
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g., Show me all users who signed up in the last 30 days and have made at least one purchase..."
            className="w-full min-h-[120px] px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none transition-all duration-200"
            disabled={isLoading}
          />
          <p className="text-xs text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">⌘</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">Enter</kbd> to submit
          </p>
        </div>

        <div className="flex justify-end">
          <Button
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={!query.trim() || isLoading}
            className="min-w-[160px]"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Play className="h-4 w-4" />
                Process Query
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
