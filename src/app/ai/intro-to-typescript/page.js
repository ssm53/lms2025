// side by side r1
import SideNavbar7 from "../../components/side-navbar7";
import Navbar from "@/app/components/navbar";
import IntroToTypescript from "@/app/components/intro-to-typescript";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar7 />
        <IntroToTypescript />
      </div>
    </div>
  );
}
