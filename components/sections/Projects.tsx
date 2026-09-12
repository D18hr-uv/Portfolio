"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
              (04) — Selected Work
            </p>
            <h2 className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(2.5rem,9vw,8rem)]">
              <AnimatedText text="Recent" />
              <br />
              <span className="text-muted">
                <AnimatedText text="projects" delay={0.12} />
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-muted md:text-right">
            A selection of {projects.length} things I&apos;ve designed, built
            and shipped — from AI products to ML and data work.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
