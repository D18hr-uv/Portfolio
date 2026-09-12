"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue } from "motion/react";
import { useLenis } from "./SmoothScroll";
import { usePrefersReducedMotion } from "@/lib/hooks/useMediaQuery";

export default function Preloader() {
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;

  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("preloaded")) {
      setShow(false);
      return;
    }

    document.body.style.overflow = "hidden";
    lenisRef.current?.stop();

    const controls = animate(count, 100, {
      duration: reduced ? 0.25 : 1.7,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => {
        window.setTimeout(() => setShow(false), 350);
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const restore = () => {
    document.body.style.overflow = "";
    lenisRef.current?.start();
    if (typeof window !== "undefined") sessionStorage.setItem("preloaded", "1");
  };

  return (
    <AnimatePresence onExitComplete={restore}>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-bg px-6 py-8 md:px-12 md:py-12"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted">
            <span>Dhruv Bhardwaj</span>
            <span>Portfolio</span>
          </div>

          <div className="flex items-end justify-between">
            <span className="font-display text-sm uppercase tracking-[0.2em] text-muted md:text-base">
              Loading
            </span>
            <span className="font-display leading-none tracking-[-0.04em] text-text text-[clamp(4rem,22vw,16rem)]">
              {display}
              <span className="text-violet">%</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
