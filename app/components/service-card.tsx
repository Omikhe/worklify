import Image from 'next/image';
import Link from 'next/link';
export default function SearchCard() {
    return (

        <div className="relative w-[350px] h-[350px] rounded-[9px] overflow-hidden">
            <Image src="/worker.jpg" alt="Worker" layout="fill" objectFit="cover" />
            <div className="absolute bottom-0 left-0 w-full bg-[#F3F3F3] rounded-[9px] px-6 py-6">
                <div className="mb-4">
                    <h1 className="text-base font-medium">Plumbing Services</h1>
                    <h2 className="text-sm font-normal">Availability: 24/7</h2>
                </div>

                <div className="flex gap-4">
                    <Link href={"#"} className="flex items-center justify-center w-[139px] h-[41px] bg-[#0BB574] px-3 py-2 rounded-[6px] font-normal text-white">Get Service</Link>
                    <Link href={"#"} className="flex items-center justify-center w-[139px] h-[41px] border-2 border-[#05120E] px-3 py-2 rounded-[6px] font-normal text-[#05120E]">View Service</Link>
                </div>

            </div>
        </div>
    );
}