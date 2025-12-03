"use client";
import Link from 'next/link'
import { getSetting } from '@/app/queries/getSetting';

export default async function Nav() {
    const setting = await getSetting();

    return (
        <nav className="space-x-4">
            <Link href="/">Home {setting.siteName}</Link>
            <Link href="/about">About</Link>
            <Link href="/about/team">Team</Link>
        </nav>
    )
}
