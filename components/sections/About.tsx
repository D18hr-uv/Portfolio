"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedText from "@/components/ui/AnimatedText";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { person, education, highlights } from "@/lib/data";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const accentY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden px-6 py-28 md:px-12 md:py-40"
    >
      <motion.div
        aria-hidden
        style={{ y: accentY }}
        className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-violet/10 blur-[120px]"
      />

      <div className="mx-auto max-w-[1400px]">
        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-muted">
          (01) — About
        </p>

        <h2 className="max-w-5xl font-display font-medium leading-[1.05] tracking-[-0.02em] text-[clamp(1.75rem,4.5vw,4rem)]">
          <AnimatedText text="A CS engineering student turning ideas into fast, thoughtful products." />
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <RevealOnScroll className="max-w-2xl text-lg leading-relaxed text-muted">
            {person.bio}
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
              Education
            </p>
            <div className="border-b hairline pb-6">
              <p className="text-lg text-text">{education.school}</p>
              <p className="mt-1 text-muted">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {education.period} · {education.note}
              </p>
            </div>

            <p className="mb-4 mt-8 text-xs uppercase tracking-[0.25em] text-muted">
              Highlights
            </p>
            <ul className="space-y-4">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="flex items-baseline gap-4 border-b hairline pb-4"
                >
                  <span className="font-display text-2xl font-semibold text-violet">
                    {h.value}
                  </span>
                  <span className="text-muted">{h.label}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
