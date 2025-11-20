// app/dashboard/layout.tsx
import React from "react";
import BottomNav from "../components/BottomNav";
export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
