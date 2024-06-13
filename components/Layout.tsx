import React from "react";

export const GifTitles = [
  "pc98-retro-game",
  "arcade-gameover",
  "pool-girl",
  "runescape-dance",
];

export const Layout = ({
  children,
  currentGifIndex,
}: {
  children: any;
  currentGifIndex: number;
}) => (
  <div
    className="bg-cover z-10"
    style={{
      backgroundImage: `url('/gifs/${GifTitles[currentGifIndex]}.gif')`,
    }}
  >
    {children}
  </div>
);
