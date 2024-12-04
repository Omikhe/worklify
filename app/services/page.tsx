import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import { SlidersHorizontal } from 'lucide-react';
import ServiceCard from "../components/service-card";
import Footer from "../components/footer";
import ServiceData from "./services.json";

// Array of trending search terms
const TRENDING_SEARCHES = [
    "Plumber",
    "Maid",
    "Car Wash",
    "Electrician",
    "Mechanic"
];

export default function Services() {
    return (
        <main>
            {/* Navigation bar */}
            <Navbar />

            {/* Services page content */}
            <div className="flex flex-col space-y-8 justify-center items-center font-bold mt-8 text-[#05120E]">
                {/* Hero Section */}
                <HeroSection />

                {/* Search and Filter Section */}
                <SearchAndFilterSection />

                {/* Services Grid */}
                <ServicesGrid services={ServiceData} />
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
}

// Hero Section Component
const HeroSection = () => (
    <div className="flex flex-col gap-4 text-center w-[350px] md:w-[525px]">
        <h1 className="font-bold text-[32px] leading-[37px] md:text-[48px] md:leading-[55px]">
            Connect with <br />
            skilled professionals
        </h1>
        <p className="font-normal md:w-full md:h-[36px]">
            Explore a wide range of services offered by talented individuals ready to tackle your next task or project
        </p>
    </div>
);

// Search and Filter Section Component
const SearchAndFilterSection = () => (
    <>
        {/* Mobile and Desktop Search Input */}
        <div className="flex items-center gap-1 justify-between">
            <SearchBar />

            {/* Mobile Filter Button */}
            <div className="border-2 border-[#D9D9D9] w-11 h-11 flex justify-center items-center md:hidden rounded-[5px]">
                <SlidersHorizontal />
            </div>
        </div>

        {/* Trending Searches and Filter (Desktop) */}
        <div className="w-full flex justify-center items-center">
            <div className="hidden md:flex md:items-center md:justify-between md:gap-4 font-normal md:w-[680px] lg:w-[1065px]">
                {/* Trending Searches */}
                <div className="md:flex md:items-center md:justify-center md:gap-4">
                    <h3 className="text-[#9A9A9A]">Trending searches</h3>

                    {TRENDING_SEARCHES.map((search, index) => (
                        <TrendingSearchPill
                            key={search}
                            label={search}
                            // Only show first 3 on md, all on lg
                            className={index >= 3 ? "lg:flex md:hidden" : ""}
                        />
                    ))}
                </div>

                {/* Filter Button */}
                <FilterButton />
            </div>
        </div>
    </>
);

// Trending Search Pill Component
interface TrendingSearchPillProps {
    label: string;
    className?: string;
}

const TrendingSearchPill: React.FC<TrendingSearchPillProps> = ({
    label,
    className = ""
}) => (
    <div className={`w-auto h-8 p-2 bg-[#F3F3F3] flex items-center justify-center rounded-[5px] ${className}`}>
        {label}
    </div>
);

// Filter Button Component
const FilterButton = () => (
    <div className="border-2 border-[#D9D9D9] w-auto h-auto flex justify-between gap-2 items-center rounded-[5px] px-2 py-1">
        <SlidersHorizontal className="w-5" />
        Filter
    </div>
);

// Services Grid Component
interface ServicesGridProps {
    services: Array<{
        title: string;
        image: string;
        availability: string;
    }>;
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => (
    <div className="w-full flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:w-auto md:px-8">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    title={service.title}
                    image={service.image}
                    availability={service.availability}
                />
            ))}
        </div>
    </div>
);