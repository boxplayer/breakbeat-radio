import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { TrackIds } from "../../pages";

export const NextPrevButtons = ({
  currentTrackIndex,
  setCurrentTrackIndex,
}: {
  currentTrackIndex: number;
  setCurrentTrackIndex: (value: number) => void;
}) => (
  <div className="flex flex-row space-x-2">
    <IoPlayBack
      size={30}
      onClick={() => {
        if (currentTrackIndex === 0) {
          setCurrentTrackIndex(TrackIds.length - 1);
        } else {
          setCurrentTrackIndex(currentTrackIndex - 1);
        }
      }}
    />
    <IoPlayForward
      size={30}
      onClick={() => {
        if (currentTrackIndex === TrackIds.length) {
          setCurrentTrackIndex(0);
        } else {
          setCurrentTrackIndex(currentTrackIndex + 1);
        }
      }}
    />
  </div>
);
