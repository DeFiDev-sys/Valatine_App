// Import global styles and fonts
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
        <Link href="/myVal/landing">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md cursor-pointer">
            Return Home
          </button>
        </Link>
      </body>
    </html>
  );
}
