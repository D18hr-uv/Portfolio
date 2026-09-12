"use client";

import { useRef } from "react";
import { useSpring } from "motion/react";
import { useFinePointer, usePrefersReducedMotion } from "./useMediaQuery";

/**
 * Magnetic-pull hook. Returns a ref to attach to an element and spring-driven
 * x/y motion values that pull the element toward the pointer while hovered.
 * No-op on touch devices or when reduced motion is requested.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLElement | null>(null);
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const active = fine && !reduced;

  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, onMouseMove, onMouseLeave, active };
}
