"use server";

import { contactSchema } from "@/lib/schemas";
import { z } from "zod";

export async function handleContactSubmit(data: z.infer<typeof contactSchema>) {
  // This is a server action.
  // In a real app, you'd save to a DB, send an email, etc.
  console.log("Received contact form data on server:", data);
  
  // For demonstration, we'll just return a success message.
  return { success: true, message: "Thank you for your message!" };
}
