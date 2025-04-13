"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "../login/actions";

export function LoginForm() {
  const [state, loginAction] = useActionState(login, undefined);

  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign in
        </h2>
        <p className="mt-2 text-center text-gray-500">
          Sign in below to access your account
        </p>

        <form action={loginAction} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              placeholder="Email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
            {state?.errors?.email && (
              <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
            />
            {state?.errors?.password && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.password}
              </p>
            )}
          </div>

          <div>
            <SubmitButton />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account yet?{" "}
          <a
            href="/register"
            className="font-semibold text-black hover:underline"
          >
            Sign up
          </a>
          .
        </p>
      </div>
    </main>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
    >
      {pending ? "Signing in..." : "Sign in"}
    </button>
  );
}
