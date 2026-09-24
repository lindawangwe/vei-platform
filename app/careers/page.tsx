import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const CAREER_AREAS = [
  "Marketing",
  "Media",
  "Sales",
  "Business development",
  "Graphic design",
  "Content creation",
  "Technology",
  "Research",
  "Events",
  "Administration",
  "International business",
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function CareersPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/careers-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Careers</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build Your Career
              <br />
              <span className="text-[#D4AF37]">With VEI.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              We are building a team of professionals, creatives, strategists, marketers, media specialists and business development experts.
            </p>

            <a href="#work-with-us" className={HERO_CTA_CLASS}>
              View Opportunities
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="relative border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Areas</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {CAREER_AREAS.map((area) => (
              <span key={area} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK WITH US */}
      <section id="work-with-us" className="relative scroll-mt-20 border-b border-white/10 bg-[#0B0B0B] py-24 sm:py-28">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Work With Us</span>
              <span className="h-px w-10 bg-[#D4AF37]" />
            </div>

            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              If you are passionate about business, creativity, technology, communication and opportunity creation, we would like to hear from you.
            </p>

            <Link href="/careers/openings" className="mx-auto mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]">
              View Opportunities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}