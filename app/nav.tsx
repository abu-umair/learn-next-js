"use client";
import Link from 'next/link'
import { Setting } from '@/app/types/Setting';
import { use } from 'react';

export function Nav({
    settingPromise
}: {
    settingPromise: Promise<Setting>
}) {
    
    const setting = use(settingPromise);
    console.log(setting);
    

    return (
        <nav className="space-x-4">
            <Link href="/">Home {setting.siteName}</Link>
            <Link href="/about">About</Link>
            <Link href="/about/team">Team</Link>
        </nav>
    )
}
