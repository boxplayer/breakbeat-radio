import { lofiIds } from ".";

export const RandomTrackButton = ({
  setCurrentTrack,
}: {
  setCurrentTrack: (value: string) => void;
}) => (
  <button
    onClick={() => setCurrentTrack(lofiIds[Math.floor(Math.random() * 5)])}
  >
    random track
  </button>
);
