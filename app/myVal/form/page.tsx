import FormScreen from "@/screens/formScreen";

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
