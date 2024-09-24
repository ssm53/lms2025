// side by side r1
import SideNavbar from "../../components/side-navbar";
import NotOperator from "../../components/not-operator";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar />
        <NotOperator />
      </div>
    </div>
  );
}
