// import SideNavbar from "../../components/side-navbar";
// import PreBootcampWelcome from "../../components/pre-bootcamp-welcome";

// export default function Page() {
//   return (
//     <div>
//       <SideNavbar />
//       <PreBootcampWelcome />
//     </div>
//   );
// }

// side by side r1
import SideNavbar from "../../components/side-navbar";
import PreBootcampWelcome from "../../components/pre-bootcamp-welcome";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <SideNavbar />
        <PreBootcampWelcome />
      </div>
    </div>
  );
}
