import React from "react";
import Navbar from "./navigation-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}