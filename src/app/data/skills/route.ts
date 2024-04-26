'use server';

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const skills = await prisma.skills.findMany();
  return NextResponse.json({skills})
}