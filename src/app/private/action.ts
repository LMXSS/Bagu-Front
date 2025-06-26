// app/login/action.ts
"use server";
import { removeSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function logoutAction() {
    await removeSession();

    redirect("/auth/login");
}
