"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollReveal(once = true) {
  const ref = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isInView = useInView(ref, { once, margin: "-50px 0px" as any });
  return { ref, isInView };
}
