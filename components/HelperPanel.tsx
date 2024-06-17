import { IoLogoGithub } from "react-icons/io";

const iconSize = 28;

export const HelperPanel = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <a target="_blank" href="https://github.com/boxplayer/breakbeat-radio">
        <IoLogoGithub
          className={"hover:scale-125 pl-1"}
          color="white"
          size={iconSize}
        />
      </a>
      <div className="desktop text-white text-xl mt-3">
        <div>{"h ‎ hide/show"}</div>
        <div>{"g ‎ change gif"}</div>
        <div>{"r ‎ random mix"}</div>
        <div>{"→ ‎ next mix"}</div>
        <div>{"← ‎ previous mix"}</div>
        <div>{"↑ ‎ volume up"}</div>
        <div>{"↓ ‎ volume down"}</div>
      </div>
    </div>
  );
};
