import { z } from "zod";

export const formSchema = z.object({
  senderEmail: z.string().email("Please enter a valid email"),
  senderName: z.string().min(3, "Please enter your name, min 3 letters"),
  receiverEmail: z.string().email("Please enter a valid email"),
  receiverName: z.string().min(3, "Please enter receiver name, min 3 letters"),
  message: z.string().min(10, "Please enter a valid message, min 10 letters"),
});

export type FormData = z.infer<typeof formSchema>;
