import Image from "next/image";
import equalizer from "../public/equalizer.svg";

export const NowPlaying = () => (
  <>
    <Image width={32} height={32} src={equalizer} alt={"equalizer"} />
    <div className={"ml-2 text-2xl"}>
      <h1>Lofi playlist something something</h1>
    </div>
  </>
);
