import Link from "next/link";
import { Post } from "@/app/types/Post";//?dipindahin karena bakal di reuse
import type { Metadata } from "next";
import { resolve4 } from "dns";


export const metadata: Metadata = {
    title: "Posts",
};

// async function getPost(): Promise<Array<Post>> { bisa juga array seperti ini, sama saja
async function getPost(): Promise<Post[]> {
    await new Promise(resolve => setTimeout(resolve, 3000));//?fake delay
    const res = await fetch('http://localhost:3001/posts')
    const posts = (await res.json()) as Post[]

    return posts

}

export default async function PostPage() {
    const posts = await getPost();
    console.log(posts);
    // throw new Error("Error throw in Home page"); //?dibuat error


    return (
        <div>
            <h1>Post Page</h1>

            {posts.map((post) => (
                <div key={post.id}>
                    <h2>
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </h2>
                </div>
            ))}
        </div>
    )
}
