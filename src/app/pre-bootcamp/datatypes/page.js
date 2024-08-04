// side by side r1
import SideNavbar from "../../components/side-navbar";
import DataTypes from "../../components/datatypes";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <DataTypes />
      </div>
    </div>
  );
}
