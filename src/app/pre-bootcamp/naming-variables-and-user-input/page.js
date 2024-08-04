// side by side r1
import SideNavbar from "../../components/side-navbar";
import NamingVariablesAndUserInput from "../../components/naming-variables-and-user-input";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <NamingVariablesAndUserInput />
      </div>
    </div>
  );
}
