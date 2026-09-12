"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const primary = project.demo ?? project.github;

  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.08 }}
      className="group relative flex flex-col"
    >
      <a
        href={primary}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="hover"
        className="relative block aspect-[16/10] overflow-hidden rounded-2xl border hairline bg-surface"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-1 items-center justify-center rounded-full bg-bg/70 text-lg text-text opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <FiArrowUpRight />
        </span>
      </a>

      <div className="mt-6 flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold leading-tight md:text-3xl">
          {project.title}
        </h3>
        <div className="mt-1 flex shrink-0 items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            data-cursor="hover"
            className="flex h-9 w-9 items-center justify-center rounded-full border hairline text-muted transition-colors hover:border-violet hover:text-violet"
          >
            <FiGithub />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              data-cursor="hover"
              className="flex h-9 w-9 items-center justify-center rounded-full border hairline text-muted transition-colors hover:border-lime hover:text-lime"
            >
              <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 max-w-xl leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full border hairline px-3 py-1 text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
