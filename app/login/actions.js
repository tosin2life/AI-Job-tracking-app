"use server";
// import { z } from "zod";
// import { createSession, deleteSession } from "../lib/session";
// import { redirect } from "next/navigation";

// const loginSchema = z.object({
//   email: z.string().email({ message: "Invalid email address" }).trim(),
//   password: z
//     .string()
//     .min(8, { message: "Password must be at least 8 characters" })
//     .trim(),
// });

// export async function login(prevState, formData) {
//   const result = loginSchema.safeParse(Object.fromEntries(formData));

//   if (!result.success) {
//     return {
//       errors: result.error.flatten().fieldErrors,
//     };
//   }

//   const { email, password } = result.data;

//   // Construct the full URL for the API endpoint
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
//   const response = await fetch(`${baseUrl}/api/register`);

//   if (!response.ok) {
//     return {
//       errors: {
//         email: ["Failed to fetch registered users."],
//       },
//     };
//   }

//   const users = await response.json();

//   const user = users.find((u) => u.email === email && u.password === password);
//   if (!user) {
//     return {
//       errors: {
//         email: ["Invalid email or password"],
//       },
//     };
//   }

//   await createSession(user.id);
//   redirect("/dashboard");
// }
// export async function logout() {
//   await deleteSession();
//   redirect("/");
// }

import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState, formData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  // Fetch user from the database
  const user = await prisma.user.findUnique({ where: { email } });

  // if (!user || user.password !== password) {
  //   return {
  //     errors: {
  //       email: ["Invalid email or password"],
  //     },
  //   };
  // }

  if (!user) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  // Compare the provided password with the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  await createSession(user.id);
  redirect("/dashboard");
}
export async function logout() {
  await deleteSession();
  redirect("/");
}
