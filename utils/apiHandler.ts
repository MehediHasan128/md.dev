import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IFetchOptions {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: any;
  headers?: HeadersInit;
}

export const apiHandler = async (
  apiEndPoint: string,
  options: IFetchOptions,
) => {
  try {
    const res = await fetch(`/api/${apiEndPoint}`, {
      method: options?.method || "GET",
      headers: {
        "Content-Type": "application/json",

        ...options?.headers,
      },
      body: options?.body ? JSON.stringify(options?.body) : undefined,
    });

    const result = await res.json();

    if (!result?.success) {
      toast.error(result.message || "Something went wrong");
    }

    if (result?.success) {
      toast.success(result?.message);
    }

    return result;
  } catch (err: any) {
    toast.error(err.message || "Failed to fetch API");
  }
};
