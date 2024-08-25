"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Homepage from "./components/homepage";
import { useAuth } from "./context/AuthContext"; // Adjust the path if needed //

export default function Page() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) {
      router.push("/sign-in");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn === null) {
    return null; // You can replace this with a loading spinner if you prefer
  }

  return (
    <div>
      <Homepage />
    </div>
  );
}
