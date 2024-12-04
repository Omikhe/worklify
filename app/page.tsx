"use client"
import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Hero Section: Central Content Container */}
      <div className="
        flex flex-col 
        items-center 
        justify-center 
        text-center 
        space-y-8 
        mt-52 
        md:mt-[250px] 
        text-[#05120E]
      ">
        {/* Main Headline with Responsive Typography */}
        <h1 className="
          text-5xl 
          md:text-[64px] 
          lg:text-8xl 
          font-bold 
          w-80 
          md:w-[674px] 
          lg:w-[1011px]
        ">
          Unlock Opportunities. Build Your Future.
        </h1>

        {/* Call-to-Action Button Group */}
        <div className="flex gap-8">
          {/* Primary Action: Offer Services */}
          <Link
            href="#"
            className="
              flex 
              items-center 
              justify-center 
              w-[146px] 
              md:w-40 
              h-[44px] 
              md:h-14 
              bg-[#0BB574] 
              text-white 
              rounded-[5px] 
              px-4 
              py-2 
              text-nowrap 
              hover:bg-[#09a362] 
              transition-colors 
              duration-200
            "
          >
            Offer Services
          </Link>

          {/* Secondary Action: Find Services */}
          <Link
            href="/services"
            className="
              flex 
              items-center 
              justify-center 
              w-[176px] 
              md:w-40 
              h-[44px] 
              md:h-14 
              rounded-[5px] 
              border-2 
              border-[#05120E] 
              text-nowrap 
              px-4 
              py-2 
              hover:bg-black 
              hover:text-white 
              transition-colors 
              duration-200
            "
          >
            Find Services
          </Link>
        </div>
      </div>
    </main>
  );
}