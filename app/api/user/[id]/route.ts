export async function GET() {
    return Response.json({
        message: "User get response",
        user: {
            id: 123,
            name: "John Doe"
        }
    });
}