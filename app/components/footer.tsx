import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 px-4 md:px-8">
            {/* Main footer grid container */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Explore Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">Explore</h4>
                    <nav className="space-y-2">
                        <FooterLink href="/become-provider">Become a Service Provider</FooterLink>
                        <FooterLink href="/services-by-city">Services by City</FooterLink>
                        <FooterLink href="/nearby-services">Nearby Services</FooterLink>
                        <FooterLink href="/all-services">All Services</FooterLink>
                        <FooterLink href="/featured-professionals">Featured Professionals</FooterLink>
                    </nav>
                </div>

                {/* Help & About Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">Help & About</h4>
                    <nav className="space-y-2">
                        <FooterLink href="/help-center">Help Center</FooterLink>
                        <FooterLink href="/about">About Us</FooterLink>
                        <FooterLink href="/our-story">Our Story</FooterLink>
                        <FooterLink href="/careers">Careers</FooterLink>
                        <FooterLink href="/media-center">Media Center</FooterLink>
                    </nav>
                </div>

                {/* Community Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">Community</h4>
                    <nav className="space-y-2">
                        <FooterLink href="/community-impact">Community Impact</FooterLink>
                        <FooterLink href="/blog">Blog</FooterLink>
                    </nav>
                </div>

                {/* Legal Section */}
                <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-800">Legal</h4>
                    <nav className="space-y-2">
                        <FooterLink href="/terms">Terms & Conditions</FooterLink>
                        <FooterLink href="/privacy">Privacy Policy</FooterLink>
                        <FooterLink href="/california-notice">California Consumer Notice</FooterLink>
                        <FooterLink href="/do-not-sell">Do Not Sell My Personal Information</FooterLink>
                    </nav>
                </div>
            </div>

            {/* App Download Section */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <div className="flex justify-center items-center space-x-2">
                    <ChevronRight className="text-green-600" />
                    <span className="text-gray-700 font-semibold">
                        Download Our App: Handle tasks on the go with ease!
                    </span>
                    <ChevronRight className="text-green-600" />
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="bg-black text-white px-4 py-2 rounded-lg">
                        App Store
                    </a>
                    <a href="#" className="bg-green-600 text-white px-4 py-2 rounded-lg">
                        Google Play
                    </a>
                </div>
            </div>
        </footer>
    );
};

// Reusable Footer Link Component with TypeScript types
interface FooterLinkProps {
    href: string;
    children: ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
    <Link
        href={href}
        className="text-gray-600 hover:text-green-600 transition-colors flex items-center"
    >
        <ChevronRight size={16} className="mr-1 text-green-600" />
        {children}
    </Link>
);

export default Footer;