import dynamic from "next/dynamic";
import React from "react";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const YouTubeEmbed = ({
  videoId,
  play,
  volume,
}: {
  videoId: string;
  play: boolean;
  volume: number;
}) => (
  <div>
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      playing={play}
      volume={volume}
      loop={true}
    />
  </div>
);
