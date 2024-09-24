// side by side r1
import SideNavbar from "../../components/side-navbar";
import ChangeDataTypesAndConst from "../../components/change-datatype-and-const";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar />
        <ChangeDataTypesAndConst />
      </div>
    </div>
  );
}
