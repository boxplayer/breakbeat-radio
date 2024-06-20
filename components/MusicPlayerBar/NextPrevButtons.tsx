import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { TrackIds } from "../YouTubeEmbed";

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
      className={"hover:scale-125 pl-1"}
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
      className={"hover:scale-125 pl-1"}
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
