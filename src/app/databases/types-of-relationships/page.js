// side by side r1
import SideNavbar4 from "../../components/side-navbar4";
import TypesOfRelationships from "../../components/types-of-relationships";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar4 />
        <TypesOfRelationships />
      </div>
    </div>
  );
}
