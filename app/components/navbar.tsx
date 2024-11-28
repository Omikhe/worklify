import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="md:flex md:w-full md:h-20 md:px-28 md:justify-between md:items-center md:font-bold">
            <div className="md:text-3xl">Worklify<span className="text-[#14E2A1]">.</span></div>
            <div className="hidden md:text-[24px] md:flex md:justify-between md:items-center md:gap-12 font-medium">
                <Link href={"#"}>Home</Link>
                <Link href={"#"}>Services</Link>
                <Link href={"#"}>Log In</Link>
                <Link href={"#"} className="md:flex md:justify-center md:w-32 md:h-14 md:px-[16px] md:py-[8px] md:text-white md:items-center md:bg-black md:rounded-[5px]">
                    <div>
                        Sign Up
                    </div>
                </Link>


            </div>
        </nav>
    );
}