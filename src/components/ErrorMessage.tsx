import React from "react";
import { AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ErrorMessageProps {
  title?: string;
  message?: string;
}

const ErrorMessage = ({
  title = "No PRD Provided",
  message = "Unable to generate flow. Please provide a PRD to continue.",
}: ErrorMessageProps) => {
  return (
    <div className="min-h-[400px] w-full max-w-[600px] flex items-center justify-center bg-background">
      <Card className="w-full p-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="text-muted-foreground">{message}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ErrorMessage;
