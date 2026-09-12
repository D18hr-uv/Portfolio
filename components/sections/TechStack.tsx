"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { languages, tools } from "@/lib/data";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const track = [...items, ...items];
  return (
    <div className="marquee-paused flex overflow-hidden">
      <div
        className="animate-marquee flex shrink-0 items-center gap-8 pe-8 md:gap-14 md:pe-14"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 font-display font-semibold uppercase leading-none tracking-[-0.02em] text-[clamp(2rem,7vw,6rem)] text-text md:gap-14"
          >
            {item}
            <span className="text-violet">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="overflow-hidden border-y hairline py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-[1400px] px-6 md:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          (03) — Stack &amp; Tools
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        <MarqueeRow items={languages} />
        <MarqueeRow items={tools} reverse />
      </div>

      <RevealOnScroll className="mx-auto mt-14 max-w-[1400px] px-6 md:px-12">
        <p className="max-w-2xl text-lg text-muted">
          Comfortable across the stack — from the MERN toolchain and C++ to
          Python for data science and ML.
        </p>
      </RevealOnScroll>
    </section>
  );
}
