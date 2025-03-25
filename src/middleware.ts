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
  const pathname = request.nextUrl.pathname;
  const is_admin = await isAdmin(token); // Calculate isAdmin once
  console.log("hello");
  // Allow access to /admin/login, /admin/verify, and /admin/forgot-pass regardless of admin status.
  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/admin/verify") ||
    pathname.startsWith("/admin/forgot-pass")
  ) {
    if (is_admin) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // Allow super admin to access change-pass
  if (pathname.startsWith("/admin/change-pass") && is_admin) {
    return NextResponse.next();
  }

  // If the user is not an admin, redirect to login.
  if (!is_admin) {
    // Use the pre-calculated is_admin
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next(); // Continue to the next middleware or route handler
}

export const config = {
  matcher: ["/admin/:path*"],
};
