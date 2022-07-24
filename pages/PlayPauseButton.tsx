export const PlayPauseButton = ({
  playing,
  setPlaying,
}: {
  playing: boolean;
  setPlaying: (value: boolean) => void;
}) =>
  playing ? (
    <button onClick={() => setPlaying(false)}>pause</button>
  ) : (
    <button onClick={() => setPlaying(true)}>play</button>
  );
