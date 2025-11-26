import "./globals.css";
import ToastProvider from "./components/ToastProvider";
import { getTheme,getFlashMessage } from "@/app/api-services/commonService";
import React from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const theme = await getTheme();
  const flashMessage = await getFlashMessage();
  return (
    <html lang="en" data-theme={theme || "light"}>
      <body>
        <div>
          {/* Navbar could go here */}  
          <p>{flashMessage}</p>
        </div>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
