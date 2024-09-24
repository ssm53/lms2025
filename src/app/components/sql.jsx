/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Sql() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Great, let's learn about SQL.
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              SQL is a programming language, and it is used to query databases.
            </h2>
            <br />
            <p>
              Imagine this - for simplicity, let's assume we have stored this
              one table of students in our database. In that table, we have
              student's name, age, address, test-scores, number-of-fails, and
              student's job. Let's imagine this table has a 1000 students.
            </p>
            <br />
            <p>Now, we want to get information from this database, such as:</p>
            <br />
            <p>
              1. I want to get students who are of age 21 and above, and is
              living in Kuala Lumpur, and has never failed, and has a
              test-scores that are always between 70 and 90.
            </p>
            <br />
            <p>
              2. I want to get students who live in Sabah, and have failed
              twice, and has a job as an accountant
            </p>
            <br />
            <p>
              As you can see, to get this data manually from the table is really
              hard, annd therefore developers found a way around this, using SQL
              databases. SQL databases can be queried using SQL language.
            </p>
            <br />
            <p>Enough with yapping, and let's get straight to it!</p>
            <br />
            <span>
              This is a great website to learn and practice SQL queries. Try it
              out...until Exercise 6.. that should be enough for you.
            </span>{" "}
            <Link
              href="https://sqlzoo.net/wiki/SQL_Tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Click here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
