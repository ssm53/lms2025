/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ViHQGuEgxA7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/sign-in");
    setIsLoggedIn(false);
  };

  return (
    <header className="flex items-center justify-between h-16 px-4 bg-background border-b sm:px-6 lg:px-8 fixed w-full">
      <Link href="/" className="text-lg font-bold" prefetch={false}>
        Home
      </Link>
      <nav className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            {/* <Link
              href="https://www.heylearn2code.com/"
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to HeyLearn2Code Website
            </Link>{" "} */}
            {/* <Link
              href="/apply-now"
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Apply Now
            </Link>{" "} */}
            <Button
              variant="ghost"
              className="hidden sm:inline-flex"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            {/* <Link
              href="/register"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Register
            </Link>{" "} */}
            <Link
              href="https://www.zezacademy.com/"
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Go to Zez Academy Website
            </Link>{" "}
            {/* <Link
              href="/apply-now"
              target="_blank"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Apply Now
            </Link>{" "} */}
            {/* <Button variant="ghost" className="hidden sm:inline-flex">
              Login
            </Button> */}
           <Link href="/sign-in">
  <Button variant="ghost" className="hidden sm:inline-flex">
    Login
  </Button>
</Link>
          </>
        )}
      </nav>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
