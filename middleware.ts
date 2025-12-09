import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token");//?mengambil cookie token
    console.log(token);//?melihat di terminal

    if (pathname.startsWith("/admin") && !token?.value) {
        // return NextResponse.rewrite(new URL("/forbidden", request.nextUrl));//?redirect ke halaman forbidden tetapi url/path tetap '/admin' (fungsi rewrite)
        return NextResponse.redirect(new URL("/forbidden", request.nextUrl));//?redirect ke halaman forbidden juga url/path '/forbidden' (fungsi redirect)
    }

    //?juga bisa mengecek yang lain dengan `if`
}

// export const config = {
//     matcher: "/posts/:path*",//?mengambil semua path di folder posts
// }
