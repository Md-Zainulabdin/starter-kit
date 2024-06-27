import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email address!",
    })
    .min(2, {
      message: "Email is required!",
    })
    .max(50, {
      message: "Email must be less than 50 characters!",
    }),
  password: z
    .string()
    .min(2, {
      message: "Password is required!",
    })
    .max(50, {
      message: "Password must be less than 50 characters!",
    }),
});

type SignInValue = z.infer<typeof SignInSchema>;

export type { SignInValue };
