"use client"; //?karena pakai button onclick, maka harus ada use client

import { createLike } from "@/app/actions";
import {  useTransition } from "react";



export function LikeButton({ postId }: { postId: string }) { //?postnya ID tipenya apa? yaitu berupa string
    const [pending, startTransition] = useTransition()

    async function handleLike() {
        startTransition(async () => {
            await createLike(postId);
        })
    }

    return <button className="bg-white text-black py-1 px-2"
        onClick={handleLike}>
        {pending ? "Loading..." : "Like"}
    </button>;
}