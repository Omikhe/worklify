import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
    image: string;
    title: string;
    availability: string;
}

export default function ServiceCard({
    image,
    title,
    availability
}: ServiceCardProps) {
    return (
        <div className="relative w-[350px] h-[350px] rounded-[9px] overflow-hidden mb-4 md:w-[332px] md:h-[332px] lg:w-[255px] lg:h-[255px]">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
            <div className="absolute bottom-0 left-0 w-full bg-[#F3F3F3] rounded-t-[9px] p-6 lg:p-2">
                <div className="mb-4">
                    <h1 className="text-base font-medium">{title}</h1>
                    <h2 className="text-sm font-normal">Availability: {availability}</h2>
                </div>
                <div className="flex gap-4 lg:gap-2 lg:w-[234px] justify-between">
                    <Link
                        href="#"
                        className="flex items-center justify-center w-[139px] h-[41px] bg-[#0BB574] px-3 py-2 rounded-[6px] font-normal text-white lg:w-[107px] lg:h-[34px] lg:text-nowrap lg:text-base"
                    >
                        Get Service
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-center w-[139px] h-[41px] border border-[#05120E] px-3 py-2 rounded-[6px] font-normal text-[#05120E] lg:w-[107px] lg:h-[34px] lg:text-nowrap hover:text-white hover:bg-[#05120E] lg:text-base"
                    >
                        View Service
                    </Link>
                </div>
            </div>
        </div>
    );
}