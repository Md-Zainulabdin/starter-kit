import { z } from "zod";

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name is required!",
    })
    .max(50, {
      message: "Name must be less than 50 characters!",
    }),
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

type SignUpValue = z.infer<typeof SignUpSchema>;

export type { SignUpValue };
