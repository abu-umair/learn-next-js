import { Post } from "@/app/types/Post";

async function getPost(slug: string): Promise<Post> {
    const res = await fetch("http://localhost:3001/posts/?slug=" + slug);
    const [post] = await res.json(); //?mengeluarkan object dari array / distructuring

    return post;
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params
    const post = await getPost(slug);
    console.log(post);


    return (
        <>
            <article>
                <h1 className="text-lg">{post.content}</h1>
                <p>{post.content}</p>
            </article>
            <section className="mt-4">
                <h2 className="text-lg">Comments</h2>
                <form className="flex flex-col w-72">
                    <textarea
                        placeholder="Write your comment here..."
                        className="w-full h-40 border border-white mb-2 text-black"
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                        Send
                    </button>
                </form>
            </section>
        </>
    )
}
