import { getSetting } from "@/app/queries/getSetting";
import { Nav } from "./nav";
import { Suspense } from "react";


export async function Header() {
    const setting = getSetting(); //?mengambil data setting (1x)

    console.log(setting);
    return (
        <header className="border-b border-white py-2 mb-2">
            <Suspense fallback={<div>Loading...</div>} > {/*?menggunakan suspense untuk menampilkan loading ketika data belum siap/masih ngebaca promise/STREAMING */}
                {/* <div className="text-2xl">{setting.siteName}</div> */}
                <Nav settingPromise={setting} />
            </Suspense>
        </header>
    )
}
