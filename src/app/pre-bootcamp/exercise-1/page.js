// side by side r1
import SideNavbar from "../../components/side-navbar";
import Exercise1 from "../../components/exercise-1";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar />
        <Exercise1 />
      </div>
    </div>
  );
}
