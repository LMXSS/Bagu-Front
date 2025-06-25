"use client";
import { LoginFormData, loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { loginAction } from "@/app/auth/login/action";
import { redirect } from "next/navigation";

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmit = async (data: LoginFormData) => {
    try {
      await loginAction(data);
      form.reset();
      redirect("/");
    } catch (error) {}
  };

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-sm"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Input type="email" placeholder="Email" {...form.register("email")} />
      <Input
        type="password"
        placeholder="Senha"
        {...form.register("password")}
      />
      <Button type="submit" variant="outline">
        Acessar
      </Button>
    </form>
  );
}

export default LoginForm;
