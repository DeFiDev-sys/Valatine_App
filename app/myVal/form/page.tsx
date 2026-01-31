import React from "react";
import FormScreen from "@/screens/FormScreen";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form",
};

const page = () => {
  return (
    <>
      <FormScreen />
    </>
  );
};

export default page;
