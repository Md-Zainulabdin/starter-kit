"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInValue } from "@/schema/SigninSchema";

const LoginForm = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<SignInValue>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Spinner
  const Icons = {
    spinner: Loader2,
  };

  const submitHandler = async (values: SignInValue) => {
    setLoading(true);

    const formData = {
      email: values.email,
      password: values.password,
      redirect: false,
    };

    try {
      const response = await signIn("credentials", formData);
      if (response?.ok) {
        toast({
          title: "Login Successfull",
        });
        router.push("/");
      } else {
        toast({
          title: `${response?.error}`,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Authentication",
        description: "Login Failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h1 className="font-cal text-3xl font-bold tracking-tighter">
          Welcome back
        </h1>
      </div>

      <div className="w-full rounded-md border p-6 sm:w-[500px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-6"
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 pl-4"
                        type="email"
                        placeholder="johndoe@example.com"
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        className="h-12"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={loading}
              className="text-md font-cal w-full font-semibold"
              type="submit"
            >
              {loading ? (
                <span>
                  <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>

        <div className="py-8">
          <hr />
        </div>

        <div>
          <Button
            variant={"outline"}
            className="font-cal w-full py-6 text-[16px] font-semibold"
          >
            Continue with Google
          </Button>
        </div>
      </div>

      <div className="text-center">
        <Link
          href={"/auth/register"}
          className="font-inter text-muted-foreground"
        >
          Dont have an account? <span className="underline">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
