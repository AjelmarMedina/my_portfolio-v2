'use server';

import prisma from "@/lib/prisma";

export async function GET() {
  const experiences = await prisma.experiences.findMany();
  return Response.json({experiences});
}