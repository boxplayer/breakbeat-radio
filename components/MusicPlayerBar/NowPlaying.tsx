import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { TrackIds } from "../YouTubeEmbed";

type Metadata = {
  width: number;
  thumbnail_width: number;
  provider_name: string;
  author_url: string;
  thumbnail_url: string;
  author_name: string;
  title: string;
  height: number;
  type: string;
  provider_url: string;
  html: string;
  url: string;
  thumbnail_height: number;
  version: string;
};

export const NowPlaying = ({
  playing,
  currentTrackIndex,
}: {
  playing: boolean;
  currentTrackIndex: number;
}) => {
  const [data, setData] = useState<Metadata | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://noembed.com/embed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${TrackIds[currentTrackIndex]}`,
        );
        const result: Metadata = await response.json();
        setData(result);
      } catch (error) {
        console.log("Failed to fetch metadata", error);
      }
    };
    fetchData();
  }, [currentTrackIndex]);

  return (
    <div className="flex flex-row">
      {playing && (
        <Image
          width={32}
          height={32}
          src={"/equalizer.svg"}
          alt={"equalizer"}
        />
      )}
      <div className={"ml-2 text-2xl"}>
        <h1>
          <div className="mobile">
            <Marquee>
              <span>{`${data?.title} - [${data?.author_name}]}`}</span>
            </Marquee>
          </div>
          <div className="desktop">
            <a href={data?.url} target="_blank">
              {`${data?.title}  -  [${data?.author_name}]` ?? "searching..."}
            </a>
          </div>
        </h1>
      </div>
    </div>
  );
};
