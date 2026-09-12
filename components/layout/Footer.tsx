"use client";

import { FiGithub, FiLinkedin, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import AnimatedText from "@/components/ui/AnimatedText";
import MagneticButton from "@/components/ui/MagneticButton";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { person, socials } from "@/lib/data";

const links = [
  { label: "GitHub", href: socials.github, Icon: FiGithub },
  { label: "LinkedIn", href: socials.linkedin, Icon: FiLinkedin },
  { label: "Instagram", href: socials.instagram, Icon: FiInstagram },
];

export default function Footer() {
  const year = 2025;

  return (
    <footer
      id="contact"
      className="border-t hairline bg-bg px-6 pb-10 pt-24 md:px-12 md:pt-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          Get in touch
        </p>

        <h2 className="mt-6 font-display font-bold leading-[0.9] tracking-[-0.03em] text-[clamp(2.5rem,9vw,8rem)]">
          <AnimatedText text="Let's build" />
          <br />
          <span className="text-violet">
            <AnimatedText text="something." delay={0.15} />
          </span>
        </h2>

        <RevealOnScroll className="mt-10 flex flex-wrap items-center gap-3" delay={0.1}>
          {person.email ? (
            <a
              href={`mailto:${person.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              data-cursor="hover"
            >
              {person.email}
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : null}
          {links.map(({ label, href, Icon }) => (
            <MagneticButton key={label} className="inline-block">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm text-text transition-colors hover:border-violet hover:text-violet"
                data-cursor="hover"
              >
                <Icon className="text-base" />
                {label}
              </a>
            </MagneticButton>
          ))}
        </RevealOnScroll>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t hairline pt-6 text-sm text-muted md:flex-row">
          <span>Designed &amp; developed by {person.name}.</span>
          <span>© {year} — D3. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
