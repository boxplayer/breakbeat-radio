import Image from "next/image";
import { useEffect, useState } from "react";

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

//TODO: make sure the api is called only once
export const NowPlaying = ({
  playing,
  videoId,
}: {
  playing: boolean;
  videoId: string;
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
    <>
      {playing && (
        <Image
          width={32}
          height={32}
          src={"/equalizer.svg"}
          alt={"equalizer"}
        />
      )}
      <div className={"ml-2 text-2xl"}>
        <h1>{data?.title ?? "searching..."}</h1>
      </div>
    </>
  );
};
