// side by side r1
import SideNavbar from "../../components/side-navbar";
import PreBootcampGeneralTips from "../../components/pre-bootcamp-general-tips";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <PreBootcampGeneralTips />
      </div>
    </div>
  );
}
