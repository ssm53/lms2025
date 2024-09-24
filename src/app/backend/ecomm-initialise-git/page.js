// side by side r1
import SideNavbar5 from "../../components/side-navbar5";
import EcommInitialiseGit from "../../components/ecomm-initialise-git";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar5 />
        <EcommInitialiseGit />
      </div>
    </div>
  );
}
