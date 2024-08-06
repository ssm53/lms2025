// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import ArrowFunctions from "../../components/arrow-functions";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar2 />
        <ArrowFunctions />
      </div>
    </div>
  );
}
