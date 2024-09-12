/* eslint-disable react/no-unescaped-entities */

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EventsUserSignIn() {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Let's allow users to sign in!
          </h1>
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              Now that they have registered, it'll be stupid not to allow them
              to login...
            </h2>
            <p className="mt-2">
              Go ahead and make a new folder src/routes/sign-in
            </p>{" "}
            <br />
            <p>In /sign-in/+page.svelte,</p>
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`<script>
	import { authenticateUser } from '../../utils/auth';
	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

	let formErrors = {};

	let email = '';
	let password = '';

	async function handleUserSubmit(event) {
		event.preventDefault();

		email = event.target.email.value;
		password = event.target.password.value;

		const res = await authenticateUser(email, password);

		if (res.success) {
			goto('/');
		} else {
			console.log('cannot login');

			if (res.res.error) {
				formErrors = res.res.error; // Update formErrors with validation errors
			}
			console.log(formErrors);
		}
	}
</script>

<!-- <Header /> -->

<div class="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				Sign in to your User account
			</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit={handleUserSubmit}>
			<input type="hidden" name="remember" value="true" />
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
					/>
					{#if 'email' in formErrors}
						<p class="text-red-500 text-sm mt-1">{formErrors['email']}</p>
					{/if}
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
					{#if 'password' in formErrors}
						<p class="text-red-500 text-sm mt-1">{formErrors['password']}</p>
					{/if}
				</div>
			</div>

			<div class="flex items-center justify-between">
				<div>
					<button
						type="submit"
						class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
					>
						Sign in
					</button>
				</div>
			</div>
		</form>
	</div>
</div>
`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText(`<script>
	import { authenticateUser } from '../../utils/auth';
	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';

	let formErrors = {};

	let email = '';
	let password = '';

	async function handleUserSubmit(event) {
		event.preventDefault();

		email = event.target.email.value;
		password = event.target.password.value;

		const res = await authenticateUser(email, password);

		if (res.success) {
			goto('/');
		} else {
			console.log('cannot login');

			if (res.res.error) {
				formErrors = res.res.error; // Update formErrors with validation errors
			}
			console.log(formErrors);
		}
	}
</script>

<!-- <Header /> -->

<div class="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				Sign in to your User account
			</h2>
		</div>
		<form class="mt-8 space-y-6" on:submit={handleUserSubmit}>
			<input type="hidden" name="remember" value="true" />
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Email address"
					/>
					{#if 'email' in formErrors}
						<p class="text-red-500 text-sm mt-1">{formErrors['email']}</p>
					{/if}
				</div>
				<div>
					<label for="password" class="sr-only">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						placeholder="Password"
					/>
					{#if 'password' in formErrors}
						<p class="text-red-500 text-sm mt-1">{formErrors['password']}</p>
					{/if}
				</div>
			</div>

			<div class="flex items-center justify-between">
				<div>
					<button
						type="submit"
						class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
					>
						Sign in
					</button>
				</div>
			</div>
		</form>
	</div>
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
              I'd like you to study the code. Did you notice that you couldn't
              see any request being done?
            </p>
            <br />
            <p>
              That's cause it was written in the authenticateUser function which
              was written in another file. In here, we just imported it. This
              was cause we'll need authenticateUser a few times, and instead of
              writing manually in different files, its best for us to write in
              one file, and export it so that we can just import and use it...
              just like what we did here.
            </p>
            <br />
            <p>
              Okay, so create a new file at src/utils/auth.js . This is where we
              will write all our 'common' functions.
            </p>
            <br />
            <p>In utils/auth.js,</p>
            <br />
            <div className="mt-4 rounded-md bg-[#1e1e1e] p-4">
              <pre className="text-sm text-[#d4d4d4]">
                <code>{`import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { goto } from '$app/navigation';
// original authenticate user function
export async function authenticateUser(email, password) {
	const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/auth-user', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	});

	const res = await resp.json();

	if (resp.status == 200) {
		localStorage.setItem(
			'auth',
			JSON.stringify({
				userToken: res.userAccessToken, // here i put access token
				user: res.userId
			})
		);

		// userLoggedIn.set(true);
		goto('/');
		return {
			success: true,
			res: res
		};
	} else {
		return {
			success: false,
			res: res
		};
	}
}`}</code>
              </pre>
              <div className="mt-2 flex justify-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
import { goto } from '$app/navigation';
// original authenticate user function
export async function authenticateUser(email, password) {
	const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/auth-user', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	});

	const res = await resp.json();

	if (resp.status == 200) {
		localStorage.setItem(
			'auth',
			JSON.stringify({
				userToken: res.userAccessToken, // here i put access token
				user: res.userId
			})
		);

		// userLoggedIn.set(true);
		goto('/');
		return {
			success: true,
			res: res
		};
	} else {
		return {
			success: false,
			res: res
		};
	}
}`);
                  }}
                >
                  Copy
                </Button>
              </div>
            </div>
            <br />
            <p>
              You might be confused as to what localStorage is all about?? I got
              you.. long story short, after we send a request to the /auth-user
              endpoint using our authenticateUser function, we will get back the
              response. Go ahead and console.log(res). From that, we want to
              store the userId so that we can use it later on.. you will see
              why, dont worry.. also another dont worry about userToken. this is
              not neccessary for you to know about it now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
