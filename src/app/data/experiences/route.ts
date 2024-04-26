'use server';

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const experiences = await prisma.experiences.findMany();
  return NextResponse.json({experiences});
}