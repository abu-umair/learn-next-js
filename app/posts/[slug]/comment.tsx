export async function Comments() {
    await new Promise(r => setTimeout(r, 3000));//?fake delay

    return (
        <div>comments content</div>
    )
}