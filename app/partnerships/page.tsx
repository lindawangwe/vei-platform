import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Target,
  Newspaper,
  Building2,
  GraduationCap,
  CalendarDays,
  Globe2,
  LineChart,
  MonitorPlay,
} from "lucide-react";

const WE_WELCOME = [
  "Corporations",
  "SMEs",
  "Governments",
  "NGOs",
  "Foundations",
  "Media organizations",
  "Universities",
  "Training institutions",
  "Financial institutions",
  "Investors",
  "Technology companies",
  "Business associations",
  "International organizations",
];

type PartnershipType = {
  name: string;
  icon: React.ElementType;
};

const PARTNERSHIP_OPPORTUNITIES: PartnershipType[] = [
  { name: "Strategic Partnerships", icon: Target },
  { name: "Media Partnerships", icon: Newspaper },
  { name: "Corporate Partnerships", icon: Building2 },
  { name: "Training Partnerships", icon: GraduationCap },
  { name: "Event Partnerships", icon: CalendarDays },
  { name: "Market Access Partnerships", icon: Globe2 },
  { name: "Investment Partnerships", icon: LineChart },
  { name: "Technology Partnerships", icon: MonitorPlay },
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/partnerships-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Partner With VEI</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Growth Happens Faster
              <br />
              <span className="text-[#D4AF37]">When We Work Together.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              VEI believes partnerships are essential to creating sustainable opportunities.
            </p>

            <a href="#opportunities" className={HERO_CTA_CLASS}>
              See Partnership Opportunities
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WE WELCOME PARTNERSHIPS WITH */}
      <section className="relative border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-10 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">We Welcome Partnerships With</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {WE_WELCOME.map((entity) => (
              <span key={entity} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80">
                {entity}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP OPPORTUNITIES */}
      <section id="opportunities" className="relative scroll-mt-20 border-b border-white/10 bg-[#0B0B0B] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Partnership Opportunities</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Ways to Build With Us
              </h2>

              <Link href="/contact?service=partnerships" className="mt-8 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]">
                Partner With VEI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2">
                {PARTNERSHIP_OPPORTUNITIES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.name} className="flex items-center gap-4 border-b border-r border-white/10 px-6 py-6">
                      <Icon className="h-5 w-5 shrink-0 text-[#D4AF37]" strokeWidth={1.5} />
                      <h3 className="text-sm font-semibold text-white sm:text-base">{item.name}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}