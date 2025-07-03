"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import { useRouter } from "next/navigation";

import { LoginFormData, loginSchema } from "@/schemas/login.schema";
import { loginAction } from "@/app/auth/login/action";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { toast } from "sonner";

function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [_, formAction, isPending] = useActionState(
    async (_prevState: unknown, formData: FormData) => {
      const values = {
        email: formData.get("email")?.toString() || "",
        password: formData.get("password")?.toString() || "",
      };

      try {
        await loginAction(values);
        router.push("/private/feed");
      } catch (error: unknown) {
        const message =
          error instanceof Error
            ? error.message
            : "Erro inesperado ao fazer login.";
        toast.error(message, { richColors: true });
      }

      return null;
    },
    null
  );

  return (
    <Form {...form}>
      <form
        action={formAction}
        className="flex flex-1 items-center gap-4 mr-10 justify-end"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="min-w-72"
                  placeholder="Email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="min-w-72"
                  placeholder="Senha"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="outline" disabled={isPending}>
          {isPending ? "Entrando..." : "Acessar"}
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
