import ApplyNow from "../components/apply-now";
import Navbar from "@/app/components/navbar";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex mt-[64px] h-[100vh]">
        <ApplyNow />
      </div>
    </div>
  );
}
