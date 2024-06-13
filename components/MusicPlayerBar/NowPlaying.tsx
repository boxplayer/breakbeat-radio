import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

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

// TODO: possible to get track id?
export const NowPlaying = ({
  playing,
  videoId,
  isMobile,
}: {
  playing: boolean;
  videoId: string;
  isMobile: boolean;
}) => {
  const [data, setData] = useState<Metadata | null>(null);

  useEffect(() => {
    if (videoId) {
      const fetchData = async () => {
        const response = await fetch(
          `https://noembed.com/embed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D${videoId}`,
        );
        const result: Metadata = await response.json();
        setData(result);
      };
      fetchData();
    }
  }, [videoId]);

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
          {isMobile ? (
            <Marquee>
              <span>{`${data?.title} - [${data?.author_name}]}`}</span>
            </Marquee>
          ) : (
            <a href={data?.url} target="_blank">
              {`${data?.title}  -  [${data?.author_name}]` ?? "searching..."}
            </a>
          )}
        </h1>
      </div>
    </div>
  );
};