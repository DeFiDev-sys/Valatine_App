"use client";

import { Heart, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const LandingScreen = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          duration: 0.8,
        }}
        className="mb-8"
      >
        <div className="relative">
          <div className="absolute  inset-0 bg-linear-to-br from-pink-400 to-red-500 rounded-full blur-2xl opacity-50 animate-pulse" />
          <Heart
            className="relative text-red-500"
            size={80}
            fill="currentColor"
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-4 bg-linear-to-br from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Valentine Postcard
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-xl md:text-2xl text-center text-gray-700 mb-2 font-medium max-w-2xl"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Send Love. One Postcard at a Time.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-base md:text-lg text-center text-gray-600 mb-12 max-w-xl"
      >
        Create and send a beautiful Valentine postcard to someone special —
        instantly.
      </motion.p>

      {/* Button for the form */}
      <Link href="/myVal/form">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(230, 57, 70, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log("Cliked");
          }}
          className="group relative cursor-pointer px-12 py-4 bg-linear-to-br from-red-500 via-pink-500 to-red-500 text-white rounded-full shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-pink-500 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-3 text-lg font-semibold">
            <Mail className="w-5 h-5" />
            Create a Valentine
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              💌
            </motion.div>
          </span>
        </motion.button>
      </Link>

      {/* Privacy Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-sm text-gray-500 text-center max-w-md"
      >
        🔒 We don't store your data. Messages are sent instantly and privately.
      </motion.p>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 md:left-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <div className="text-6xl">💕</div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 md:right-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ repeat: Infinity, duration: 3, delay: 1 }}
      >
        <div className="text-6xl">💖</div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-5 md:right-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
      >
        <div className="text-5xl">💝</div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-5 md:left-10"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 1.5 }}
      >
        <div className="text-5xl">💗</div>
      </motion.div>
    </div>
  );
};

export default LandingScreen;
