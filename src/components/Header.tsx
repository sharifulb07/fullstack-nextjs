
import { HomeIcon, File,  UserRound } from "lucide-react"

import Link from "next/link"

import { NavButton } from "./NaButton"
import { ModeToggle } from "./ModeToggle"





export default function Header() {
    return (
        <header className="animate-slide bg-background h-12 py-2 px-8 border-b sticky top-0 z-20">
            <div className="flex justify-between items-center h-8 px-8 w-full">

                <div className="flex gap-2 items-center">
                    <NavButton href="/home" label="Home" icon={HomeIcon} />
                    <Link href={"/home"} className="flex items-center justify-center gap-2 ml-0" title="Home">
                    <h1 className="hidden sm:block text-xl font-bold ml-0 ">
                        Computer Repair Shop 

                    </h1>
                    </Link>
                </div>
                <div className="flex items-center">
                <NavButton href="/tickets" label="Tickets" icon={File} />
                <NavButton href="/customers" label="Customers" icon={UserRound} />
                <ModeToggle />
                </div>

            </div>
        </header>
    )
}