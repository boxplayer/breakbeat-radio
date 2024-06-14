import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { MusicPlayerBar } from "../components/MusicPlayerBar";
import { HelperPanel } from "../components/HelperPanel";
import { NowPlaying } from "../components/MusicPlayerBar/NowPlaying";
import { getRandomTrackId } from "../components/MusicPlayerBar/RandomTrackButton";
import { GifTitles, Background } from "../components/Background";

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
];

const Home: NextPage = () => {
  const [introMessage, setIntroMessage] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [currentTrack, setCurrentTrack] = useState(getRandomTrackId(TrackIds));
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        userAgent,
      );
    setIsMobile(mobile);
  }, []);

  //TODO: export these to reusable functions
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): any {
      if (e.code === "Space" && introMessage === true) {
        e.preventDefault();
        setIntroMessage(false);
      }

      if (e.code === "Space") {
        e.preventDefault();
        setPlaying((prevProps) => !prevProps);
      }

      if (e.code === "ArrowUp") {
        e.preventDefault();
        if (volume <= 0.8) {
          setVolume((prevProps) => prevProps + 0.2);
        }
      }

      if (e.code === "ArrowDown") {
        e.preventDefault();
        if (volume > 0) {
          setVolume((prevProps) => prevProps - 0.2);
        }
      }

      if (e.code === "ArrowLeft") {
        e.preventDefault();
        const currentTrackIndex = TrackIds.indexOf(currentTrack);
        if (currentTrackIndex === 0) {
          setCurrentTrack(TrackIds[TrackIds.length - 1]);
        } else {
          setCurrentTrack(TrackIds[currentTrackIndex - 1]);
        }
      }

      if (e.code === "ArrowRight") {
        e.preventDefault();

        const currentTrackIndex = TrackIds.indexOf(currentTrack);
        if (currentTrackIndex === TrackIds.length) {
          setCurrentTrack(TrackIds[0]);
        } else {
          setCurrentTrack(TrackIds[currentTrackIndex + 1]);
        }
      }

      if (e.code === "KeyR") {
        setCurrentTrack(getRandomTrackId(TrackIds));
      }

      if (e.code === "KeyG") {
        setCurrentGifIndex(
          currentGifIndex === GifTitles.length - 1 ? 0 : currentGifIndex + 1,
        );
      }

      if (e.code === "KeyH") {
        setShowHelp((prevProps) => !prevProps);
      }
    }

    const handleTouch = () => {
      const now = Date.now();
      const DOUBLE_TAP_DELAY = 300;

      if (now - lastTap < DOUBLE_TAP_DELAY) {
        setCurrentGifIndex((prevIndex) =>
          prevIndex === GifTitles.length - 1 ? 0 : prevIndex + 1,
        );
      } else {
        if (introMessage === true) {
          setIntroMessage(false);
          setPlaying((prevProps) => !prevProps);
        }
      }

      setLastTap(now);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouch);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [playing, introMessage, volume, currentTrack, currentGifIndex, lastTap]);

  return (
    <Background currentGifIndex={currentGifIndex}>
      <div>
        <Head>
          <title>BREAKBEAT RADIO</title>
          <meta name="description" content="Welcome to the breakbeat zone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={"h-dvh flex flex-col justify-between"}>
          <div className={"fixed hidden items-center justify-center"}>
            <YouTubeEmbed
              videoId={currentTrack}
              setCurrentTrack={setCurrentTrack}
              play={playing}
              volume={volume}
            />
          </div>

          <div
            className={`${styles.row} justify-between pt-3 p-8 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-blue-500`}
          >
            <h1 className={`${styles.title} `}>BREAKBEAT RADIO</h1>
            <HelperPanel showHelp={showHelp} />
          </div>

          <div
            className={`${styles.row} text-white align-center pb-3 p-8 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-blue-500`}
          >
            {introMessage ? (
              <p className={`text-2xl`}>
                {isMobile
                  ? "Tap to start playing..."
                  : "Press space to start playing..."}
              </p>
            ) : (
              <div>
                <div className={styles.row}>
                  <MusicPlayerBar
                    volume={volume}
                    setVolume={setVolume}
                    playing={playing}
                    setPlaying={setPlaying}
                    currentTrack={currentTrack}
                    setCurrentTrack={setCurrentTrack}
                    isMobile={isMobile}
                  />
                </div>
                <div className={`${styles.row} mt-2`}>
                  <NowPlaying
                    playing={playing}
                    videoId={currentTrack}
                    isMobile={isMobile}
                  />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </Background>
  );
};

export default Home;
