import { NextPrevButtons } from "./NextPrevButtons";
import { PlayPauseButton } from "./PlayPauseButton";
import { ShuffleButton } from "./RandomTrackButton";
import { VolumeSlider } from "./VolumeSlider";

export const MediaButtons = ({
  volume,
  setVolume,
  playing,
  setPlaying,
  currentTrack,
  setCurrentTrack,
}: {
  volume: number;
  setVolume: (value: number) => void;
  playing: boolean;
  setPlaying: (value: boolean) => void;
  currentTrack: string;
  setCurrentTrack: (value: string) => void;
}) => (
  <>
    <div className={"mr-2"}>
      <PlayPauseButton playing={playing} setPlaying={setPlaying} />
    </div>
    <div className={"mr-2"}>
      <NextPrevButtons
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
      />
    </div>
    <div className={"mr-2"}>
      <ShuffleButton setCurrentTrack={setCurrentTrack} />
    </div>
    <div className={"mr-2 flex"}>
      <VolumeSlider volume={volume} setVolume={setVolume} />
    </div>
  </>
);
