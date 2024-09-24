// side by side r1
import SideNavbar from "../../components/side-navbar";
import ForLoop from "../../components/for-loop";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar />
        <ForLoop />
      </div>
    </div>
  );
}
