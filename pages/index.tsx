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
  "OL0NVBGEFoc",
];

const Home: NextPage = () => {
  const [introMessage, setIntroMessage] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [currentTrackIndex, setCurrentTrackIndex] =
    useState(getRandomTrackId());
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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      e.preventDefault();

      console.log(e.code);
      switch (e.code) {
        case "Space":
          if (introMessage) {
            setIntroMessage(false);
          } else {
            setPlaying((prevProps) => !prevProps);
          }
          break;

        case "ArrowDown":
          setVolume((prevProps) => prevProps - (prevProps <= 0 ? 0.0 : 0.2));
          break;

        case "ArrowUp":
          setVolume((prevProps) => prevProps + (prevProps >= 1 ? 0 : 0.2));
          break;

        case "ArrowLeft":
          setCurrentTrackIndex((c) => (c === 0 ? TrackIds.length - 1 : c - 1));
          break;

        case "ArrowRight":
          setCurrentTrackIndex((c) => (c === TrackIds.length ? 0 : c + 1));

        case "KeyR":
          setCurrentTrackIndex(getRandomTrackId());

        case "KeyG":
          setCurrentGifIndex((c) => (c === GifTitles.length - 1 ? 0 : c + 1));

        case "KeyH":
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
        }
        setPlaying((prevProps) => !prevProps);
      }

      setLastTap(now);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouch);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [introMessage, lastTap]);

  return (
    <Background currentGifIndex={currentGifIndex}>
      <div>
        <Head>
          <title>BREAKBEAT RADIO</title>
          <meta name="description" content="Welcome to the breakbeat zone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main
          className={
            "h-dvh flex flex-col justify-between drop-shadow-radio shadow-blue-500"
          }
        >
          <div className={"fixed hidden items-center justify-center"}>
            <YouTubeEmbed
              currentTrackIndex={currentTrackIndex}
              setCurrentTrackIndex={setCurrentTrackIndex}
              play={playing}
              volume={volume}
            />
          </div>
          <div className={`${styles.row} justify-between pt-3 p-8`}>
            <h1 className={`${styles.title} `}>BREAKBEAT RADIO</h1>
            <HelperPanel showHelp={showHelp} />
          </div>
          <div className={`${styles.row} text-white align-center pb-3 p-8`}>
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
                    currentTrackIndex={currentTrackIndex}
                    setCurrentTrackIndex={setCurrentTrackIndex}
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
