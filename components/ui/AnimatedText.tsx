"use client";

import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

/**
 * Splits text into words and reveals each with a mask-slide from below.
 * Accessible: full text exposed via aria-label, animated spans hidden.
 */
export default function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  once = true,
}: Props) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className={`inline-block overflow-hidden align-bottom${
            i < words.length - 1 ? " me-[0.25em]" : ""
          }`}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
