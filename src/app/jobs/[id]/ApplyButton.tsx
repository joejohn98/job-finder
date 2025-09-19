"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
    "idle" | "success" | "error" | "already_applied" | "checking"
  >("checking");

  const router = useRouter();

  // Check if user has already applied when component mounts
  useEffect(() => {
    const checkApplicationStatus = async () => {
      if (!session?.user) {
        setApplicationStatus("idle");
        return;
      }

      try {
        const response = await fetch(`/api/jobs/${jobId}/apply`);
        if (response.ok) {
          const data = await response.json();
          if (data.hasApplied) {
            setApplicationStatus("already_applied");
          } else {
            setApplicationStatus("idle");
          }
        } else {
          setApplicationStatus("idle");
        }
      } catch (error) {
        console.error("Error checking application status:", error);
        setApplicationStatus("idle");
      }
    };

    checkApplicationStatus();
  }, [jobId, session]);

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

      if (response.ok) {
        setApplicationStatus("success");
      } else {
        const errorData = await response.json();

        if (
          response.status === 400 &&
          errorData.error === "You have already applied for this job"
        ) {
          setApplicationStatus("already_applied");
        } else {
          setError(errorData.error || "Failed to apply for the job.");
          setApplicationStatus("error");
        }
      }
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

  if (applicationStatus === "checking") {
    return (
      <div className="w-full bg-gray-200 text-gray-600 px-6 py-3 rounded-md text-center">
        Checking application status...
      </div>
    );
  }

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
          className="text-indigo-600 hover:text-indigo-700 font-medium"
        >
          View your applications →
        </Link>
      </div>
    );
  }

  if (applicationStatus === "already_applied") {
    return (
      <div className="text-center">
        <p className="text-indigo-600 font-medium mb-4">
          You have already applied for this position
        </p>
        <Link
          href="/dashboard"
          className="hover:text-indigo-700 text-indigo-600 font-medium"
        >
          View your Applications →
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
