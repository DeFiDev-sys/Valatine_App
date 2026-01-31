"use client";

import { useFormContext } from "@/context/FormContext";
import { ArrowLeft, Edit, Heart, Send, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";
import { PostCardStyle, styles } from "@/types/customTypes";
import { sendMail } from "@/mail/SendMail";

export const PreviewScreen = () => {
  const context = useFormContext();
  const formData = context?.formData;
  const onBack = context?.onBack;
  const onNext = context?.onNext;

  const [selectedStyle, setSelectedStyle] = useState<PostCardStyle>("cute");

  const currentStyle = styles[selectedStyle];

  const onSend = async () => {
    await sendMail({
      receiverName: formData?.receiverName || "",
      senderName: formData?.senderName || "",
      message: formData?.message || "",
      receiverEmail: formData?.receiverEmail || "",
      senderEmail: formData?.senderEmail || "",
      style: currentStyle,
    });

    await onNext?.();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-pink-50 via-red-50 to-purple-50">
      {/* content */}
      <div className="relative z-10 min-h-screen px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            onClick={onBack}
            className="flex items-center gap-2 text-red-600 mb-8 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <Edit className="w-4 h-4" />
            Edit Message
          </motion.button>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              Step 2 of 2
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: "50%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5 }}
                className="h-full bg-linear-to-r from-red-500 to-pink-500"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-red-600 mb-2"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Preview Your Postcard
            </h2>
            <p className="text-gray-600">Choose a style and send with love</p>
          </motion.div>

          {/* Postcard Styles Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 mb-8 flex-wrap"
          >
            {(Object.keys(styles) as PostCardStyle[]).map((style) => (
              <motion.button
                key={style}
                onClick={() => setSelectedStyle(style)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedStyle === style
                    ? `bg-linear-to-r ${currentStyle.bgGradient} text-black shadow-lg`
                    : "bg-white text-gray-700 shadow hover:shadow-md"
                }`}
              >
                <span className="mr-2">{styles[style].icon}</span>
                {styles[style].name}
              </motion.button>
            ))}
          </motion.div>

          {/* PostCard Preview */}
          <motion.div
            key={selectedStyle}
            initial={{ opacity: 0, scale: 0.95, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8"
          >
            <div className="max-w-2xl mx-auto">
              <div
                className={`relative bg-linear-to-br ${currentStyle.bgGradient} rounded-3xl shadow-2xl overflow-hidden`}
                style={{ aspectRatio: "4/3" }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Heart
                    className={currentStyle.accentColor}
                    size={120}
                    fill="currentColor"
                  />
                </div>
                <div className="absolute bottom-6 left-6 opacity-10">
                  <Heart
                    className={currentStyle.accentColor}
                    size={80}
                    fill="currentColor"
                  />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                  {/* To/From */}
                  <div className="space-y-2">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`text-lg ${currentStyle.textColor}`}
                    >
                      <span className="opacity-70">To:</span>{" "}
                      <span
                        className="font-bold"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                      >
                        {formData?.receiverName}
                      </span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className={`text-lg ${currentStyle.textColor}`}
                    >
                      <span className="opacity-70">From:</span>{" "}
                      <span
                        className="font-bold"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                      >
                        {formData?.senderName}
                      </span>
                    </motion.p>
                  </div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex-1 flex items-center justify-center"
                  >
                    <div className="max-w-md text-center">
                      <p
                        className={`text-xl md:text-2xl ${currentStyle.textColor} leading-relaxed whitespace-pre-wrap`}
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                      >
                        {formData?.message}
                      </p>
                    </div>
                  </motion.div>

                  {/* Decorative Hearts */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="flex justify-center gap-2 text-3xl"
                  >
                    <span>💕</span>
                    <span>💖</span>
                    <span>💝</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onSend}
              className="w-full py-5 bg-linear-to-r from-red-500 via-pink-500 to-red-500 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow flex items-center justify-center gap-3 text-xl font-semibold group"
            >
              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              Send Postcard via Email
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                💌
              </motion.span>
            </motion.button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Your postcard will be sent to {formData?.receiverEmail}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
