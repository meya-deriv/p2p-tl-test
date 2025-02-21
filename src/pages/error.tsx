import React from "react";
import ErrorMessage from "../components/ErrorMessage";

export default function ErrorPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <ErrorMessage />
    </div>
  );
}
