'use server';

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const certifications = await prisma.certifications.findMany();
  return NextResponse.json({certifications});
}