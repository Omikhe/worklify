"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

// SearchBar component for site-wide search functionality
const SearchBar = () => {
    // State to manage the current search input
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent default form submission behavior
        e.preventDefault();

        // Trim whitespace and validate search term
        const trimmedSearchTerm = searchTerm.trim();

        // Only proceed with search if there's a non-empty search term
        if (trimmedSearchTerm) {
            // TODO: Implement actual search logic 
            // This could involve:
            // - Calling an API endpoint
            // - Filtering local data
            // - Navigating to a search results page
            console.log('Searching for:', trimmedSearchTerm);
        }
    };

    // Handle input change with optional input validation
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // You could add additional input validation here if needed
        // For example, limiting input length or removing special characters
        setSearchTerm(e.target.value);
    };

    return (
        // Semantic 'search' element for improved accessibility
        <search className="md:w-[528px] mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex items-center"
                role="search"
            >
                {/* Accessible label for screen readers */}
                <label
                    htmlFor="site-search"
                    className="sr-only"
                >
                    Search the site
                </label>

                {/* Search input container with responsive styling */}
                <div
                    className="flex md:justify-between 
                               bg-[#F3F3F3] 
                               rounded-[9px] 
                               p-1 
                               gap-1 
                               md:w-[528px]"
                >
                    {/* Search input field */}
                    <input
                        type="search"
                        id="site-search"
                        name="site-search"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="What do you need help with?"
                        // Accessibility and usability improvements
                        aria-label="Search"
                        autoComplete="off"
                        className="px-3 
                                   font-normal 
                                   outline-none 
                                   bg-[#F3F3F3] 
                                   md:w-full"
                    />

                    {/* Search submit button */}
                    <button
                        type="submit"
                        // Disabled when no search term
                        disabled={!searchTerm.trim()}
                        aria-label="Submit search"
                        className={`w-10 h-9 
                                    rounded-[5px] 
                                    flex 
                                    justify-center 
                                    items-center 
                                    text-white 
                                    ${searchTerm.trim()
                                ? 'bg-[#0BB574] hover:bg-[#099060]'
                                : 'bg-gray-400 cursor-not-allowed'}`}
                    >
                        <Search />
                    </button>
                </div>
            </form>
        </search>
    );
};

export default SearchBar;