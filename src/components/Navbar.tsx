import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SignOutButton from "./SignoutButton";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href={"/"} className="flex items-center">
              <Image
                src="/logo.png"
                alt="Job finder logo"
                width={40}
                height={40}
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Job Finder
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href={"/jobs"}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Browse Jobs
            </Link>
            {session ? (
              <>
                <Link
                  href={"/jobs/post"}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Post a Job
                </Link>
                <Link
                  href={"/dashboard"}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <SignOutButton />
              </>
            ) : (
              <Link
                href={"/auth/signin"}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
