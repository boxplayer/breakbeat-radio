import { IoLogoGithub } from "react-icons/io";

const iconSize = 28;

export const SocialMediaButtons = ({ showHelp }: { showHelp: boolean }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="pl-10">
        <a target="_blank" href="https://github.com/boxplayer/breakbeat-radio">
          <IoLogoGithub
            className={"hover:scale-125 pl-1"}
            color="white"
            size={iconSize}
          />
        </a>
      </div>
      {showHelp && (
        <div className="text-white text-xl mt-3">
          <div>{"h ‎ hide/show"}</div>
          <div>{"g ‎ change gif"}</div>
          <div>{"→ ‎ next mix"}</div>
          <div>{"← ‎ previous mix"}</div>
          <div>{"↑ ‎ volume up"}</div>
          <div>{"↓ ‎ volume down"}</div>
        </div>
      )}
    </div>
  );
};
