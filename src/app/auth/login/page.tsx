import Navbar from "@/components/sections/navbar";
import React from "react";
import { loginAction } from "./action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Login() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1 items-center justify-center">
        <form
          className="flex flex-col gap-4 w-full max-w-sm"
          action={loginAction}
        >
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="submit" variant="outline">
            Acessar
          </Button>
        </form>
      </main>
    </>
  );
}

export default Login;
