import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";

function Content() {
  return (
    <div className="flex justify-between container mx-auto px-28 py-4 bg-gradient-to-r from-second to-[#221A39]">
      <LeftContent />
      <RightContent />
    </div>
  );
}

export default Content;
