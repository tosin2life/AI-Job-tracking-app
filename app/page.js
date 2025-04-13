"use client";
import Link from "next/link";
import { LoginForm } from "./_components/LoginForm";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="text-center flex flex-col justify-center">
        <h1 className="text-4xl m-10">
          Welcome to AI job tracking Application
        </h1>
        {/* <Link
          href={"/login"}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Enter to login
        </Link> */}

        <LoginForm />
      </div>
    </div>
  );
}
