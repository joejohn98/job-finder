import { NextResponse } from "next/server";

import { getSession } from "@/lib/session";
import prisma from "@/lib/prisma";

// GET method to check if user has already applied
export async function GET(
  request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const session = await getSession();

  if (!session?.user || !session.user.id) {
    return NextResponse.json({ hasApplied: false });
  }

  try {
    const { jobId } = await params;

    const existingApplication = await prisma.application.findFirst({
      where: {
        jobId: jobId,
        userId: session.user.id,
      },
    });

    return NextResponse.json({
      hasApplied: !!existingApplication,
      application: existingApplication,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ jobId: string }> }
) {
  const session = await getSession();

  if (!session?.user || !session.user.id) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  try {
    const { jobId } = await params;

    const job = await prisma.job.findUnique({
      where: {
        id: jobId,
      },
    });
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    const existingApplication = await prisma.application.findFirst({
      where: {
        jobId: jobId,
        userId: session.user.id,
      },
    });

    if (existingApplication) {
      return NextResponse.json(
        { error: "You have already applied for this job" },
        { status: 400 }
      );
    }

    const application = await prisma.application.create({
      data: {
        jobId: jobId,
        userId: session.user.id,
        status: "PENDING",
      },
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
