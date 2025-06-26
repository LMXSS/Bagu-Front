// src/lib/session.ts
'use server';

import { cookies } from 'next/headers';

const isProduction = process.env.NODE_ENV === 'production';

export interface SessionTokens {
    token: string;
    refreshToken: string;
    expiresIn: number;
}

export async function saveSession({ token, refreshToken, expiresIn }: SessionTokens) {
    const cookieStore = await cookies();

    cookieStore.set("token", token, {
        httpOnly: true,
        secure: isProduction,
        maxAge: expiresIn,
        path: "/",
    });

    cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: isProduction,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });
}

export async function getSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value ?? null;
    const refreshToken = cookieStore.get("refreshToken")?.value ?? null;

    return {
        token,
        refreshToken,
        isAuthenticated: !!token,
    };
}

export async function removeSession() {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    cookieStore.delete("refreshToken");
}
