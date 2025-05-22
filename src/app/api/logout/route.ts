import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.redirect("/login");
  res.cookies.set("auth_token", "", {
    path: "/",
    maxAge: 0,
  });
  return res;
}
