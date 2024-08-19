// side by side r1
import Navbar from "@/app/components/navbar";
import RegisterPage from "../components/register";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <RegisterPage />
      </div>
    </div>
  );
}
