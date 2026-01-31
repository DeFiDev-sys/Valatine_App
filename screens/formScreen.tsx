"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/types/customTypes";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { useFormContext } from "@/context/FormContext";

const FormScreen = () => {
  const router: AppRouterInstance = useRouter();
  const context = useFormContext();
  const setFormData = context?.setFormData;
  const onBack = context?.onBack;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderEmail: "",
      senderName: "",
      receiverEmail: "",
      receiverName: "",
      message: "",
    },
  });
  const handleOnSubmit = async (data: FormData) => {
    try {
      setFormData?.(data);
      await router.push("/myVal/preview");
    } catch (error: any) {
      console.log(error?.message);
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-pink-50 via-red-50 to-purple-50">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
            }}
            animate={{
              y: ["0vh", "120vh"],
              x: [0, Math.random() * 30 - 15],
              rotate: [0, 360],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            <Heart
              className="text-pink-300"
              size={10 + Math.random() * 20}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

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
            Back
          </motion.button>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              Step 1 of 2
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 0.5 }}
                className="h-full bg-linear-to-r from-red-500 to-pink-500"
              />
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="inline-block mb-4"
              >
                <Heart className="w-12 h-12 text-red-500" fill="currentColor" />
              </motion.div>
              <h2
                className="text-3xl md:text-4xl font-bold text-red-600 mb-2"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Create Your Valentine
              </h2>
              <p className="text-gray-600">Fill in the details to send love</p>
            </div>

            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">👤</span> Your Details
              </h3>
              <FieldGroup>
                <Controller
                  control={form.control}
                  name="senderEmail"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Your Email</FieldLabel>
                      <Input type="email" {...field} />
                      {fieldState.invalid && (
                        <FieldDescription>
                          {fieldState.error?.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name="senderName"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Your Name</FieldLabel>
                      <Input type="text" {...field} />
                      {fieldState.invalid && (
                        <FieldDescription>
                          {fieldState.error?.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />

                {/* diviver */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-pink-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-2xl">💌</span>
                  </div>
                </div>

                {/* receiver details */}
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">💝</span> Recipient Details
                </h3>

                <Controller
                  control={form.control}
                  name="receiverEmail"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Receiver Email</FieldLabel>
                      <Input type="email" {...field} />
                      {fieldState.invalid && (
                        <FieldDescription>
                          {fieldState.error?.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name="receiverName"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Receiver Name</FieldLabel>
                      <Input type="text" {...field} />
                      {fieldState.invalid && (
                        <FieldDescription>
                          {fieldState.error?.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />

                {/* Message */}
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-2xl">✍️</span> Message
                </h3>
                <Controller
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Message</FieldLabel>
                      <InputGroup>
                        <InputGroupTextarea
                          {...field}
                          className="min-h-32"
                          placeholder="write something sweet..."
                        />
                      </InputGroup>
                      {fieldState.invalid && (
                        <FieldDescription>
                          {fieldState.error?.message}
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />
                <p className="text-gray-500 text-sm">
                  {form.watch("message")?.length} characters
                </p>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full cursor-pointer py-4 bg-linear-to-r from-red-500 via-pink-500 to-red-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  Preview Postcard
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ease-in-out" />
                  <span className="group-hover:scale-150 transition-transform ease-in-out">
                    💌
                  </span>
                </motion.button>
              </FieldGroup>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FormScreen;
