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
        <LoginForm />
      </div>
    </div>
  );
}
