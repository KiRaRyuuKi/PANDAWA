import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });

  const url = req.nextUrl.clone();
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/auth") && token) {
    url.pathname = "/pages";
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith("/pages") && !token) {
    url.pathname = "/auth";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth", "/pages/:path*"],
};
