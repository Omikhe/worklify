"use client"
import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navigation bar component */}
      <Navbar />

      {/* Hero section with centered content */}
      <div className="flex flex-col space-y-8 justify-center items-center font-bold md:mt-[250px] mt-52">
        {/* Main headline */}
        <h1 className="text-5xl md:text-8xl md:w-[1011px] text-center md:flex md:justify-center md:items-center md:mb-8">
          Unlock Opportunities. Build Your Future.
        </h1>

        {/* Call-to-action buttons */}
        <div className="flex gap-8">
          {/* Offer Services button */}
          <Link
            href="#"
            className="flex justify-center items-center w-[146.48px] h-[44.39px] md:w-40 md:h-14 bg-[#0BB574] text-white md:px-[32px] md:py-[16px] text-nowrap rounded-[5px]"
          >
            Offer Services
          </Link>

          {/* Find Services button */}
          <Link
            href="#"
            className="flex justify-center items-center w-[176.66px] h-[44.39px] active:md:bg-black md:w-40 md:h-14 hover:md:bg-black hover:md:text-white md:px-[32px] md:py-[16px] text-nowrap rounded-[5px] border-2 border-black transition-colors ease-in-out duration-200"
          >
            Find Services
          </Link>
        </div>
      </div>
    </main>
  );
}