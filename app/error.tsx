"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { removeToken } from "./api-services/commonService";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  if(error.message == "An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error."){
    removeToken();
  }
  useEffect(() => {
    console.error("Global error caught:", error);
    toast.error(error.message); // Show toast
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong</h1>
      <p className="mt-4 text-center">{error.message}</p>
      <button
        className="btn btn-primary mt-6"
        onClick={() => reset()} // Retry the route
      >
        Try Again
      </button>
    </div>
  );
}
