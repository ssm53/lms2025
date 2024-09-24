// side by side r1
import Navbar from "@/app/components/navbar";
import SignIn from "../components/sign-in";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <SignIn />
      </div>
    </div>
  );
}
