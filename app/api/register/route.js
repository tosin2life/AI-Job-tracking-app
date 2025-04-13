import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { SignJWT } from "jose";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
  const { email, password } = await req.json();

  // Validate input
  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required." },
      { status: 400 }
    );
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json(
      { error: "User already exists." },
      { status: 400 }
    );
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user
  const newUser = await prisma.user.create({
    data: { email, password: hashedPassword },
  });

  // Generate JWT token
  const token = await new SignJWT({ id: newUser.id, email: newUser.email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(secretKey);

  // Return a success message
  return NextResponse.json(
    { message: "User registered successfully.", token },
    { status: 201 }
  );
}
