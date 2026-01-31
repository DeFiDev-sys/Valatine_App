"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircle, Heart, Home, Send } from "lucide-react";
import Link from "next/link";
import { useFormContext } from "@/context/FormContext";

export default function SucessScreen() {
  const context = useFormContext();
  const sendAnother = context?.onSendAnother;
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-linear-to-br from-pink-50 via-red-50 to-purple-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-red-200 border-t-red-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-pink-50 via-red-50 to-purple-50">
      {/* Confetti Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10%",
            }}
            initial={{ y: 0, opacity: 1, rotate: 0 }}
            animate={{
              y: "120vh",
              opacity: [1, 1, 0],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 0.5,
              ease: "easeIn",
            }}
          >
            <div
              className={`w-3 h-3 ${
                i % 4 === 0
                  ? "bg-red-400"
                  : i % 4 === 1
                    ? "bg-pink-400"
                    : i % 4 === 2
                      ? "bg-purple-400"
                      : "bg-yellow-400"
              } ${i % 2 === 0 ? "rounded-full" : ""}`}
            />
          </motion.div>
        ))}

        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 20}%`,
              }}
              animate={{
                y: [0, "-120vh"],
                rotate: [0, 360],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: 0.5 + Math.random() * 2,
                ease: "easeOut",
              }}
            >
              <Heart
                className="text-red-400"
                size={20 + Math.random() * 30}
                fill="currentColor"
              />
            </motion.div>
          ))}
        </div>

        {/* content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-500 rounded-full blur-2xl"
              />
              <div className="relative bg-white rounded-full p-8 shadow-2xl">
                <CheckCircle
                  className="w-20 h-20 text-green-500"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-6"
          >
            <h1
              className="text-4xl md:text-6xl font-bold text-red-600 mb-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Your Valentine has been delivered!
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-2 text-6xl mb-6"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
              >
                💖
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
              >
                💌
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }}
              >
                💕
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-gray-700 text-center mb-12 max-w-md"
          >
            We've sent your postcard straight to their inbox.
            <br />
            <span className="text-pink-600 font-semibold">
              Love is on its way! ✨
            </span>
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex sm:flex-row flex-col gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sendAnother?.()}
              className="px-8 py-4  bg-linear-to-r cursor-pointer from-red-500 via-pink-500 to-red-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-3 text-lg font-semibold"
            >
              <Send className="w-5 h-5" />
              Send Another Valentine
              <span>💝</span>
            </motion.button>

            <Link href="/myVal/landing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4  bg-white text-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3 text-lg font-semibold border-2 border-gray-200"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16 text-center"
          >
            <p
              className="text-3xl md:text-4xl text-pink-600 opacity-50"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Spread the love ❤️
            </p>
          </motion.div>

          {/* Floating Emojis at Bottom */}
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-4xl opacity-70"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.7 }}
            transition={{ delay: 1.2 }}
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0 }}
            >
              💘
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
            >
              💗
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
            >
              💓
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}
            >
              💞
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
