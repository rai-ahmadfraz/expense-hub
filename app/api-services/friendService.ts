"use server";

import { redirect } from "next/navigation";
import apiFetch from "./apiClient";

export async function getFriends() {
  return await apiFetch("/friends", { method: "GET" }) || [];
}

export async function searchUsers(term: string) {
  if (!term || term.length < 3) return [];
  return await apiFetch(`/users/search/${term}`, { method: "GET" }) || [];
}

export async function addFriend(id: number) {
  await apiFetch(`/friends/add/${id}`, { method: "GET" });
  redirect("/dashboard/friends");
}