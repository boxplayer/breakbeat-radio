import dynamic from "next/dynamic";
import React from "react";
import { getRandomTrackId } from "./MusicPlayerBar/RandomTrackButton";
import { TrackIds } from "../pages";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const YouTubeEmbed = ({
  currentTrackIndex,
  setCurrentTrackIndex,
  play,
  volume,
}: {
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
  play: boolean;
  volume: number;
}) => (
  <div>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${TrackIds[currentTrackIndex]}`}
      playing={play}
      volume={volume}
      loop={true}
      onError={() => {
        console.log(`erroring track: ${TrackIds[currentTrackIndex]}`);
        setCurrentTrackIndex(getRandomTrackId());
      }}
    />
  </div>
);
