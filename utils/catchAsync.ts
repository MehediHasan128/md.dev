/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

type Handler = (req: Request) => Promise<Response>;

export const catchAsync =
  (fn: Handler) =>
  async (req: Request): Promise<Response> => {
    try {
      return await fn(req);
    } catch (error: any) {
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Something went wrong",
        },
        { status: 500 },
      );
    }
  };
