import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getFetcher } from "./lib/simplifier";

async function isAdmin(token: string | undefined): Promise<boolean> {
  if (!token) {
    return false;
  }

  try {
    const call = await getFetcher({
      link: "/auth/own-profile",
      token: token,
    });

    if (call.status && call.data?.role === "super_admin") {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error verifying admin role:", error);
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const token = cookies().get("raven")?.value;

  if (!(await isAdmin(token))) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next(); // Continue to the next middleware or route handler
}

export const config = {
  matcher: ["/admin((?!/login|/verify|/change-pass|/forgot-pass).*)"],
};
