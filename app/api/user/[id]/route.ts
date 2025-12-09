export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {

    const id = await params;

    return Response.json({
        message: "User get response",
        user: {
            id,
            name: "John Doe"
        }
    });
}