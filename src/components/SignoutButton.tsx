"use client";

import { useState } from "react";
import LoadingButton from "./LoadingButton";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";

const SignOutButton = () => {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSignOut = async () => {
    try {
      setPending(true);
      await signOut();
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
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
