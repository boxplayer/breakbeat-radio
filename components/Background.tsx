import Image from "next/image";

const GifTitles = [
  "pc98-retro-game",
  "arcade-gameover",
  "pool-girl",
  "runescape-dance",
];

export default function Background({
  currentGifIndex,
}: {
  currentGifIndex: number;
}) {
  return (
    <Image
      alt="Mountains"
      src={`/gifs/${GifTitles[currentGifIndex]}.gif`}
      fill={true}
      quality={100}
    />
  );
}
