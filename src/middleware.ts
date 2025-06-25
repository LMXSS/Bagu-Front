import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/", "/auth/login", "/register"];

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const pathname = request.nextUrl.pathname;

    console.log("Testando middleware");

    const isPublicRoute = publicRoutes.includes(pathname);

    // Se o usuário está logado e tenta acessar uma rota pública, redireciona para /private/feed
    if (token && isPublicRoute) {
        return NextResponse.redirect(new URL("/private/feed", request.url));
    }

    // Se o usuário não está logado e tenta acessar uma rota privada, redireciona para /login
    if (!token && !isPublicRoute) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // Caso contrário, deixa a requisição continuar
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|static|favicon.ico|images).*)"]
};
