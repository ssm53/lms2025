// side by side r1
import SideNavbar from "../../components/side-navbar";
import WhileLoop from "../../components/while-loop";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar />
        <WhileLoop />
      </div>
    </div>
  );
}
//
