/* eslint-disable react/no-unescaped-entities */
// SIDE BY SIDE R!
"use client";
import { Button } from "@/components/ui/button";

export default function ConcurrencyAndParallelism() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Understanding Concurrency and Parallelism in Programming
          </h1>
          {/* <p className="mt-2 text-muted-foreground">Welcome to our syllabus</p> */}
        </div>
        <div className="space-y-8">
          <div>
            <p className="mt-2">
              When programming, the ability to handle multiple tasks
              simultaneously is crucial. It enhances the responsiveness of
              applications and enables them to serve multiple users effectively.
              While delving deeply into concurrency and parallelism is beyond
              this bootcamp's scope, it's essential to grasp the basics,
              especially since JavaScript inherently supports asynchronous
              operations, or non-blocking I/O.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              Asynchronous vs. Parallelism
            </h2>
            <p className="mt-2">
              Asynchronous operations in JavaScript don't mean true parallelism.
              Instead, they allow the program to manage multiple tasks
              efficiently on a single thread. Essentially, while JavaScript
              waits for a task (like an API call, file read/write, or database
              query) to complete, it can proceed with other tasks instead of
              idly waiting. This approach is similar to preparing other
              ingredients while waiting for water to boil when cooking instant
              noodles.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">Event Loop in Javascript</h2>
            <p className="mt-2">
              JavaScript uses an event loop to manage these asynchronous tasks.
              When an operation involves waiting, JavaScript initiates it and
              then returns it to the event loop. Meanwhile, it utilizes the CPU
              to execute other tasks. This mechanism ensures efficient use of
              resources, even though only one task runs at a time.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              Challenges with CPU-bound Tasks
            </h2>
            <p className="mt-2">
              JavaScript's single-threaded nature poses challenges for
              CPU-intensive tasks. However, in most web development scenarios,
              CPU-bound operations are rare. For those instances where
              performance is critical, Node.js offers ways to leverage multiple
              threads and cores. Although this bootcamp doesn't cover those
              techniques, you can explore them in resources online.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              Considering Other Languages for Intensive Tasks
            </h2>
            <p className="mt-2">
              For heavily CPU-bound tasks, you might consider other programming
              languages like Rust or Golang. Golang, in particular, is a good
              next step after mastering Node.js due to its simplicity and
              efficiency. Rust, while more challenging to learn, offers
              unmatched performance.
            </p>{" "}
            <br />
            <h2 className="text-xl font-semibold">
              Optimized Code Over Language Choice
            </h2>
            <p className="mt-2">
              Ultimately, writing optimized code is more critical than the
              language used. Effective JavaScript programming can achieve
              impressive performance and support substantial business
              applications. In real-world scenarios, developer productivity
              often outweighs raw technical performance. By understanding these
              concepts, you'll be better prepared to handle asynchronous tasks
              in JavaScript, ensuring your applications are efficient and
              responsive.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
