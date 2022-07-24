import { PlayPauseButton } from "./PlayPauseButton";
import { RandomTrackButton } from "./RandomTrackButton";
import { VolumeSlider } from "./VolumeSlider";

export const MediaButtons = ({
  volume,
  setVolume,
  playing,
  setPlaying,
  setCurrentTrack,
}: {
  volume: string;
  setVolume: (value: string) => void;
  playing: boolean;
  setPlaying: (value: boolean) => void;
  setCurrentTrack: (value: string) => void;
}) => (
  <>
    <PlayPauseButton playing={playing} setPlaying={setPlaying} />
    <RandomTrackButton setCurrentTrack={setCurrentTrack} />
    <VolumeSlider volume={volume} setVolume={setVolume} />;
  </>
);
