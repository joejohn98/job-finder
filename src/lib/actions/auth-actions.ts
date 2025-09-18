"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../auth";

export async function signIn(email: string, password: string) {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });
  return result;
}

export async function signUp(email: string, password: string, name: string) {
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });
  return result;
}

export async function signInSocial(provider: "google" | "github") {
  const { url } = await auth.api.signInSocial({
    body: {
      provider,
    },
  });
  if (url) {
    redirect(url);
  }
}

export async function signOut() {
  const result = await auth.api.signOut({
    headers: await headers(),
  });
  return result;
}
