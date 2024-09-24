// side by side r1
import SideNavbar from "../../components/side-navbar";
import Variables from "../../components/variables";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar />
        <Variables />
      </div>
    </div>
  );
}
