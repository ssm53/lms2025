/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsEnv() {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="space-y-6">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's allow the public to see specific events posted!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              If we go to our homepage e.g. src/routes/+page.svelte in the
              browser, you might have noticed that when you click on a specific
              job, it takes you to a new route(e.g. /events/1 or /events/2), and
              there's an error. Well, there's an error cause we have not set up
              this page yet!
            </h2>
            <p className="mt-2">
              So, let's do that! Create a folder at src/routes/events .
            </p>{" "}
            <br />
            <p>
              Now that solves our /events... but what about the /1 or the /2?
              Well, that is the id of that specific event. When the user posted
              an event, in our backend we gave it an id.{" "}
            </p>
            <br />
            <p>
              So you might think that under the events folder, we create another
              folder src/routes/events/jobId... but imagine there are 100
              events... are we really going to create 100 different folders for
              each job?
            </p>
            <br />
            <p>
              Luckily there's an easier way.. in your /events folder, create
              another folder src/routes/events/[slug]
            </p>
            <br />
            <p>And in [slug], create two files - +page.js and +page.svelte.</p>
            <br />
            <p>In src/routes/events/[slug]/+page.js,</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

export async function load({ fetch, params }) {
	const resp = await fetch(PUBLIC_BACKEND_BASE_URL + \`/get-event/\${params.slug}\`);

	const res = await resp.json();

	if (resp.status == 200) {
		console.log({ job: res });
		return {
			event: res
		};
	} else {
		return {
			event: []
		};
	}
}
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

export async function load({ fetch, params }) {
	const resp = await fetch(PUBLIC_BACKEND_BASE_URL + \`/get-event/\${params.slug}\`);

	const res = await resp.json();

	if (resp.status == 200) {
		console.log({ job: res });
		return {
			event: res
		};
	} else {
		return {
			event: []
		};
	}
}
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Here, we are creating a +page.js, because just like the home page
              we are doing a GET request and that can take time. Did you notice
              the params.slug? In this request, we are trying to get infomration
              about a specific event. How do we know which event to look for?
            </p>
            <br />
            <p>
              let's take a look at one line of code in our
              src/routes/+page.svelte.
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<a
				href="/events/{event.id}"
				class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
			>
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`<a
				href="/events/{event.id}"
				class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
			>
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Here, when someone clicks one of the event boxes, it redirects us
              to /events/jobId...now, our +page.js is smart, and since we set up
              our folder as such - /events/[slug], the +page.js inside of [slug]
              can figure out which jobId to get information about. We then pass
              this jobId into params.slug!
            </p>
            <br />
            <p>
              That might be slightly confusing but take your time and try to
              digest it!
            </p>
            <br />
            <p>Now, in your src/routes/events/[slug]/+page.svelte, </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<script>
	import { goto } from '$app/navigation';

	export let data;
</script>

<main class="container mx-auto py-8">
	<div class="bg-white shadow-md rounded-lg p-6">
		<h1 class="text-2xl font-bold text-gray-800 mb-4">{data.event.name}</h1>
		<p class="text-gray-600 mb-2">
			<span class="font-medium">Organisation:</span>
			{data.event.organisation}
		</p>
		<p class="text-gray-600 mb-2">
			<span class="font-medium">Location:</span>
			{data.event.location}
		</p>
		<p class="text-gray-600 mb-2"><span class="font-medium">Time:</span> {data.event.time}</p>
		<p class="text-gray-600 mb-4"><span class="font-medium">About:</span> {data.event.about}</p>
		<p class="text-right text-indigo-600 font-medium">{data.event.rsvp}</p>
	</div>
</main>

`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`<script>
	import { goto } from '$app/navigation';

	export let data;
</script>

<main class="container mx-auto py-8">
	<div class="bg-white shadow-md rounded-lg p-6">
		<h1 class="text-2xl font-bold text-gray-800 mb-4">{data.event.name}</h1>
		<p class="text-gray-600 mb-2">
			<span class="font-medium">Organisation:</span>
			{data.event.organisation}
		</p>
		<p class="text-gray-600 mb-2">
			<span class="font-medium">Location:</span>
			{data.event.location}
		</p>
		<p class="text-gray-600 mb-2"><span class="font-medium">Time:</span> {data.event.time}</p>
		<p class="text-gray-600 mb-4"><span class="font-medium">About:</span> {data.event.about}</p>
		<p class="text-right text-indigo-600 font-medium">{data.event.rsvp}</p>
	</div>
</main>

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
