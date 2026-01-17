import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { QueryInput } from "@/components/query/QueryInput";
import { ResultsDisplay } from "@/components/query/ResultsDisplay";

// Mock data for demonstration
const mockResults = {
  query: "Users signed up in last 30 days with purchases",
  execution_time: "124ms",
  rows_returned: 3,
  data: [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      signup_date: "2026-01-05",
      total_purchases: 5,
      total_spent: 249.99,
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      signup_date: "2026-01-10",
      total_purchases: 3,
      total_spent: 149.50,
    },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol@example.com",
      signup_date: "2026-01-15",
      total_purchases: 7,
      total_spent: 512.00,
    },
  ],
};

export default function QueryStudio() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<object | null>(null);

  const handleQuerySubmit = async (query: string) => {
    setIsLoading(true);
    setResults(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setResults({
      ...mockResults,
      query,
    });
    setIsLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <QueryInput onSubmit={handleQuerySubmit} isLoading={isLoading} />
        <ResultsDisplay results={results} isLoading={isLoading} />
      </div>
    </DashboardLayout>
  );
}
