// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import NewsGathererApp from "../../components/news-gatherer-app";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar2 />
        <NewsGathererApp />
      </div>
    </div>
  );
}
