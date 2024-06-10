import { IoShuffle } from "react-icons/io5";

export const ShuffleButton = ({
  setCurrentTrack,
  breakIds,
}: {
  setCurrentTrack: (value: string) => void;
  breakIds: string[];
}) => (
  <IoShuffle
    size={30}
    onClick={() => setCurrentTrack(breakIds[Math.floor(Math.random() * 5)])}
  />
);
