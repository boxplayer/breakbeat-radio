import dynamic from "next/dynamic";
import React from "react";
import { getRandomTrackIndex } from "./MusicPlayerBar/RandomTrackButton";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const TrackIds = [
  "u9o1OYX5UOQ",
  "zSCzORZQsjQ",
  "A9UW7i6Pj3Q",
  "8CHva3gBp68&t",
  "SIoKWFS2LWg",
  "wqDVI1O52C0",
  "qyl26GigiWI",
  "ZLUl3vkI5ZI",
  "B7cBUsz4WkY",
  "kQMP0G3YlcA",
  "8VpgVEoSSik",
  "tdceTb3vsmk",
  "XjhzXzaikpU",
  "Owldd4hs7wQ&t",
  "8diCWQ5HU0I",
  "wMFfy9-VS6Y",
  "s-w53KWHxm8",
  "pCGmlm8HvBI",
  "DrmpZtxr0kY",
  "qXfdneeIZnw",
  "uLxD4ozDPZA",
  "83YU83Q0jXA",
  "yEUOXeTccSk",
  "ulU8B-FdABA",
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
  "YetM0IxOrZ0",
  "W3BoVmxLHA0",
  "DmStNF35o1w",
  "mhq3OA85R2s",
  "eh2bA1lcIds",
  "o60RVkm_Z5E",
  "iichtrOWuH0",
  "S-2WCA2Kx1M",
  "SaVcfHN7xE4&t",
  "-TWFCjSKa8A",
  "lijyz_IXkNQ",
  "fPfoFHQfHAw",
  "45tWALDDtgw",
  "fPfoFHQfHAw",
  "HopogB_8yVE",
  "0MyusdQ5Hr0",
  "wQbGWiVx1qY",
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
