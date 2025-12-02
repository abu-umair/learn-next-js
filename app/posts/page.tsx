type Post = {
    id: string;
    title: string;
    content: string;
}


export default async function PostPage() {
    const res = await fetch('http://localhost:3001/posts')
    const posts = (await res.json()) as Post[]

    console.log(posts);

    return (
        <div>
            <h1>Post Page</h1>

            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    )
}
