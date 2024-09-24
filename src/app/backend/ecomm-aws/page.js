// side by side r1
import SideNavbar5 from "../../components/side-navbar5";
import EcommAws from "../../components/ecomm-aws";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar5 />
        <EcommAws />
      </div>
    </div>
  );
}
