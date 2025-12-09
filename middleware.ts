import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/admin")) {
        console.log('admin page');
    }
}

// export const config = {
//     matcher: "/posts/:path*",//?mengambil semua path di folder posts
// }
