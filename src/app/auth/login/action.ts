// app/login/action.ts
"use server";

import { LoginFormData, loginSchema } from "@/schemas/login.schema";
import { saveSession } from "@/lib/session";

export async function loginAction(formData: LoginFormData) {
    const parsed = loginSchema.safeParse(formData);

    if (!parsed.success) {
        throw new Error("Dados inválidos");
    }

    const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const { token, refreshToken, expiresIn } = await response.json();

    await saveSession({ token, refreshToken, expiresIn });
}
