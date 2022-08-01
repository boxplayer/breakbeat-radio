import { NowPlaying } from "./NowPlaying";
import { PlayPauseButton } from "./PlayPauseButton";
import { ShuffleButton } from "./RandomTrackButton";
import { VolumeSlider } from "./VolumeSlider";

export const MediaButtons = ({
  volume,
  setVolume,
  playing,
  setPlaying,
  setCurrentTrack,
  lofiIds,
}: {
  volume: string;
  setVolume: (value: string) => void;
  playing: boolean;
  setPlaying: (value: boolean) => void;
  setCurrentTrack: (value: string) => void;
  lofiIds: string[];
}) => (
  <>
    <div className={"mr-2"}>
      <PlayPauseButton playing={playing} setPlaying={setPlaying} />
    </div>
    <div className={"mr-2"}>
      <ShuffleButton setCurrentTrack={setCurrentTrack} lofiIds={lofiIds} />
    </div>
    <div className={"mr-2 flex"}>
      <VolumeSlider volume={volume} setVolume={setVolume} />
    </div>
  </>
);
