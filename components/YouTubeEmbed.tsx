import dynamic from "next/dynamic";
import React from "react";
import { getRandomTrackIndex } from "./MusicPlayerBar/RandomTrackButton";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const TrackIds = [
  "8CHva3gBp68&t",
  "zSCzORZQsjQ",
  "A9UW7i6Pj3Q",
  "Owldd4hs7wQ&t",
  "8diCWQ5HU0I",
  "wMFfy9-VS6Y",
  "pCGmlm8HvBI",
  "DrmpZtxr0kY",
  "qXfdneeIZnw",
  "83YU83Q0jXA",
  "yEUOXeTccSk",
  "ulU8B-FdABA",
  "u9o1OYX5UOQ",
  "xgvpvO2Fx8U",
  "MUoCWXwPUIM",
  "9dKSf8IlXNM",
  "vRZHyKnCPZU",
  "0KaBYaQGwbs",
  "3O3vncqnFWY",
  "0KgL3FwzjBE",
  "T_-jjh2sX4Q",
  "geL0UVnSfvQ",
  "knsIkEY4zoI",
  "pbXLQ2qvedU",
  "z70z6BS4CfE",
  "CtCgNRquauE",
  "0HXTXQ--dBA",
  "kmLT1NvsI4Y",
  "twBcMibg1Vs",
  "pC-hxUhVLEc",
  "r8SASJoZNow",
  "X3p8P6-fWyA",
  "ugiugMgIiZw",
  "NEqi5iOahuk",
  "5xOjS99celY",
  "BZxvZBmKTGg",
  "jsd2VSZVTF8",
  "OL0NVBGEFoc",
  "mM2mP5Gk7U0",
];

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
        setCurrentTrackIndex(getRandomTrackIndex());
      }}
    />
  </div>
);
