import { NextResponse } from "next/server";
import { forbiddenSafeLegacyPatterns } from "@/app/seo-config";

const legacySeoPattern = new RegExp(
  forbiddenSafeLegacyPatterns
    .map((parts) => parts.join("[-_]?"))
    .join("|"),
  "i",
);

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (!legacySeoPattern.test(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|accordev-logo.jpg|image.png).*)"],
};
