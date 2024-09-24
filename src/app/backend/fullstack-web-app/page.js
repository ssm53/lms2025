// side by side r1
import SideNavbar5 from "../../components/side-navbar5";
import FullstackWebApp from "../../components/full-stack-web-app";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar5 />
        <FullstackWebApp />
      </div>
    </div>
  );
}
