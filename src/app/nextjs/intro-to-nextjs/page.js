import SideNavbar6 from "../../components/side-navbar6";
import IntroToNextJs from "../../components/intro-to-nextjs.jsx";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar6 />
        <IntroToNextJs />
      </div>
    </div>
  );
}
