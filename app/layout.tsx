
import "./globals.css";
import ToastProvider from "./components/ToastProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body>
        {children}
        <ToastProvider></ToastProvider>
      </body>
    </html>
  );
}
