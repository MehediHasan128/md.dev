import connectDB from "@/lib/db";
import { m } from "motion/react";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();

    return NextResponse.json({
        message: "Database connection successful",
    })
 }