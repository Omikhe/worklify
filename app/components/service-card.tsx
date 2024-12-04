import Image from 'next/image';
import Link from 'next/link';

// Define the prop types for the ServiceCard component
// This provides type safety and makes the component's expected inputs clear
interface ServiceCardProps {
    image: string;      // URL or path to the service image
    title: string;      // Title of the service
    availability: string; // Availability information for the service
}

// ServiceCard component: Displays a card with service details and action buttons
export default function ServiceCard({
    image,
    title,
    availability
}: ServiceCardProps) {
    // Reusable button styles to reduce repetition and improve maintainability
    const buttonBaseStyles = "flex items-center justify-center px-3 py-2 rounded-[6px] font-normal";

    return (
        // Responsive card container with consistent sizing across breakpoints
        <div className="relative w-[350px] h-[350px] rounded-[9px] overflow-hidden mb-4 
                        md:w-[332px] md:h-[332px] 
                        lg:w-[255px] lg:h-[255px]">
            {/* Responsive image with fill layout and cover object fit */}
            <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                // Optional: Add priority for above-the-fold images
                priority
            />

            {/* Card footer with service details and action buttons */}
            <div className="absolute bottom-0 left-0 w-full bg-[#F3F3F3] rounded-t-[9px] p-6 lg:p-2">
                {/* Service information section */}
                <div className="mb-4">
                    <h1 className="text-base font-medium">{title}</h1>
                    <h2 className="text-sm font-normal">
                        Availability: {availability}
                    </h2>
                </div>

                {/* Action buttons container with responsive layout */}
                <div className="flex gap-4 lg:gap-2 lg:w-[234px] justify-between">
                    {/* Primary action button */}
                    <Link
                        href="#" // Replace with actual service link
                        className={`${buttonBaseStyles} 
                            w-[139px] h-[41px] 
                            bg-[#0BB574] 
                            text-white 
                            lg:w-[107px] lg:h-[34px] 
                            lg:text-nowrap lg:text-base`}
                    >
                        Get Service
                    </Link>

                    {/* Secondary action button with hover state */}
                    <Link
                        href="#" // Replace with actual service details link
                        className={`${buttonBaseStyles} 
                            w-[139px] h-[41px] 
                            border border-[#05120E] 
                            text-[#05120E] 
                            lg:w-[107px] lg:h-[34px] 
                            lg:text-nowrap 
                            hover:text-white 
                            hover:bg-[#05120E] 
                            lg:text-base`}
                    >
                        View Service
                    </Link>
                </div>
            </div>
        </div>
    );
}