import Image from "next/image";

export const NowPlaying = ({ playing }: { playing: boolean }) => (
  <>
    {playing && (
      <Image width={32} height={32} src={"/equalizer.svg"} alt={"equalizer"} />
    )}
    <div className={"ml-2 text-2xl"}>
      <h1>Lofi playlist something something</h1>
    </div>
  </>
);
