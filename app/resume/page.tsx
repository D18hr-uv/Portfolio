import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";

const RESUME = "/resume/Resume_Dhruv_Aug26.pdf";

export const metadata: Metadata = {
  title: "Résumé — Dhruv Bhardwaj",
  description: "Résumé of Dhruv Bhardwaj.",
};

export default function ResumePage() {
  return (
    <section className="min-h-[100svh] px-6 pb-16 pt-28 md:px-12 md:pt-32">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <FiArrowLeft /> Back home
            </Link>
            <h1 className="font-display font-bold uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(2.5rem,8vw,6rem)]">
              Résumé
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={RESUME}
              download
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              data-cursor="hover"
            >
              <FiDownload /> Download PDF
            </a>
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm text-text transition-colors hover:border-violet hover:text-violet"
              data-cursor="hover"
            >
              <FiExternalLink /> Open in new tab
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border hairline bg-surface">
          <object
            data={RESUME}
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Résumé PDF"
          >
            <div className="flex flex-col items-center gap-4 p-16 text-center text-muted">
              <p>Your browser can&apos;t display the PDF inline.</p>
              <a
                href={RESUME}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-medium text-bg"
              >
                <FiExternalLink /> Open the résumé
              </a>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
