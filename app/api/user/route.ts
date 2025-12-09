import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    return Response.json({
        message: "User get response",
        query
    });
}

export async function POST() {
    return Response.json({
        message: "User POST response"
    });
}

export async function PUT() {
    return Response.json({
        message: "User PUT response"
    });
}