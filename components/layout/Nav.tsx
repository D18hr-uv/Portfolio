"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLenis } from "./SmoothScroll";

export default function Nav() {
  const { scrollY } = useScroll();
  const lastRef = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    const last = lastRef.current;
    setHidden(y > last && y > 220);
    lastRef.current = y;
  });

  const go = (target: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -80 });
    else
      document
        .querySelector(target)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      animate={{ y: hidden ? "-120%" : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 transition-colors duration-300 md:px-12 ${
          scrolled ? "border-b hairline bg-bg/70 backdrop-blur-md" : ""
        }`}
      >
        <a
          href="#top"
          onClick={go("#top")}
          className="font-display text-xl font-bold tracking-tight text-text"
        >
          DB<span className="text-violet">.</span>
        </a>

        <nav className="flex items-center gap-6 text-sm md:gap-9 md:text-[0.95rem]">
          <a
            href="#about"
            onClick={go("#about")}
            className="hidden text-muted transition-colors hover:text-text sm:inline"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={go("#experience")}
            className="text-muted transition-colors hover:text-text"
          >
            Experience
          </a>
          <a
            href="#work"
            onClick={go("#work")}
            className="text-muted transition-colors hover:text-text"
          >
            Work
          </a>
          <Link
            href="/resume"
            className="rounded-full border hairline px-4 py-1.5 text-text transition-colors hover:border-violet hover:text-violet"
          >
            Résumé
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
