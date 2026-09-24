import Image from "next/image";
import {
  ArrowDown,
  BriefcaseBusiness,
  Palette,
  GraduationCap,
  Handshake,
  Building2,
  CalendarDays,
  Newspaper,
  Rocket,
  Globe2,
  Landmark,
} from "lucide-react";

type MeasureItem = {
  name: string;
  icon: React.ElementType;
};

const WE_MEASURE: MeasureItem[] = [
  { name: "Businesses supported", icon: BriefcaseBusiness },
  { name: "Brands developed", icon: Palette },
  { name: "People trained", icon: GraduationCap },
  { name: "Partnerships facilitated", icon: Handshake },
  { name: "Businesses connected", icon: Building2 },
  { name: "Events organized", icon: CalendarDays },
  { name: "Media stories produced", icon: Newspaper },
  { name: "Jobs and opportunities facilitated", icon: Rocket },
  { name: "Markets accessed", icon: Globe2 },
  { name: "Organizations supported", icon: Landmark },
];

type DashboardStat = {
  label: string;
  value: string;
};

// NOTE: every value below is the literal "00+" placeholder from the source
// content doc, which explicitly states these figures should be updated
// regularly as VEI grows. Replace with real numbers before this page ships.
const DASHBOARD_STATS: DashboardStat[] = [
  { label: "Businesses Supported", value: "00+" },
  { label: "People Trained", value: "00+" },
  { label: "Brands Developed", value: "00+" },
  { label: "Partnerships Created", value: "00+" },
  { label: "Countries Reached", value: "00+" },
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function ImpactPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/impact-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Our Impact</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Measuring Visibility.
              <br />
              Measuring Opportunity.
              <br />
              <span className="text-[#D4AF37]">Measuring Growth.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              Our impact goes beyond likes and followers.
            </p>

            <a href="#we-measure" className={HERO_CTA_CLASS}>
              See What We Measure
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WE MEASURE */}
      <section id="we-measure" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">We Measure</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              What actually counts as progress.
            </p>
          </div>

          <div className="grid grid-cols-2 border-t border-l border-white/10 sm:grid-cols-3 lg:grid-cols-5">
            {WE_MEASURE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex flex-col items-start gap-4 border-b border-r border-white/10 px-5 py-8 sm:px-6">
                  <Icon className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold leading-snug text-white">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT DASHBOARD */}
      <section className="relative border-b border-white/10 bg-[#0B0B0B] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Impact Dashboard</span>
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-dashed border-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {DASHBOARD_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-3 border-b border-r border-dashed border-white/15 px-6 py-10">
                <span className="text-5xl font-bold tracking-tight text-[#D4AF37]">{stat.value}</span>
                <span className="text-sm text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs italic text-white/30">
            Placeholder figures - to be updated regularly as VEI grows.
          </p>
        </div>
      </section>
    </main>
  );
}