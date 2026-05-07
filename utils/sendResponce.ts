import { NextResponse } from "next/server";

interface TResponce<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export const sendResponce = <T>(data: TResponce<T>) => {
  return NextResponse.json(
    {
      success: data.success,
      message: data.message,
      data: data.data,
    },
    {
      status: data.statusCode,
    },
  );
};
