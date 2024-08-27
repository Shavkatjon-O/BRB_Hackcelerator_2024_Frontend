import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string()
    .email("Invalid email address."),
  password: z.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(128, "Password must be at most 128 characters long."),
  confirmPassword: z.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(128, "Password must be at most 128 characters long.")
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});;

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
