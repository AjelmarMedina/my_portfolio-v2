'use server';

import prisma from "@/lib/prisma";

export async function GET() {
  const certifications = await prisma.certifications.findMany();
  return Response.json({certifications});
}