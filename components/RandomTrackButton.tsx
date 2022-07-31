import { IoShuffle } from "react-icons/io5";

export const ShuffleButton = ({
  setCurrentTrack,
  lofiIds,
}: {
  setCurrentTrack: (value: string) => void;
  lofiIds: string[];
}) => (
  <IoShuffle
    size={30}
    onClick={() => setCurrentTrack(lofiIds[Math.floor(Math.random() * 5)])}
  />
);
