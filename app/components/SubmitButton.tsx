"use client";

import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
  loadingText?: string;
}

export default function SubmitButton({
  children,
  className = "",
  loadingText = "Please wait...",
}: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn btn-primary w-full ${className}`}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <span className="loading loading-spinner loading-sm"></span>
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
