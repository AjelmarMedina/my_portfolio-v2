'use server';

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = JSON.parse(await request.json())
    await prisma.portfolioContacts.create({
      data: { 
        name: data.name,
        email: data.email,
        message: data.message,
      }
    })
    return NextResponse.json({ isSuccessful: true });
  } catch (error) {
    return NextResponse.json({ isSuccessful: false });
  }
}