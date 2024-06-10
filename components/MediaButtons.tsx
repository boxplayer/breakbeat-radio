import { PlayPauseButton } from "./PlayPauseButton";
import { ShuffleButton } from "./RandomTrackButton";
import { VolumeSlider } from "./VolumeSlider";

export const MediaButtons = ({
  volume,
  setVolume,
  playing,
  setPlaying,
  setCurrentTrack,
  breakIds,
}: {
  volume: number;
  setVolume: (value: number) => void;
  playing: boolean;
  setPlaying: (value: boolean) => void;
  setCurrentTrack: (value: string) => void;
  breakIds: string[];
}) => (
  <>
    <div className={"mr-2"}>
      <PlayPauseButton playing={playing} setPlaying={setPlaying} />
    </div>
    <div className={"mr-2"}>
      <ShuffleButton setCurrentTrack={setCurrentTrack} breakIds={breakIds} />
    </div>
    <div className={"mr-2 flex"}>
      <VolumeSlider volume={volume} setVolume={setVolume} />
    </div>
  </>
);
