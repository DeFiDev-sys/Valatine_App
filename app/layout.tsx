import type { Metadata } from "next";
import "./globals.css";
import { FormProvider } from "@/context/FormContext";

export const metadata: Metadata = {
  title: {
    template: "%s | My Valentine",
    default: "My Valentine",
  },
  description:
    "My Valentine for your special someone, send your love to the one you love.",
  keywords: ["My", "Valentiane", "Love"],
  authors: [
    {
      name: "Juwon",
      url: "https://res.cloudinary.com/dybqllv1r/image/upload/v1769880328/og-image_fdejhk.jpg",
    },
  ],
  creator: "Juwon",
  publisher: "Vercel",
  openGraph: {
    title: "My Valentine",
    description:
      "My Valentine for your special someone, send your love to the one you love.",
    type: "website",
    locale: "en_US",
    siteName: "My Valentine",
    images: [
      {
        url: "https://res.cloudinary.com/dybqllv1r/image/upload/v1769880328/og-image_fdejhk.jpg",
        width: 1200,
        height: 630,
        alt: "My Valentine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Valentine",
    description:
      "My Valentine for your special someone, send your love to the one you love.",
    creator: "@king_jay_I",
    images: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL! ||
        "https://res.cloudinary.com/dybqllv1r/image/upload/v1769880328/og-image_fdejhk.jpg"
      }/og-image.png`,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <body className={`m-0 p-0`}>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
