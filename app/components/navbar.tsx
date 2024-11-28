import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="md:flex md:w-full md:h-20 md:px-28 md:justify-between md:items-center md:font-bold">
            <div className="md:text-[24px]">Worklify.</div>
            <div className="md:flex md:justify-between md:items-center md:gap-12">
                <Link href={"#"}>Home</Link>
                <Link href={"#"}>Services</Link>
                <Link href={"#"}>Log In</Link>
                <Link href={"#"} className="md:flex md:w-[90px] md:h-[34px] md:px-[16px] md:py-[8px] md:text-white md:items-center md:bg-black md:rounded-[5px]">
                    <div>
                        Sign Up
                    </div>
                </Link>


            </div>
        </nav>
    );
}