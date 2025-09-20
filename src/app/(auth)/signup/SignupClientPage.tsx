"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { signUp } from "@/lib/actions/auth-actions";
import LoadingButton from "@/components/LoadingButton";
import SocialAuthButtons from "@/components/SocialAuthButtons";

const SignupClientPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { email, password, confirmPassword, fullName } = formData;

      if (password !== confirmPassword) {
        const errorMessage = "Passwords do not match";
        setError(errorMessage);
        toast.error("Validation Error", {
          description: errorMessage,
        });
        return;
      }

      const result = await signUp(email, password, fullName);

      if (result.success && result.user) {
        toast.success("Account created successfully!", {
          description: `Welcome to Job Finder, ${fullName}!`,
        });
        router.push("/dashboard");
        router.refresh();
      } else {
        const errorMessage = result.error || "Failed to create account";
        setError(errorMessage);
        toast.error("Sign up failed", {
          description: errorMessage,
        });
      }

      // Only clear form on success
      if (result.success) {
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
        });
      }
    } catch (error) {
      // This should rarely happen now since server action handles errors
      const errorMessage = "An unexpected error occurred. Please try again.";
      setError(errorMessage);
      toast.error("Sign up failed", {
        description: errorMessage,
      });
      console.error("Unexpected sign up error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg mx-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Join Job Finder
          </h2>
          <p className="text-gray-600">
            Create your account to start posting jobs or finding opportunities
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-gray-800">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <LoadingButton pending={isLoading} className="w-full">
            Create Account
          </LoadingButton>
        </form>

        <SocialAuthButtons
          isLoading={isLoading}
          onLoadingChange={setIsLoading}
          mode="signup"
        />

        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Sign in here
          </Link>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          By signing up, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupClientPage;
