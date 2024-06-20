import { IoShuffle } from "react-icons/io5";
import { TrackIds } from "../YouTubeEmbed";

export const getRandomTrackIndex = () =>
  Math.floor(Math.random() * TrackIds.length);

export const ShuffleButton = ({
  setCurrentTrackIndex,
}: {
  setCurrentTrackIndex: (value: number) => void;
}) => (
  <IoShuffle
    className={"hover:scale-125 pl-1"}
    size={30}
    onClick={() => setCurrentTrackIndex(getRandomTrackIndex())}
  />
);
