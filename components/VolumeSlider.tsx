import { ChangeEvent } from "react";

export const VolumeSlider = ({
  volume,
  setVolume,
}: {
  volume: string;
  setVolume: (value: string) => void;
}) => (
  <input
    type="range"
    min="0"
    max="100"
    step="20"
    className={"align-center"}
    id="myRange"
    onChange={(e: ChangeEvent<HTMLInputElement>) => setVolume(e.target.value)}
    value={volume}
    // style={{
    //   background: `linear-gradient(90deg, var(--volumeUsed) ${
    //     value * 100
    //   }%, var(--volumeLeft) ${value * 100}%)`,
    // }}
  />
);
