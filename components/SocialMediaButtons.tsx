import {
  FaTwitterSquare,
  FaTwitter,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const iconSize = 24;

export const SocialMediaButtons = () => {
  return (
    <div className={`flex items-center pl-10`}>
      <FaTwitterSquare
        className={"hover:ring-black m-1"}
        color="white"
        size={iconSize}
      />
      <FaFacebookSquare
        className={"hover:bg-black m-1"}
        color="white"
        size={iconSize}
      />
      <FaInstagramSquare
        className={"hover:bg-black m-1"}
        color="white"
        size={iconSize}
      />
    </div>
  );
};
