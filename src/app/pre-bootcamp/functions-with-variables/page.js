// side by side r1
import SideNavbar from "../../components/side-navbar";
import FunctionsWithVariables from "../../components/functions-with-variables";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <FunctionsWithVariables />
      </div>
    </div>
  );
}
