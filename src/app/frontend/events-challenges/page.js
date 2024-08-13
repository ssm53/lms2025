// side by side r1
import SideNavbar3 from "../../components/side-navbar3";
import EventsChallenges from "../../components/events-challenges";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar3 />
        <EventsChallenges />
      </div>
    </div>
  );
}
