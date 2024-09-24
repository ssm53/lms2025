// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import Map from "../../components/map";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar2 />
        <Map />
      </div>
    </div>
  );
}
