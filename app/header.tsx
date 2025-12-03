import Link from "next/link";

type Setting = {
    siteName: string;
};

async function getSetting(): Promise<Setting> {
    const res = await fetch("http://localhost:3001/settings");
    const setting = await res.json();

    return setting;
}

export async function Header() {
    const setting = await getSetting();

    console.log(setting);
    return (
        <header className="border-b border-white py-2 mb-2">
            <div className="text-2xl">{setting.siteName}</div>
            <nav className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/about/team">Team</Link>
            </nav>
        </header>
    )
}
