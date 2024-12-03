"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform search action
        console.log('Searching for:', searchTerm);
    };

    return (
        <search className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex items-center ">
                <label htmlFor="site-search" className="sr-only">
                    Search the site
                </label>
                <div
                    className="flex bg-[#F3F3F3] rounded-[9px] p-1 gap-1"

                >

                    <input
                        type="search"
                        id="site-search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="What do you need help with?"
                        className="px-3 font-normal outline-none bg-[#F3F3F3]"
                    />
                    <button
                        type="submit"
                        className="w-10 h-9 bg-[#0BB574] text-white rounded-[5px] flex justify-center items-center"
                    >
                        <Search />
                    </button>
                </div>
            </form>
        </search>
    );
};

export default SearchBar;