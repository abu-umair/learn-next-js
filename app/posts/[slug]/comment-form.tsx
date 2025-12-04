import { createComment } from "@/app/actions"

export function CommentForm() {
    return (
        <form className="flex flex-col w-72" action={createComment}>
            <textarea
                name="comment"
                placeholder="Write your comment here..."
                className="w-full h-40 border border-white mb-2 text-black"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                Send
            </button>
        </form>
    )
}
