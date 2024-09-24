// side by side r1
import SideNavbar from "../../components/side-navbar";
import HtmlAndCssBasics from "../../components/html-and-css-basics";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar />
        <HtmlAndCssBasics />
      </div>
    </div>
  );
}
