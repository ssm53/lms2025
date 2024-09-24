/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsEnv() {
  return (
    <div className="flex w-full justify-center px-4 overflow-y-scroll py-[5rem] h-[90vh]">
      <div className="space-y-6 w-[60%]">
        <div className="text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Now that users can regiser and login...
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              let's allow them to post events for the public to see.
            </h2>
            <p className="mt-2">
              Go ahead and make a new file src/routes/post-event/+page.svelte.
              In there,
            </p>{" "}
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { getUserId } from '../../utils/auth';
	// import { getUserTokenFromLocalStorage } from '../../utils/auth';
	// import { writable } from 'svelte/store';
	// import { DateTime } from 'luxon';
	// import { appointmentsWaiting } from '../../stores/store';

	let formErrors = {};
	// teach this part!
	let userId = getUserId();

	export function afterPostEvent() {
		goto('/');
	}

	export async function postEvent(evt) {
		const eventData = {
			name: evt.target['name'].value,
			organisation: evt.target['organisation'].value,
			location: evt.target['location'].value,
			time: evt.target['time'].value,
			about: evt.target['about'].value,
			rsvp: evt.target['rsvp'].value,
			userId: userId
		};

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/post-event', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(eventData)
		});

		const res = await resp.json();
		console.log(res);

		if (resp.status == 200) {
			afterPostEvent();
			formErrors = {};
		} else {
			console.log('no');
			if (res.error) {
				formErrors = res.error;
				console.log(formErrors);
			}
		}
	}
</script>

<main class="container mx-auto py-8">
	<div class="flex justify-center items-center new-patient">
		<form on:submit|preventDefault={postEvent} class="w-1/2 bg-white shadow-md rounded-lg p-8">
			<div class="mb-6">
				<label for="name" class="block text-gray-700 text-sm font-bold mb-2"> Name * </label>
				<input
					type="text"
					name="name"
					placeholder="Enter name"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'name' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.name}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="organisation" class="block text-gray-700 text-sm font-bold mb-2">
					Organisation *
				</label>
				<input
					type="text"
					name="organisation"
					placeholder="Enter organisation"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'organisation' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.organisation}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="location" class="block text-gray-700 text-sm font-bold mb-2">
					Location *
				</label>
				<input
					type="text"
					name="location"
					placeholder="Enter location"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'location' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.location}</p>
				{/if}
			</div>

			<div class="mb-6">
				<label for="time" class="block text-gray-700 text-sm font-bold mb-2"> Time * </label>
				<input
					type="text"
					name="time"
					placeholder="Enter time"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'time' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.time}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="about" class="block text-gray-700 text-sm font-bold mb-2"> About * </label>
				<input
					type="text"
					name="about"
					placeholder="Enter about"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'about' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.about}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="rsvp" class="block text-gray-700 text-sm font-bold mb-2"> RSVP * </label>
				<input
					type="text"
					name="rsvp"
					placeholder="Enter about"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'rsvp' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.rsvp}</p>
				{/if}
			</div>

			<div class="flex justify-end">
				<button
					class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
					type="submit"
				>
					Post Event
				</button>
			</div>
		</form>
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
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';
	import { getUserId } from '../../utils/auth';
	// import { getUserTokenFromLocalStorage } from '../../utils/auth';
	// import { writable } from 'svelte/store';
	// import { DateTime } from 'luxon';
	// import { appointmentsWaiting } from '../../stores/store';

	let formErrors = {};
	// teach this part!
	let userId = getUserId();

	export function afterPostEvent() {
		goto('/');
	}

	export async function postEvent(evt) {
		const eventData = {
			name: evt.target['name'].value,
			organisation: evt.target['organisation'].value,
			location: evt.target['location'].value,
			time: evt.target['time'].value,
			about: evt.target['about'].value,
			rsvp: evt.target['rsvp'].value,
			userId: userId
		};

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/post-event', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(eventData)
		});

		const res = await resp.json();
		console.log(res);

		if (resp.status == 200) {
			afterPostEvent();
			formErrors = {};
		} else {
			console.log('no');
			if (res.error) {
				formErrors = res.error;
				console.log(formErrors);
			}
		}
	}
</script>

<main class="container mx-auto py-8">
	<div class="flex justify-center items-center new-patient">
		<form on:submit|preventDefault={postEvent} class="w-1/2 bg-white shadow-md rounded-lg p-8">
			<div class="mb-6">
				<label for="name" class="block text-gray-700 text-sm font-bold mb-2"> Name * </label>
				<input
					type="text"
					name="name"
					placeholder="Enter name"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'name' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.name}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="organisation" class="block text-gray-700 text-sm font-bold mb-2">
					Organisation *
				</label>
				<input
					type="text"
					name="organisation"
					placeholder="Enter organisation"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'organisation' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.organisation}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="location" class="block text-gray-700 text-sm font-bold mb-2">
					Location *
				</label>
				<input
					type="text"
					name="location"
					placeholder="Enter location"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'location' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.location}</p>
				{/if}
			</div>

			<div class="mb-6">
				<label for="time" class="block text-gray-700 text-sm font-bold mb-2"> Time * </label>
				<input
					type="text"
					name="time"
					placeholder="Enter time"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'time' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.time}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="about" class="block text-gray-700 text-sm font-bold mb-2"> About * </label>
				<input
					type="text"
					name="about"
					placeholder="Enter about"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'about' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.about}</p>
				{/if}
			</div>
			<div class="mb-6">
				<label for="rsvp" class="block text-gray-700 text-sm font-bold mb-2"> RSVP * </label>
				<input
					type="text"
					name="rsvp"
					placeholder="Enter about"
					class="block w-full rounded-md py-2 px-3 border border-gray-300"
					required
				/>
				{#if 'rsvp' in formErrors}
					<p class="text-red-500 text-xs mt-1">{formErrors.rsvp}</p>
				{/if}
			</div>

			<div class="flex justify-end">
				<button
					class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
					type="submit"
				>
					Post Event
				</button>
			</div>
		</form>
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
            <p>
              You will get an error, but that's okay. In the code, you might
              have noticed the function getUserId() in there... we do that
              because when we send our request to the backend, we want to let
              our api know who is posting the event. In programming, it almost
              always good to associate an entity with an id instead of a name,
              cause the id will always be unique. So yeah, we need to be able to
              get the userId and pass it into our request... but how?
            </p>
            <br />
            <p>
              So this getUserId() is one of our common functions, and we write
              our common function in our src/utils/auth.js.
            </p>
            <br />
            <p>In there,</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`export function getUserId() {
	const auth = localStorage.getItem('auth');
	if (auth) {
		return JSON.parse(auth)['user'];
	}
	return null;
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`export function getUserId() {
	const auth = localStorage.getItem('auth');
	if (auth) {
		return JSON.parse(auth)['user'];
	}
	return null;
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
