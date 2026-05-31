import Banner from "@/components/Banner";
import TopTiles from "@/components/TopTiles";
import Image from "next/image";
import { Suspense } from "react";
import { Audio } from "react-loader-spinner";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full py-20">
            <Audio
              height="50"
              width="50"
              color="#5a00ff"
              ariaLabel="audio-loading"
              visible={true}
            />
          </div>
        }
      >
        <TopTiles></TopTiles>
      </Suspense>

    </div>
  );
}
