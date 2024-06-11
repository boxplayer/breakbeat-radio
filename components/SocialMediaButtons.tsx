import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";

const iconSize = 24;

export const SocialMediaButtons = () => {
  return (
    <div className={`flex items-center pl-10`}>
      <IoLogoTwitter
        className={"hover:ring-black m-1"}
        color="white"
        size={iconSize}
      />
      <IoLogoFacebook
        className={"hover:bg-black m-1"}
        color="white"
        size={iconSize}
      />
      <IoLogoInstagram
        className={"hover:bg-black m-1"}
        color="white"
        size={iconSize}
      />
    </div>
  );
};
