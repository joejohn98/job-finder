import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user || !session.user.id) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  try {
    const data = await request.json();
    const job = await prisma.job.create({
      data: {
        ...data,
        postedById: session.user.id,
      },
    });
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server Error" },
      { status: 500 }
    );
  }
}
