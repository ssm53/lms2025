/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EcommCheckTables() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Now now, we have created tables using prisma, but how do we check
            them?
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <p className="mt-2">
              Now, go to your .env.development, and copy the value of
              POSTGRES_USER, without the double quotes. In our case, it will be
              ecomm-platform-be .
            </p>{" "}
            <br />
            <p>
              Go to the left side navigations icons of VSCode. Under Live Share,
              you will see SQLTools. Click on that! Now click 'Add New
              Connection'
            </p>
            <br />
            <p>
              In here, choose PostgreSQL. Once you have done that, fill up the
              form as such and you dont need to bother about the other fields:{" "}
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/see-tables.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Click Test Connection, and you will need to type in your password
              at the top. Your password will be ecomm-platform-be
            </p>
            <br />
            <p>Once your connection is successful, click Connect Now.</p>
            <br />
            <p>
              Now, to view your tables, click on SQLTools on the left side of
              VSCode, and you will see something on the top left. Keep clicking
              until you reach this:
            </p>
            <br />
            <div className="relative w-full h-64">
              <Image
                src="/see-tables2.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain" // Ensures the whole image fits within the container
                className="rounded-md"
              />
            </div>
            <br />
            <p>
              Now, for you there wont be any image table, as you have not done
              it yet, but you will see a User table. Click on the magnifying
              glass to check your table and see the users you have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
