"use client";
import { useEffect, useState } from "react";

export default function FlashMessage({ flashMessage }: { flashMessage: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!flashMessage) return;

    // Reset visibility every time flashMessage changes
    setVisible(true);

    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [flashMessage]);

  if (!visible) return null;

  return (
    <p className="fixed top-4 right-6 z-50 bg-primary text-primary-content px-4 py-2 rounded shadow animate-fadeInOut">
        {flashMessage}
    </p>
  );
}
