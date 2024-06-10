import type { NextPage } from "next";
import { useEffect, useState, KeyboardEvent } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { MediaButtons } from "../components/MediaButtons";
import { SocialMediaButtons } from "../components/SocialMediaButtons";
import { NowPlaying } from "../components/NowPlaying";

export const lofiIds = [
  "-5KAN9_CzSA",
  "jfKfPfyJRdk",
  "ceqgwo7U28Y",
  "rUxyKA_-grg",
  "qmI2YCrod00",
];

const Home: NextPage = () => {
  const [introMessage, setIntroMessage] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState("60");
  const [currentTrack, setCurrentTrack] = useState(lofiIds[0]);

  useEffect(() => {
    function handleKeyDown(e: any): any {
      if (e.code === "Space" && introMessage === true) {
        e.preventDefault();
        setIntroMessage(false);
      }

      if (e.code === "Space") {
        e.preventDefault();
        setPlaying((prevProps) => !prevProps);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [playing, introMessage]);

  return (
    <div className={"bg-cover z-10 bg-main-wall"}>
      <Head>
        <title>Radio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"min-h-screen flex flex-col justify-between"}>
        <div className={"fixed hidden items-center justify-center"}>
          <YouTubeEmbed videoId={currentTrack} play={playing} volume={volume} />
        </div>

        <div className={`${styles.row} justify-between pt-3 p-8`}>
          <h1 className={styles.title}>LO-FI RADIO</h1>
          <SocialMediaButtons />
        </div>

        <div className={`${styles.row} text-white align-center pb-3 p-8`}>
          {introMessage ? (
            <p className={`text-2xl`}> Press space to start playing...</p>
          ) : (
            <div>
              <div className={styles.row}>
                <MediaButtons
                  volume={volume}
                  setVolume={setVolume}
                  playing={playing}
                  setPlaying={setPlaying}
                  setCurrentTrack={setCurrentTrack}
                  lofiIds={lofiIds}
                />
              </div>
              <div className={`${styles.row} items-end mt-2`}>
                <NowPlaying playing={playing} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
