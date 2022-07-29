import React, { useEffect } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

var cElement: YouTubeEvent;

const opts = {
  playerVars: {
    autoplay: 0,
    mute: 0,
    disablekb: 1,
  },
};

export const YouTubeEmbed = ({
  videoId,
  play,
  volume,
}: {
  videoId: string;
  play: boolean;
  volume: string;
}) => {
  useEffect(() => {
    if (cElement) {
      const player = cElement.target;
      play ? player.playVideo() : player.pauseVideo();
      player.setVolume(volume);
    }
  }, [play, volume]);

  const storeEvent = (event: YouTubeEvent) => {
    cElement = event;
  };

  return (
    <YouTube
      videoId={videoId} // defaults -> ''
      opts={opts} // defaults -> {}
      onReady={storeEvent} // defaults -> noop
      //   onPlay={func} // defaults -> noop
      //   onPause={func} // defaults -> noop
      //   onEnd={func} // defaults -> noop
      //   onError={func} // defaults -> noop
      //   onStateChange={func} // defaults -> noop
      //   onPlaybackRateChange={func} // defaults -> noop
      //   onPlaybackQualityChange={func} // defaults -> noop
    />
  );
};
