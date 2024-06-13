import dynamic from "next/dynamic";
import React from "react";
import { getRandomTrackId } from "./MusicPlayerBar/RandomTrackButton";
import { TrackIds } from "../pages";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const YouTubeEmbed = ({
  videoId,
  setCurrentTrack,
  play,
  volume,
}: {
  videoId: string;
  setCurrentTrack: (value: string) => void;
  play: boolean;
  volume: number;
}) => (
  <div>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      playing={play}
      volume={volume}
      loop={true}
      onError={() => {
        console.log(`erroring track: ${videoId}`);
        setCurrentTrack(getRandomTrackId(TrackIds));
      }}
    />
  </div>
);
