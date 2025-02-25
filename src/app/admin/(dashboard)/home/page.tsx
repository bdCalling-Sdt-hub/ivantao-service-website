"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const navig = useRouter();
  return navig.push("/");
}
