import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import { SlidersHorizontal } from 'lucide-react';
import SearchCard from "../components/service-card";
import Footer from "../components/footer";

export default function Services() {
    return (
        <main>
            {/* Navigation bar component */}
            <Navbar />

            {/* Services section with centered content */}
            <div className="flex flex-col space-y-8 justify-center items-center font-bold mt-8  text-[#05120E]">
                <div className="flex flex-col gap-4 text-center w-[350px] md:w-[525px]">
                    <h1 className="font-bold text-[32px] leading-[37px] md:text-[48px] md:leading-[55px]">Connect with <br />
                        skilled professionals</h1>
                    <p className="font-normal md:w-full md:h-[36px]">Explore a wide range of services offered by talented individuals ready to tackle your next task or project</p>
                </div>

                <div className="flex items-center gap-1 justify-between">
                    <SearchBar></SearchBar>
                    <div className="border-2 border-[#D9D9D9] w-11 h-11 flex justify-center items-center md:hidden rounded-[5px]">
                        <SlidersHorizontal className="" />
                    </div>
                </div>



                {/* Trending Searches and Filter */}
                <div className="w-full flex justify-center items-center">

                    <div className="hidden md:flex md:items-center md:justify-between md:gap-4 font-normal md:w-[680px] lg:w-[1065px]">
                        <div className="md:flex md:items-center md:justify-center md:gap-4">
                            <h3 className="text-[#9A9A9A]">Trending searches</h3>

                            <div className="w-auto h-8 p-2 bg-[#F3F3F3] flex items-center justify-center  rounded-[5px]">Plumber</div>

                            <div className="w-auto h-8 p-2 bg-[#F3F3F3] flex items-center justify-center  rounded-[5px]">Maid</div>

                            <div className="w-auto h-8 p-2 bg-[#F3F3F3] flex items-center justify-center  rounded-[5px]">Car Wash</div>

                            <div className="w-auto h-8 p-2 bg-[#F3F3F3] flex items-center justify-center  rounded-[5px]">Electrician</div>

                            <div className="w-auto h-8 p-2 bg-[#F3F3F3] flex items-center justify-center  rounded-[5px]">Mechanic</div>

                        </div>


                        <div className="border-2 border-[#D9D9D9] w-auto h-11 flex justify-between gap-2 items-center rounded-[5px] p-1">
                            <SlidersHorizontal className="w-5" />
                            Filter
                        </div>
                    </div>

                </div>


                {/* Services Section - Service cards */}
                <div className="w-full flex justify-center items-center">

                    <div className="columns-1 md:columns-2 lg:columns-4 gap-4 md:w-auto md:px-8">
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                        <SearchCard />
                    </div>
                </div>



            </div>

            <Footer></Footer>
        </main>
    );
}