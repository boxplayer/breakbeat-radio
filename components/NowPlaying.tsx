import Image from "next/image";
import { fetchData } from "../pages";

// TODO: possible to get track id?
export const NowPlaying = ({ playing }: { playing: boolean }) => {
  // const metadat = await fetchData();
  return (
    <>
      {playing && (
        <Image
          width={32}
          height={32}
          src={"/equalizer.svg"}
          alt={"equalizer"}
        />
      )}
      <div className={"ml-2 text-2xl"}>
        <h1>some random breakbeat mix</h1>
      </div>
    </>
  );
};
