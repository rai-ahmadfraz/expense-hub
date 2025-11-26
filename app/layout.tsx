import "./globals.css";
import ToastProvider from "./components/ToastProvider";
import { getTheme } from "@/app/api-services/commonService";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = await getTheme();

  return (
    <html lang="en" data-theme={theme || "light"}>
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
