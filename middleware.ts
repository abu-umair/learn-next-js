import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/admin")) {
        return NextResponse.rewrite(new URL("/forbidden", request.nextUrl));//?redirect ke halaman forbidden tetapi url/path tetap '/admin' (fungsi rewrite)
    }

    //?juga bisa mengecek yang lain dengan `if`
}

// export const config = {
//     matcher: "/posts/:path*",//?mengambil semua path di folder posts
// }
