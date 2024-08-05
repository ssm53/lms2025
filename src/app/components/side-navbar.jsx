// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/i1R2WU5cCBD
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link";

// export default function SideNavbar() {
//   return (
//     <nav className="flex flex-col items-start gap-6 bg-background px-4 py-6 sm:w-56">
//       <Link
//         href="#"
//         className="text-lg font-semibold text-primary"
//         prefetch={false}
//       >
//         Pre-bootcamp
//       </Link>
//       <Link
//         href="#"
//         className="text-base font-medium text-muted-foreground hover:text-foreground"
//         prefetch={false}
//       >
//         Schedule
//       </Link>
//       <Link
//         href="#"
//         className="text-base font-medium text-muted-foreground hover:text-foreground"
//         prefetch={false}
//       >
//         Welcome
//       </Link>
//       <Link
//         href="/pre-bootcamp/general-tips"
//         className="text-base font-medium text-muted-foreground hover:text-foreground"
//         prefetch={false}
//       >
//         General Tips
//       </Link>
//     </nav>
//   );
// }

// TRYING TO PUT IT SIDE BY SIDE R1
"use client";
import Link from "next/link";

export default function SideNavbar() {
  return (
    <nav className="flex flex-col items-start gap-6 bg-background px-4 py-6 sm:w-56 h-screen">
      <Link
        href="#"
        className="text-lg font-semibold text-primary"
        prefetch={false}
      >
        Pre-bootcamp
      </Link>
      <Link
        href="/pre-bootcamp/welcome"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Welcome
      </Link>
      <Link
        href="/pre-bootcamp/general-tips"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        General Tips
      </Link>
      <Link
        href="/pre-bootcamp/variables"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Variables
      </Link>
      <Link
        href="/pre-bootcamp/datatypes"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        3 Data Types
      </Link>
      <Link
        href="/pre-bootcamp/change-datatypes-and-const"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Changing Data Types & const vs let
      </Link>
      <Link
        href="/pre-bootcamp/arithmetic-expressions"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Arithmetic Expressions
      </Link>
      <Link
        href="/pre-bootcamp/naming-variables-and-user-input"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Naming Variables and User Input
      </Link>
      <Link
        href="/pre-bootcamp/exercise-1"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Exercise 1
      </Link>
      <Link
        href="/pre-bootcamp/intro-to-functions"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Intro to Functions
      </Link>
      <Link
        href="/pre-bootcamp/functions-with-variables"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Functions with Variables
      </Link>
      <Link
        href="/pre-bootcamp/html-and-css-basics"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        HTML and CSS Basics
      </Link>
      <Link
        href="/pre-bootcamp/your-first-app"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Your First App!
      </Link>
      <Link
        href="/pre-bootcamp/if-statements"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        If statements
      </Link>
      <Link
        href="/pre-bootcamp/strict-equality-operator"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Strict Equality Operator
      </Link>
      <Link
        href="/pre-bootcamp/and-or-operators"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        And & OR operator
      </Link>
      <Link
        href="/pre-bootcamp/not-operator"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        Not Operator
      </Link>
      <Link
        href="/pre-bootcamp/while-loop"
        className="text-base font-medium text-muted-foreground hover:text-foreground"
        prefetch={false}
      >
        While Loop
      </Link>
    </nav>
  );
}
