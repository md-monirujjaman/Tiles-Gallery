'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {

    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        router.push(`?search=${search}`);
    }

    return (
        <div className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto px-4 py-4 flex gap-3">
                <input
                    type="text"
                    placeholder="Search tiles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition"
                />

                <button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;