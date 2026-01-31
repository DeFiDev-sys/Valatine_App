"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { FormData } from "@/types/customTypes";

interface FormContextType {
  formData: FormData | null;
  setFormData: (data: FormData | null) => void;
  onBack: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const router = useRouter();

  const onBack = () => {
    router.back();
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, onBack }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    console.log("useFormContext must be used within a FormProvider");
    return null;
  }
  return context;
};
