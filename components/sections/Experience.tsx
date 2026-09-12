"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
              (02) — Experience
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(2.5rem,9vw,8rem)]">
              <AnimatedText text="Where" />
              <br />
              <span className="text-muted">
                <AnimatedText text="I've worked" delay={0.12} />
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-muted md:text-right">
            From AI-driven backends to large-scale enterprise ERP systems.
          </p>
        </div>

        <div className="flex flex-col">
          {experience.map((job, i) => (
            <RevealOnScroll
              key={job.company}
              delay={i * 0.05}
              className="grid gap-6 border-t hairline py-10 md:grid-cols-[240px_1fr] md:py-14"
            >
              <div>
                <p className="text-sm text-muted">{job.period}</p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-1 text-lg text-violet">{job.company}</p>
                {job.note && (
                  <p className="mt-1 text-sm text-muted">{job.note}</p>
                )}

                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 leading-relaxed text-muted"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border hairline px-3 py-1 text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
