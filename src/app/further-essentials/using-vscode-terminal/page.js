// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import UsingVsCodeTerminal from "../../components/using-vscode-terminal";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar2 />
        <UsingVsCodeTerminal />
      </div>
    </div>
  );
}
