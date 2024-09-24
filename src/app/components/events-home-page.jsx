/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsHomePage() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's do the home page!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Here, as you can imagine, we want to show all of the events which
              have been posted on our platform.
            </h2>
            <p className="mt-2">
              Now that you've got everything set up, in your
              src/routes/+page.svelte in your script tags,
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`cosnt resp = await fetch("url")
  const res = await resp.json()
  console.log(res)`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`cosnt resp = await fetch("url")
  const res = await resp.json()
  console.log(res)`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Basically we store the response in our resp variable, and we
              needed to convert that response from json into code, so we used
              .json() and stored it in res. Check out what res looks like in
              your VScode terminal.
            </p>
            <br />
            <p>
              Now,delete that code and populate your src/routes/+page.svelte
            </p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<script>
	export let data;
</script>

<main class="container mx-auto py-12">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.allEvents as event}
			<a
				href="/events/{event.id}"
				class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
			>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
				<p class="text-sm text-gray-500 mb-4">{event.organisation}</p>
				<div class="flex items-center justify-between text-gray-600 mb-4">
					<span class="text-sm">{event.location}</span>
					<span class="text-sm">{event.time}</span>
				</div>
				<p class="text-gray-700 mb-4">{event.about}</p>
				<p class="text-right text-indigo-600 font-medium">{event.rsvp}</p>
			</a>
		{/each}
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
	export let data;
</script>

<main class="container mx-auto py-12">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.allEvents as event}
			<a
				href="/events/{event.id}"
				class="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
			>
				<h3 class="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
				<p class="text-sm text-gray-500 mb-4">{event.organisation}</p>
				<div class="flex items-center justify-between text-gray-600 mb-4">
					<span class="text-sm">{event.location}</span>
					<span class="text-sm">{event.time}</span>
				</div>
				<p class="text-gray-700 mb-4">{event.about}</p>
				<p class="text-right text-indigo-600 font-medium">{event.rsvp}</p>
			</a>
		{/each}
	</div>
</main>
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>src/routes/+page.js</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
// import { getDoctorTokenFromLocalStorage, getUserTokenFromLocalStorage } from '../utils/auth.js';
// import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	// // here if there is no doctor token, then redirect to home page
	// if (!getDoctorTokenFromLocalStorage() && !getUserTokenFromLocalStorage()) {
	// 	throw redirect(307, '/sign-in');
	// }
	const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/all-events');

	const res = await resp.json();
	if (resp.status == 200) {
		return {
			allEvents: res.allEvents
		};
	} else {
		return {
			allEvents: []
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
// import { getDoctorTokenFromLocalStorage, getUserTokenFromLocalStorage } from '../utils/auth.js';
// import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	// // here if there is no doctor token, then redirect to home page
	// if (!getDoctorTokenFromLocalStorage() && !getUserTokenFromLocalStorage()) {
	// 	throw redirect(307, '/sign-in');
	// }
	const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/all-events');

	const res = await resp.json();
	if (resp.status == 200) {
		return {
			allEvents: res.allEvents
		};
	} else {
		return {
			allEvents: []
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
              As you can see, we made our request in +page.js, which runs behind
              the scenes before +page.svelte gets shown to the user. We didnt
              write our GET request in +page.svelte because there might be a 1-2
              second delay for us to get a response from the API, and we don't
              want to leave the user in the page thinking something went wrong.
              Instead, we write in +page.js and only when we get the response
              from the API, then only +page.svelte gets shown to the user.
            </p>
            <br />
            <p>
              Go and console.log(data), and see what it prints out. It
              essentially gets the data from +page.js for us to use in our
              +page.svelte. I know the export seems weird there, but it is just
              convention in svelte to use export let data.
            </p>
          </div>
          <br />
          <p>
            Type npm run dev in your vs code terminal and check it out on your
            browser!
          </p>
        </div>
      </div>
    </div>
  );
}
