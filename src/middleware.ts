import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/project") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
