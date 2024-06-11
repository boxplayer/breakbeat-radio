import { ChangeEvent } from "react";

export const VolumeSlider = ({
  volume,
  setVolume,
}: {
  volume: number;
  setVolume: (value: number) => void;
}) => (
  <input
    type="range"
    min="0"
    max="100"
    step="20"
    className={"align-center"}
    id="myRange"
    onChange={(e: ChangeEvent<HTMLInputElement>) =>
      setVolume(Number(e.target.value) / 100)
    }
    value={(volume * 100).toString()}
  />
);
