// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import SetUpAProjectLikeAPro from "../../components/set-up-a-project-like-a-pro";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar2 />
        <SetUpAProjectLikeAPro />
      </div>
    </div>
  );
}
