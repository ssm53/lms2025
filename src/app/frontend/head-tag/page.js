// side by side r1
import SideNavbar3 from "../../components/side-navbar3";
import HeadTag from "../../components/head-tag";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar3 />
        <HeadTag />
      </div>
    </div>
  );
}
