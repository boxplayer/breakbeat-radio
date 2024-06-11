import { IoShuffle } from "react-icons/io5";
import { TrackIds } from "../pages";

export const getRandomTrackId = (TrackIds: string[]) =>
  TrackIds[Math.floor(Math.random() * TrackIds.length)];

export const ShuffleButton = ({
  setCurrentTrack,
}: {
  setCurrentTrack: (value: string) => void;
}) => (
  <IoShuffle
    size={30}
    onClick={() => setCurrentTrack(getRandomTrackId(TrackIds))}
  />
);
