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
            Let's allow users to register!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              As you know, event managers need to register to the platform in
              order for them to post their events in here!
            </h2>
            <p className="mt-2">
              Go ahead and make a new folder src/routes/register
            </p>{" "}
            <br />
            <p>In /register/+page.svelte,</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<script>
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { goto } from '$app/navigation';

	let formErrors = {};

	export function postSignUp() {
		goto('/sign-in');
	}

	async function createUser(evt) {
		evt.preventDefault();

		const userData = {
			name: evt.target['name'].value,
			email: evt.target['email'].value,
			password: evt.target['password'].value
		};

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/users', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		if (resp.status == 200) {
			postSignUp();
		} else if (resp.status == 500) {
			// // spinner shits
			// loading.update((value) => {
			// 	return false;
			// });
			// signUpEmailTaken();
		} else {
			const res = await resp.json();
			if (res.error) {
				formErrors = res.error; // Update formErrors with validation errors
			}
		}
	}
</script>

<div class="bg-white min-h-screen">
	<header class="bg-gray-100 shadow">
		<div class="container mx-auto py-4">
			<h1 class="text-2xl font-semibold text-gray-900">Sign Up for an Account</h1>
		</div>
	</header>

	<main class="container mx-auto py-8">
		<!-- <Spinner /> -->
		<div class="flex justify-center items-center">
			<form on:submit={createUser} class="w-1/2 bg-white shadow-md rounded-lg p-8">
				<div class="mb-6">
					<label for="name" class="block text-gray-700 text-sm font-bold mb-2"> Name </label>
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
					/>
					{#if 'name' in formErrors}
						<p class="text-red-500 text-xs mt-1">{formErrors['name']}</p>
					{/if}
				</div>

				<div class="mb-6">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2"> Email </label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						required
					/>
					{#if 'email' in formErrors}
						<p class="text-red-500 text-xs mt-1">{formErrors['email']}</p>
					{/if}
				</div>

				<div class="mb-6">
					<label for="password" class="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						required
					/>
					{#if 'password' in formErrors}
						<p class="text-red-500 text-xs mt-1">{formErrors['password']}</p>
					{/if}
				</div>

				<div class="flex justify-end">
					<button
						class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
						type="submit"
					>
						Create an Account
					</button>
				</div>
			</form>
		</div>
	</main>
</div>
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

	let formErrors = {};

	export function postSignUp() {
		goto('/sign-in');
	}

	async function createUser(evt) {
		evt.preventDefault();

		const userData = {
			name: evt.target['name'].value,
			email: evt.target['email'].value,
			password: evt.target['password'].value
		};

		const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/users', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		if (resp.status == 200) {
			postSignUp();
		} else if (resp.status == 500) {
			// // spinner shits
			// loading.update((value) => {
			// 	return false;
			// });
			// signUpEmailTaken();
		} else {
			const res = await resp.json();
			if (res.error) {
				formErrors = res.error; // Update formErrors with validation errors
			}
		}
	}
</script>

<div class="bg-white min-h-screen">
	<header class="bg-gray-100 shadow">
		<div class="container mx-auto py-4">
			<h1 class="text-2xl font-semibold text-gray-900">Sign Up for an Account</h1>
		</div>
	</header>

	<main class="container mx-auto py-8">
		<!-- <Spinner /> -->
		<div class="flex justify-center items-center">
			<form on:submit={createUser} class="w-1/2 bg-white shadow-md rounded-lg p-8">
				<div class="mb-6">
					<label for="name" class="block text-gray-700 text-sm font-bold mb-2"> Name </label>
					<input
						type="text"
						name="name"
						placeholder="Enter your name"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
					/>
					{#if 'name' in formErrors}
						<p class="text-red-500 text-xs mt-1">{formErrors['name']}</p>
					{/if}
				</div>

				<div class="mb-6">
					<label for="email" class="block text-gray-700 text-sm font-bold mb-2"> Email </label>
					<input
						type="email"
						name="email"
						placeholder="Enter your email"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						required
					/>
					{#if 'email' in formErrors}
						<p class="text-red-500 text-xs mt-1">{formErrors['email']}</p>
					{/if}
				</div>

				<div class="mb-6">
					<label for="password" class="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						class="block w-full rounded-md py-2 px-3 border border-gray-300"
						required
					/>
					{#if 'password' in formErrors}
						<p class="text-red-500 text-xs mt-1">{formErrors['password']}</p>
					{/if}
				</div>

				<div class="flex justify-end">
					<button
						class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
						type="submit"
					>
						Create an Account
					</button>
				</div>
			</form>
		</div>
	</main>
</div>
`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              Here, note that instead of doing a GET request, I did a POST
              request. In general, a GET request is to get data from an API, and
              a POST request is used to give information/update info to an API.
              Here, we are letting our API know that there is new data
              (information of that user) to be stored in the backend.
            </p>
            <br />
            <p>
              Now, also note that depending on the status of the response, we do
              different things. If the status waas 200, which means all is good,
              we let users go ahead and sign in... dont worry if it shows an
              error if you go to /sign-in. We have not done yet. If the status
              was 500, we do something different and show the errors.
            </p>
            <br />
            <p>
              Always remember to check for errors in your terminal or browser
              console!
            </p>
            <p>
              Basically we store the response in our resp variable, and we
              needed to convert that response from json into code, so we used
              .json() and stored it in res. Check out what res looks like in
              your VScode terminal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
