import { PreviewScreen } from "@/screens/PreviewScreen";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview",
};

const page = () => {
  return <PreviewScreen />;
};

export default page;
