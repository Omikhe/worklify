import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div className="md:flex md:flex-col md:w-full md:h-20 md:px-28 md:justify-center md:items-center md:font-bold md:mt-80">
        <h1 className="md:text-8xl md:w-[1011px] md:text-center md:flex md:justify-center md:items-center md:mb-8">Unlock Opportunities.
          Build Your Future.</h1>
        <div className="flex gap-8">

          <Link href={"#"} className="flex justify-center items-center md:w-40 md:h-14 md:bg-black md:text-white md:px-[32px] md:py-[16px] text-nowrap rounded-[5px]">
            <div>
              Offer Services
            </div>
          </Link>
          <Link href={"#"} className="flex justify-center items-center  md:w-40 md:h-14 hover:md:bg-black hover:md:text-white md:px-[32px] md:py-[16px] text-nowrap rounded-[5px] md:border-2 md:border-black transition-colors ease-in-out duration-200">
            <div>
              Find Services
            </div>
          </Link>

        </div>

      </div>
    </main>
  );
}