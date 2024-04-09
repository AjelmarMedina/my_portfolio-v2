'use server';

import prisma from "@/lib/prisma";

export async function GET() {
  const skills = await prisma.skills.findMany();
  return Response.json({skills})
}