// side by side r1
import SideNavbar2 from "../../components/side-navbar2";
import LessonPlan from "../../components/lesson-plan";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px]">
        <SideNavbar2 />
        <LessonPlan />
      </div>
    </div>
  );
}
