// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import MacOs from "../../components/macos";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar2 />
        <MacOs />
      </div>
    </div>
  );
}
