// side by side r1
import SideNavbar from "../../components/side-navbar";
import IntroToFunctions from "../../components/intro-to-functions";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar />
        <IntroToFunctions />
      </div>
    </div>
  );
}
