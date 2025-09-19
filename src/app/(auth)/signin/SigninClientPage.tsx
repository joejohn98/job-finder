"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import { signIn } from "@/lib/actions/auth-actions";
import LoadingButton from "@/components/LoadingButton";
import SocialAuthButtons from "@/components/SocialAuthButtons";

const SigninClientPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn(email, password);

      if (result.user) {
        toast.success("Successfully signed in!", {
          description: `Welcome back, ${result.user.name || email}!`,
        });
        router.push("/dashboard");
        router.refresh();
      } else {
        const errorMessage = "Invalid email or password";
        setError(errorMessage);
        toast.error("Sign in failed", {
          description: errorMessage,
        });
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      const errorMessage = `Authentication Error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`;
      setError(errorMessage);
      toast.error("Sign in failed", {
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg mx-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to the Job Finder
          </h2>
          <p className="text-gray-600">
            Sign in to post jobs or apply for opportunities
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-gray-800">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          <div className="space-y-4">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <LoadingButton pending={isLoading} className="w-full">
            Sign in
          </LoadingButton>
        </form>

        <SocialAuthButtons
          isLoading={isLoading}
          onLoadingChange={setIsLoading}
          mode="signin"
        />

        <div className="mt-6 text-center text-sm text-gray-500">
          Don&#39;t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Sign up here
          </Link>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          By signing in, you agree to our{" "}
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

export default SigninClientPage;
