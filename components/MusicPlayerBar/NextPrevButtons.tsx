import { IoPlayForward, IoPlayBack } from "react-icons/io5";
import { TrackIds } from "../../pages";

export const NextPrevButtons = ({
  currentTrack,
  setCurrentTrack,
}: {
  currentTrack: string;
  setCurrentTrack: (value: string) => void;
}) => (
  <div className="flex flex-row space-x-2">
    <IoPlayBack
      size={30}
      onClick={() => {
        const currentTrackIndex = TrackIds.indexOf(currentTrack);
        if (currentTrackIndex === 0) {
          setCurrentTrack(TrackIds[TrackIds.length - 1]);
        } else {
          setCurrentTrack(TrackIds[currentTrackIndex - 1]);
        }
      }}
    />
    <IoPlayForward
      size={30}
      onClick={() => {
        const currentTrackIndex = TrackIds.indexOf(currentTrack);
        if (currentTrackIndex === TrackIds.length) {
          setCurrentTrack(TrackIds[0]);
        } else {
          setCurrentTrack(TrackIds[currentTrackIndex + 1]);
        }
      }}
    />
  </div>
);
