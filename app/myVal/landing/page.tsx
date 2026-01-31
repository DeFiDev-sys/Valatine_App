import React, { lazy, Suspense } from "react";

import Loading from "@/components/Loading";
const LandingScreen = lazy(() => import("@/screens/landingScreen"));
const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <LandingScreen />
    </Suspense>
  );
};

export default page;
