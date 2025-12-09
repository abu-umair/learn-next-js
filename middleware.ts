import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log("middleware called");
}

export const config = {
    matcher: "/posts/:path*",//?mengambil semua path di folder posts
}
