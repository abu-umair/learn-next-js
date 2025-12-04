"use client"; //?karena pakai button onclick, maka harus ada use client

import { createLike } from "@/app/actions";



export function LikeButton() {
    async function handleLike() {
        await createLike();
    }

    return <button className="bg-white text-black py-1 px-2"
        onClick={handleLike}>Like</button>;
}