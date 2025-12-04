"use client"; //?karena pakai button onclick, maka harus ada use client

import { createLike } from "@/app/actions";
import {  useTransition } from "react";



export function LikeButton() {
    const [pending, startTransition] = useTransition()

    async function handleLike() {
        startTransition(async () => {
            await createLike();
        })
    }

    return <button className="bg-white text-black py-1 px-2"
        onClick={handleLike}>
        {pending ? "Loading..." : "Like"}
    </button>;
}