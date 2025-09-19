import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth, Session } from "./auth";

export async function getSession(): Promise<Session | null> {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

/**
 * Gets the current session and redirects to dashboard if already authenticated
 * Using this for auth pages (signin/signup) that should redirect authenticated users
 */
export async function requireGuest(
  redirectTo: string = "/dashboard"
): Promise<void> {
  const session = await getSession();

  if (session) {
    redirect(redirectTo);
  }
}
