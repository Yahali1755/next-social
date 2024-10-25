import ProfileCard from "./ProfileCard";
import Ad from "../Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <Ad size="sm"/>
    </div>
  );
};

export default LeftMenu;
