/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function IntroToDatabases() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Nice, you've made it this far. Now, let's look at databases.
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              You can think of databases as an organised collection of data.
            </h2>
            <br />
            <p>
              From our previous example, here is what a datbase normally looks
              like:
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/database-example.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Let me give you an analogy: let's say you want to store your
              clothes in your house... you normally use a cupboard to store your
              clothes... Now, if we want to build most useful applications on
              the web, we would need it to interact with data, and for that we
              need to store our data. To store our data, we would need
              databases.
            </p>
            <br />
            <p>
              When naming your tables and basically anything in databases, it's
              always best to name with singularised names... e.g. you want to
              create a table for students, and there will be many students....
              even though there are many students, we should call the table
              student and not students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
