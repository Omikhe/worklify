import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

// Footer component for site-wide navigation and app download links
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 px-4 md:px-8">
            {/* Responsive grid layout for footer navigation sections */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Navigation sections with consistent styling */}
                <FooterSection title="Explore">
                    <FooterLink href="/become-provider">Become a Service Provider</FooterLink>
                    <FooterLink href="/services-by-city">Services by City</FooterLink>
                    <FooterLink href="/nearby-services">Nearby Services</FooterLink>
                    <FooterLink href="/all-services">All Services</FooterLink>
                    <FooterLink href="/featured-professionals">Featured Professionals</FooterLink>
                </FooterSection>

                <FooterSection title="Help & About">
                    <FooterLink href="/help-center">Help Center</FooterLink>
                    <FooterLink href="/about">About Us</FooterLink>
                    <FooterLink href="/our-story">Our Story</FooterLink>
                    <FooterLink href="/careers">Careers</FooterLink>
                    <FooterLink href="/media-center">Media Center</FooterLink>
                </FooterSection>

                <FooterSection title="Community">
                    <FooterLink href="/community-impact">Community Impact</FooterLink>
                    <FooterLink href="/blog">Blog</FooterLink>
                </FooterSection>

                <FooterSection title="Legal">
                    <FooterLink href="/terms">Terms & Conditions</FooterLink>
                    <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    <FooterLink href="/california-notice">California Consumer Notice</FooterLink>
                    <FooterLink href="/do-not-sell">Do Not Sell My Personal Information</FooterLink>
                </FooterSection>
            </div>

            {/* App download section with call-to-action */}
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                {/* App download call-to-action */}
                <div className="flex justify-center items-center space-x-2">
                    <ChevronRight className="text-green-600" />
                    <span className="text-gray-700 font-semibold">
                        Download Our App: Handle tasks on the go with ease!
                    </span>
                    <ChevronRight className="text-green-600" />
                </div>

                {/* App store download buttons */}
                <div className="mt-4 flex justify-center space-x-4">
                    <AppStoreButton
                        href="#"
                        label="App Store"
                        className="bg-black text-white"
                    />
                    <AppStoreButton
                        href="#"
                        label="Google Play"
                        className="bg-green-600 text-white"
                    />
                </div>
            </div>
        </footer>
    );
};

// Reusable Footer Section Component for consistent section styling
interface FooterSectionProps {
    title: string;
    children: ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => (
    <div>
        <h4 className="font-bold text-lg mb-4 text-gray-800">{title}</h4>
        <nav className="space-y-2">
            {children}
        </nav>
    </div>
);

// Reusable Footer Link Component with consistent styling
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

// Reusable App Store Button Component
interface AppStoreButtonProps {
    href: string;
    label: string;
    className?: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({
    href,
    label,
    className = ''
}) => (
    <a
        href={href}
        className={`px-4 py-2 rounded-lg ${className}`}
    >
        {label}
    </a>
);

export default Footer;