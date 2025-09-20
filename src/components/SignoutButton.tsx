"use client";

import { useState } from "react";
import LoadingButton from "./LoadingButton";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";
import { toast } from "sonner";

const SignOutButton = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    try {
      setPending(true);
      const result = await signOut();
      
      if (result.success) {
        toast.success("Signed out successfully", {
          description: "You have been signed out of your account",
        });
        router.push("/");
        router.refresh();
      } else {
        toast.error("Sign out failed", {
          description: result.error || "There was an error signing you out. Please try again.",
        });
      }
    } catch (error) {
      toast.error("Sign out failed", {
        description: "An unexpected error occurred. Please try again.",
      });
      console.error("Unexpected sign out error:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <LoadingButton
      pending={pending}
      onClick={handleSignOut}
      variant="outline"
      className="text-gray-600 hover:text-gray-900 text-sm"
    >
      Sign out
    </LoadingButton>
  );
};

export default SignOutButton;
