"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth, type User } from "../auth";

type AuthResult = {
  success: boolean;
  user?: User;
  error?: string;
};

export async function signIn(
  email: string,
  password: string
): Promise<AuthResult> {
  try {
    const result = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });

    if (result.user) {
      return {
        success: true,
        user: result.user,
      };
    } else {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }
  } catch (error) {
    console.error("Sign in error:", error);
    return {
      success: false,
      error: "Invalid email or password.",
    };
  }
}

export async function signUp(
  email: string,
  password: string,
  name: string
): Promise<AuthResult> {
  try {
    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
      },
    });

    if (result.user) {
      return {
        success: true,
        user: result.user,
      };
    } else {
      return {
        success: false,
        error: "Failed to create account",
      };
    }
  } catch (error) {
    console.error("Sign up error:", error);
    return {
      success: false,
      error: "Failed to create account. Please try again.",
    };
  }
}

export async function signInSocial(provider: "google" | "github") {
  try {
    const { url } = await auth.api.signInSocial({
      body: {
        provider,
      },
    });
    if (url) {
      redirect(url);
    }
  } catch (error) {
    console.error(`Social sign in error for ${provider}:`, error);
    throw new Error(`Failed to authenticate with ${provider}`);
  }
}

export async function signOut() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    return { success: true };
  } catch (error) {
    console.error("Sign out error:", error);
    return { success: false, error: "Failed to sign out" };
  }
}
