/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsLogout() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Allow Users to Logout
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              You won't be needing this now, but you will need it later.
            </h2>
            <p className="mt-2">
              Again, this is a common function, so we write it in our
              src/utils/auth.js as such
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`// setting empty auth so that logput function can use..
const emptyAuth = {
	token: '',
	userId: ''
};

export function logOut() {
	localStorage.setItem('auth', JSON.stringify(emptyAuth));
	// later on, you'll need to add something here
	goto('/sign-in');

	return true;
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`// setting empty auth so that logput function can use..
const emptyAuth = {
	token: '',
	userId: ''
};

export function logOut() {
	localStorage.setItem('auth', JSON.stringify(emptyAuth));
	// later on, you'll need to add something here
	goto('/sign-in');

	return true;
}
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
