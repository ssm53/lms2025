// side by side r1
import SideNavbar3 from "../../components/side-navbar3";
import EventsUserRegister from "../../components/events-user-register";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SideNavbar3 />
        <EventsUserRegister />
      </div>
    </div>
  );
}
