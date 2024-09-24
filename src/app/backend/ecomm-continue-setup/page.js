// side by side r1
import SideNavbar5 from "../../components/side-navbar5";
import EcommContinueSetup from "../../components/ecomm-continue-setup";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar5 />
        <EcommContinueSetup />
      </div>
    </div>
  );
}
