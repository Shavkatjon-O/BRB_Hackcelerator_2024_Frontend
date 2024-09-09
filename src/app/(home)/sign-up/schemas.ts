import { z } from "zod";

const userTypeChoices = ["EMPLOYEE", "LOAN_MANAGER", "BANK_TELLER"] as const;

export const signUpSchema = z.object({
  userType: z.enum(userTypeChoices, {
    invalid_type_error: "Please select a valid user type.",
    required_error: "User type is required.",
  }),
  email: z.string().email("Invalid email address."),  
  password: z.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(128, "Password must be at most 128 characters long."),
  confirmPassword: z.string()
    .min(8, "Password must be at least 8 characters long.")
    .max(128, "Password must be at most 128 characters long."),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
