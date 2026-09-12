"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { FiArrowDown } from "react-icons/fi";
import AnimatedText from "@/components/ui/AnimatedText";
import { person } from "@/lib/data";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % person.roles.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="text-violet"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {person.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 md:px-12"
    >
      {/* decorative accent */}
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full bg-violet/20 blur-[120px] md:h-[560px] md:w-[560px]"
      />
      <motion.div
        aria-hidden
        style={{ y: blobY }}
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-lime/10 blur-[130px]"
      />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-[1400px]">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-lime" />
          Available for opportunities
        </p>

        <h1 className="font-display font-bold uppercase leading-[0.82] tracking-[-0.03em] text-[clamp(3.5rem,15vw,15rem)]">
          <span className="block">
            <AnimatedText text="Dhruv" delay={0.05} />
          </span>
          <span className="block text-muted">
            <AnimatedText text="Bhardwaj" delay={0.18} />
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg text-muted md:text-xl">
            <RotatingRole /> — based in {person.location}. I build AI tools,
            data platforms and fast, thoughtful products.
          </p>
          <a
            href="#work"
            data-cursor="hover"
            className="inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.2em] text-text"
          >
            <FiArrowDown className="animate-bounce" /> Scroll to work
          </a>
        </div>
      </motion.div>
    </section>
  );
}
