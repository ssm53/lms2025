/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function PreBootcampWelcome() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Welcome
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Hello to you all!</h2>
            <p className="mt-2">
              These next two modules are short and sweet and the aim is to equip
              you with the right amount of knowledge to start BUILDING WEB APPS!
              I don't want you to waste time learning unneccesary theory.
            </p>{" "}
            <br />
            <p className="mt-2">
              This module is basically the same as if you type "Javascript
              Beginner Tutorial Playlist" on Youtube, but many of them are
              really long and makes you learn unneccesary info. I only included
              mandatory stuff that you need to learn in order to start building
              web apps! Let's be efficient about it.
            </p>{" "}
            <br />
            <p>
              This, together with the next module should be your last
              'Javascript Beginner Tutorial'. After this, build projects.
            </p>{" "}
            <br />
            <p>Programming is 90% practice, 10% theory.</p>
            <br />
            Let's go!
            <br/><br/>
            <p>Before I continue, the curriculum is structured as such:</p>
            <ul><li><strong>Pre-bootcamp</strong> - this is where you learn the basics of coding. It will mainly be tutorial videos and exercises for you to practice on.</li><br/>
            <li><strong>Further Essentials -</strong> this is where you get deeper into the more advanced basics, before you start building a proper full-stack project. Here, video tutorials stop as it takes longer for you to learn. Its faster to read, copy and paste.</li>
            <br></br><li><strong>Frontend -</strong> You'll get your hands dirty building an app. No videos. You will learn HTML, CSS, Tailwind, Sveltekit</li>
            <br></br><li><strong>Databases - </strong>You'll learn how to store information in databases. Tools include Prisma, Postgres, SQL. </li>
            <br></br><li><strong>Backend -</strong> You'll learn AWS, Docker, Nodejs, ExpressJS. </li></ul>
          </div>
         
         
        </div>
      </div>
    </div>
  );
}
