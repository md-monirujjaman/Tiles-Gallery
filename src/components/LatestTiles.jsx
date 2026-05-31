import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestTiles = ({ data }) => {
    return (
        <div className='flex justify-between bg-gray-200 items-center py-2 px-2 container mx-auto gap-2 mt-4'>
            
            <button className='btn bg-[#5a00ff] text-white'>
                Latest Tiles
            </button>

            <Marquee pauseOnHover={true} speed={100}>
                <span className='mx-8 font-medium'>
                    New Arrivals:
                </span>

                {data.map((n) => (
                    <span className='mx-8' key={n.id}>
                        {n.title}
                    </span>
                ))}

                <span className='mx-8 font-bold text-[#5a00ff]'>
                    Weekly Feature: Modern Geometric Patterns
                </span>

                <span className='mx-8 font-bold text-[#5a00ff]'>
                    Join the Community...
                </span>
            </Marquee>

        </div>
    );
};

export default LatestTiles;