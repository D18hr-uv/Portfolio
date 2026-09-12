"use client";

import { motion } from "motion/react";
import type { ReactNode, Ref } from "react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";

export default function MagneticButton({
  children,
  className,
  strength = 0.4,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(strength);

  return (
    <motion.div
      ref={ref as Ref<HTMLDivElement>}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
