import { IoPlay, IoPause } from "react-icons/io5";

export const PlayPauseButton = ({
  playing,
  setPlaying,
}: {
  playing: boolean;
  setPlaying: (value: boolean) => void;
}) => {
  return playing ? (
    <IoPause className={"hover:"} size={30} onClick={() => setPlaying(false)} />
  ) : (
    <IoPlay size={30} onClick={() => setPlaying(true)} />
  );
};
