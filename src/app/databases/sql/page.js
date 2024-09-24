// side by side r1
import SideNavbar4 from "../../components/side-navbar4";
import Sql from "../../components/sql";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar4 />
        <Sql />
      </div>
    </div>
  );
}
