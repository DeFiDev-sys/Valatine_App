import { z } from "zod";

export const formSchema = z.object({
  senderEmail: z.string().email("Please enter a valid email"),
  senderName: z.string().min(3, "Please enter your name, min 3 letters"),
  receiverEmail: z.string().email("Please enter a valid email"),
  receiverName: z.string().min(3, "Please enter receiver name, min 3 letters"),
  message: z.string().min(10, "Please enter a valid message, min 10 letters"),
});

export type FormData = z.infer<typeof formSchema>;

export type PostCardStyle = "cute" | "minimal" | "elegant";

export type Style = {
  name: string;
  icon: string;
  bgGradient: string;
  textColor: string;
  accentColor: string;
};

export const styles: Record<PostCardStyle, Style> = {
  cute: {
    name: "Cute",
    icon: "🥰",
    bgGradient: "from-pink-100 via-pink-200 to-red-200",
    textColor: "text-pink-900",
    accentColor: "text-red-500",
  },
  elegant: {
    name: "Elegant",
    icon: "✨",
    bgGradient: "from-purple-100 via-pink-50 to-rose-100",
    textColor: "text-gray-800",
    accentColor: "text-purple-600",
  },
  minimal: {
    name: "Minimal",
    icon: "🤍",
    bgGradient: "from-gray-50 via-white to-gray-100",
    textColor: "text-gray-900",
    accentColor: "text-gray-600",
  },
};
