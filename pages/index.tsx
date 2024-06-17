import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { MusicPlayerBar } from "../components/MusicPlayerBar";
import { HelperPanel } from "../components/HelperPanel";
import { getRandomTrackIndex } from "../components/MusicPlayerBar/RandomTrackButton";
import { GifTitles, Background } from "../components/Background";
import { TrackIds } from "../components/YouTubeEmbed";

const Home: NextPage = () => {
  const [introMessage, setIntroMessage] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(
    getRandomTrackIndex(),
  );
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [showHelp, setShowHelp] = useState(true);
  const [lastTap, setLastTap] = useState(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent): void {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
        return;
      }

      e.preventDefault();

      switch (e.code) {
        case "Space":
          if (introMessage) {
            setIntroMessage(false);
            setPlaying(true);
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
          break;

        case "KeyR":
          setCurrentTrackIndex(getRandomTrackIndex());
          break;

        case "KeyG":
          setCurrentGifIndex((c) => (c === GifTitles.length - 1 ? 0 : c + 1));
          break;

        case "KeyH":
          setShowHelp((prevProps) => !prevProps);
          break;
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
            {showHelp && <HelperPanel />}
          </div>
          <div className={`${styles.row} text-white align-center pb-3 p-8`}>
            {introMessage ? (
              <div>
                <p className={`text-2xl desktop`}>
                  {"Press space to start playing..."}
                </p>
                <p className={`text-2xl mobile`}>{"Tap to start playing..."}</p>
              </div>
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
