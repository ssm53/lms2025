// side by side r1
import SideNavbar from "../../components/side-navbar";
import AndOrOperators from "../../components/and-or-operator";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar />
        <AndOrOperators />
      </div>
    </div>
  );
}
