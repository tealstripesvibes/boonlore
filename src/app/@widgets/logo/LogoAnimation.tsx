import React, { lazy, Suspense } from "react";

const AnimatedLogoVideo = lazy(
  () => import("@identities/videos/AnimatedLogoVideo"),
);

export function LogoAnimation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatedLogoVideo />
    </Suspense>
  );
}
