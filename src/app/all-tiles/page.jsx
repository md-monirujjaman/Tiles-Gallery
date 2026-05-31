import Search from "@/components/Search";
import TileCard from "@/components/TileCard";

const AllTilesPage = async ({ searchParams }) => {

    const res = await fetch('https://tiles-gallery-zabedfolio.vercel.app/data/products.json');
    const data = await res.json();

    const params = await searchParams;
    const search = params?.search || "";

    const filtered = data.filter(tile =>
        tile.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='container mx-auto mt-10'>

            <h1 className="text-center font-bold text-4xl">All Tiles</h1>

            <Search />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    filtered.map(tile =>
                        <TileCard key={tile.id} tile={tile} />
                    )
                }
            </div>
        </div>
    );
};

export default AllTilesPage;