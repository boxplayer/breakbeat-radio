import styles from "../styles/Home.module.css";
import { NextPrevButtons } from "./MusicPlayerBar/NextPrevButtons";
import { NowPlaying } from "./MusicPlayerBar/NowPlaying";
import { PlayPauseButton } from "./MusicPlayerBar/PlayPauseButton";
import { ShuffleButton } from "./MusicPlayerBar/RandomTrackButton";
import { VolumeSlider } from "./MusicPlayerBar/VolumeSlider";

export const MusicPlayerBar = ({
  volume,
  setVolume,
  playing,
  setPlaying,
  currentTrackIndex,
  setCurrentTrackIndex,
}: {
  volume: number;
  setVolume: (value: number) => void;
  playing: boolean;
  setPlaying: (value: boolean) => void;
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
}) => (
  <div className={styles.row}>
    <>
      <div className={"mr-2"}>
        <PlayPauseButton playing={playing} setPlaying={setPlaying} />
      </div>
      <div className={"mr-2"}>
        <NextPrevButtons
          currentTrackIndex={currentTrackIndex}
          setCurrentTrackIndex={setCurrentTrackIndex}
        />
      </div>
      <div className={"mr-2"}>
        <ShuffleButton setCurrentTrackIndex={setCurrentTrackIndex} />
      </div>
      <div className={"mr-2 flex desktop"}>
        <VolumeSlider volume={volume} setVolume={setVolume} />
      </div>
    </>
    <div className={`${styles.row} mt-2`}>
      <NowPlaying playing={playing} currentTrackIndex={currentTrackIndex} />
    </div>
  </div>
);
