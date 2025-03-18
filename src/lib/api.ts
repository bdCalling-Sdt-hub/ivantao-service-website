"use server";

import { getFetcher } from "./simplifier";

export async function getUserData(token: string) {
  // Simulating fetching from a DB or API
  const call = await getFetcher({ link: "/auth/own-profile", token: token });
  return call;
}
