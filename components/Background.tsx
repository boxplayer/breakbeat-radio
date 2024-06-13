import React from "react";

export const GifTitles = [
  "pc98-retro-game",
  "pool-girl",
  "type",
  "minecraft",
  "game-controller",
  "cyber-heart",
  "link",
  "cable-cubes",
  "runescape-dance",
  "cyberpunk-darkroom",
  "edward",
  "cyberpunk-drive",
  "arcade-guy",
  "spike",
  "2d-game",
  "night-ride",
  "cyberpunk-mountains",
  "initial-d-battle",
  "sonic",
  "dead-or-alive",
  "cowboy-bebop",
];

export const Background = ({
  children,
  currentGifIndex,
}: {
  children: any;
  currentGifIndex: number;
}) => (
  <div className="relative min-h-screen">
    <div
      className="absolute inset-0 bg-cover bg-center bg-black before:absolute before:inset-0 before:bg-cover before:bg-center lg:before:backdrop-blur-sm before:z-0 before:brightness-75"
      style={{
        backgroundImage: `url('/gifs/${GifTitles[currentGifIndex]}.gif')`,
      }}
    >
      <div className="relative z-10">{children}</div>
    </div>
  </div>
);
