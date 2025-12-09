import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/admin")) {
        console.log('admin page');
    }

    //?juga bisa mengecek yang lain dengan `if`
}

// export const config = {
//     matcher: "/posts/:path*",//?mengambil semua path di folder posts
// }
