// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import IntroToAPI from "../../components/intro-to-api";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar2 />
        <IntroToAPI />
      </div>
    </div>
  );
}
