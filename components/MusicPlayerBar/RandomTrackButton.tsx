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
    size={30}
    onClick={() => setCurrentTrackIndex(getRandomTrackIndex())}
  />
);
