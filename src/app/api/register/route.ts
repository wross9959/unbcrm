// app/api/register/route.ts
import { registerUser } from "@/lib/auth";
import { createToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const success = registerUser(email, password);

  if (!success) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }
  const token = createToken({ email, role: "member" }); 

  const res = NextResponse.json({ success: true });
  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, 
    path: "/",
  });

  return res;
}
