"use client";

import { motion } from "motion/react";
import { Heart, Sparkles } from "lucide-react";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`m-0 p-0`} suppressHydrationWarning>
      <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-pink-50 via-red-50 to-purple-50">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 20}%`,
              }}
              animate={{
                y: ["0vh", "120vh"],
                x: [0, Math.random() * 50 - 25],
                rotate: [0, 360],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            >
              <Heart
                className="text-pink-300"
                size={15 + Math.random() * 30}
                fill="currentColor"
              />
            </motion.div>
          ))}
        </div>

        {/* Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <Sparkles className="text-yellow-400" size={12} />
            </motion.div>
          ))}
        </div>
        {children}
      </div>
    </main>
  );
}
