import { useState } from "react";
import { IoPlay, IoPause } from "react-icons/io5";

export const PlayPauseButton = ({
  playing,
  setPlaying,
}: {
  playing: boolean;
  setPlaying: (value: boolean) => void;
}) => {
  const [pauseFilled, setPauseFilled] = useState(false);
  const [playFilled, setPlayFilled] = useState(false);

  return playing ? (
    <IoPause className={"hover:"} size={30} onClick={() => setPlaying(false)} />
  ) : (
    <IoPlay size={30} onClick={() => setPlaying(true)} />
  );
};
