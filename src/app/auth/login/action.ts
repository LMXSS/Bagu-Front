// app/login/action.ts
"use server";

import { LoginFormData, loginSchema } from "@/schemas/login.schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: LoginFormData) {
    const email = formData.email;
    const password = formData.password;

    const parsed = loginSchema.safeParse({ email, password });

    if (parsed.success) {
        const response = await fetch("http://localhost:3001/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            console.log(response)
            throw new Error("Erro ao fazer login");
        }

        const data = await response.json();

        const { token, refreshToken, expiresIn } = data;

        const cookieStore = await cookies();

        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: Number(expiresIn), // em segundos
            path: "/",
        });

        cookieStore.set("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        redirect("/private/feed");
    }

}
