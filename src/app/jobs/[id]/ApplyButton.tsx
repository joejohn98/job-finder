"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingButton from "@/components/LoadingButton";
import { Session } from "@/lib/auth";

interface ApplyButtonProps {
  jobId: string;
  session: Session | null;
}

export default function ApplyButton({ jobId, session }: ApplyButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>("");
  const [applicationStatus, setApplicationStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const router = useRouter();

  const handleApply = async () => {
    setIsLoading(true);

    if (!session) {
      router.push("/signin");
      return;
    }

    setError("");
    setApplicationStatus("idle");

    try {
      const response = await fetch(`/api/jobs/${jobId}/apply`, {
        method: "POST",
      });
      setApplicationStatus("success");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Failed to apply for the job.");
      }
      setApplicationStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <button
        disabled
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md opacity-50 cursor-not-allowed"
      >
        Applying...
      </button>
    );
  }

  if (applicationStatus === "success") {
    return (
      <div className="text-center">
        <p className="text-green-600 font-medium mb-4">
          Application submitted Successfully
        </p>
        <Link
          href="/dashboard"
          className=" hover:bg-indigo-700 text-indigo-600 font-medium"
        >
          View your Applications
        </Link>
      </div>
    );
  }

  return (
    <>
      <LoadingButton
        pending={isLoading}
        onClick={handleApply}
        className="w-full"
      >
        Apply for this position
      </LoadingButton>
      {applicationStatus === "error" && (
        <p className="text-red-600 mt-2">{error}</p>
      )}
    </>
  );
}
