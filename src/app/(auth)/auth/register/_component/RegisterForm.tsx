"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpValue } from "@/schema/SignupSchema";

const RegisterForm = () => {
  const { toast } = useToast();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<SignUpValue>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // Spinner
  const Icons = {
    spinner: Loader2,
  };

  const submitHandler = async (values: SignUpValue) => {
    setLoading(true);

    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post(`/api/user`, formData);

      if (response.status == 201) {
        toast({
          title: "Registration Successfull",
        });
        console.log(response);

        router.push("/auth/login");
      }
    } catch (error: any) {
      console.log(error);
      toast({
        title: `${error.response.statusText}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-cal text-3xl font-bold tracking-tighter">
          Create your account
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 pl-4"
                        type="text"
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
              className="font-cal text-md w-full font-semibold"
              type="submit"
            >
              {loading ? (
                <span>
                  <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
                </span>
              ) : (
                "Sign up"
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
        <Link href={"/auth/login"} className="font-inter text-muted-foreground">
          Already have an account? <span className="underline">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
