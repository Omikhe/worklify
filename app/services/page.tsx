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
            <div className="flex flex-col space-y-8 justify-center items-center font-bold md:mt-[250px] mt-4 text-[#05120E]">
                <div className="flex flex-col gap-4 text-center w-[350px]">
                    <h1 className="font-bold text-[32px] leading-[37px]">Connect with <br />
                        skilled professionals</h1>
                    <p className="font-normal">Explore a wide range of services offered by talented individuals ready to tackle your next task or project</p>
                </div>

                <div className="flex items-center gap-1 justify-between">
                    <SearchBar></SearchBar>
                    <div className="border-2 border-[#D9D9D9] w-11 h-11 flex justify-center items-center rounded-[5px]">

                        <SlidersHorizontal className="" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 columns-1 md:columns-2 lg:columns-4">
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

            <Footer></Footer>
        </main>
    );
}