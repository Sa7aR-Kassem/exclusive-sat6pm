"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getDecodedToken() {
  const encodedToken = (await cookies()).get("next-auth.session-token")?.value;

  const decodedToken = await decode({
    token: encodedToken,
    secret: process.env.AUTH_SECRET!,
  });

  return decodedToken;
}

export async function getUserToken() {
  return (await getDecodedToken())?.token || null;
}

export async function getUserId() {
  return (await getDecodedToken())?.sub || null;
}
