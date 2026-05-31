import TileCard from '@/components/TileCard';
import { HiArrowUpRight } from "react-icons/hi2";

import Link from 'next/link';
import React from 'react';
import LatestTiles from '@/components/LatestTiles';

const TopTiles = async () => {
    const res = await fetch('https://tiles-gallery-zabedfolio.vercel.app/data/products.json')
    const data = await res.json();
    // console.log(data,"data");
    const topTiles = data.slice(0, 8);
    // console.log(topTiles,"top")
    return (
        <div className='container mx-auto mt-10'>
            <h2 className='font-bold text-2xl'>Top Tiles</h2>

            <LatestTiles data={data}></LatestTiles>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto mt-5'>
                {
                    topTiles.map(tile =>
                        <TileCard key={tile.id} tile={tile}></TileCard>
                    )
                }
            </div>
            <div className='text-center'>
                <Link href={'/all-tiles'}>
                    <button className='btn bg-[#5a00ff]  text-white mt-8 rounded-lg'>View All Tiles <HiArrowUpRight /></button>
                </Link>
            </div>

        </div>
    );
};

export default TopTiles;