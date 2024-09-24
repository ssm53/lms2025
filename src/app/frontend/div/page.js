// side by side r1
import SideNavbar3 from "../../components/side-navbar3";
import DivTag from "../../components/div";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar3 />
        <DivTag />
      </div>
    </div>
  );
}
