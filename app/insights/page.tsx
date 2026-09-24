import Image from "next/image";
import {
  ArrowDown,
  BriefcaseBusiness,
  Megaphone,
  Users,
  Globe2,
  BookOpen,
  CalendarDays,
  Handshake,
} from "lucide-react";

type InsightCategory = {
  name: string;
  icon: React.ElementType;
  topics?: string[];
};

const CATEGORIES: InsightCategory[] = [
  {
    name: "Business",
    icon: BriefcaseBusiness,
    topics: ["Business strategies", "SME growth", "Entrepreneurship"],
  },
  {
    name: "Marketing",
    icon: Megaphone,
    topics: ["Digital marketing", "Branding", "Social media"],
  },
  {
    name: "Leadership",
    icon: Users,
    topics: ["Leadership", "Career development", "Professional growth"],
  },
  {
    name: "International",
    icon: Globe2,
    topics: ["African markets", "Trade", "Investment", "International business"],
  },
  {
    name: "VEI Stories",
    icon: BookOpen,
    topics: ["Client stories", "Success stories"],
  },
  {
    name: "Events",
    icon: CalendarDays,
  },
  {
    name: "Partnerships",
    icon: Handshake,
  },
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function InsightsPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/insights-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Insights & News</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Ideas. Stories.
              <br />
              <span className="text-[#D4AF37]">Knowledge. Opportunities.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              The VEI Insights platform provides practical information for entrepreneurs and professionals.
            </p>

            <a href="#categories" className={HERO_CTA_CLASS}>
              Browse Categories
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Categories</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              Find what&apos;s relevant to where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="flex flex-col gap-5 border-b border-r border-white/10 px-6 py-8 sm:px-8 sm:py-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]">
                    <Icon className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>

                  {category.topics ? (
                    <ul className="space-y-2">
                      {category.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2.5 text-sm text-white/55">
                          <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37]" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}