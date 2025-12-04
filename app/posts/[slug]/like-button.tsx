"use client"; //?karena pakai button onclick, maka harus ada use client

import { createLike } from "@/app/actions";
import { useState } from "react";



export function LikeButton() {
    const [pending, setPending] = useState(false)

    async function handleLike() {
        setPending(true);
        await createLike();

        setPending(false);
    }

    return <button className="bg-white text-black py-1 px-2"
        onClick={handleLike}>
            {pending ? "Loading..." : "Like"}
        </button>;
}