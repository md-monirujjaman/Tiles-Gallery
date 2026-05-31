import { Card, CardContent } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileCard = ({ tile }) => {
    return (
        <div className="">
            <Card key={tile.id} className="rounded-2xl shadow-md p-3 overflow-hidden">
                <CardContent className="flex flex-col  gap-3 p-0">

                    {/* Image with badges */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image
                            src={tile?.image}
                            alt={tile.title}
                            fill
                            className="object-cover"
                        />

                        {/* Top Left: Price + Currency + Material */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                            <span className="bg-black/60 text-white text-xs font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm">
                                {tile.currency} {tile.price}
                            </span>
                            <span className="bg-black/60 text-center text-white text-xs px-2 py-0.5 rounded-md backdrop-blur-sm">
                                {tile.material}
                            </span>
                        </div>

                        {/* Top Right: inStock badge */}
                        <div className="absolute top-2 right-2">
                            <span className={`text-white text-xs font-semibold px-2 py-0.5 rounded-md backdrop-blur-sm ${tile.inStock ? "bg-green-500/80" : "bg-red-500/80"}`}>
                                {tile.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 text-sm px-1 line-clamp-1">{tile.title}</h3>

                    {/* Category & Dimensions */}
                    <div className="flex items-center justify-between px-1 text-xs text-gray-500 capitalize">
                        <span>{tile.category}</span>
                        <span>{tile.dimensions}</span>
                    </div>

                    {/* View Button */}
                    <Link href={`/all-tiles/${tile.id}`}>
                        <button className="w-full bg-gray-100 hover:bg-[#5a00ff]  transition-colors text-gray-800 hover:text-white text-sm font-medium py-2 rounded-xl">
                            View Details
                        </button>
                    </Link>

                </CardContent>
            </Card>

        </div>
    );
};

export default TileCard;