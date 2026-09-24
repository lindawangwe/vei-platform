import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  TrendingUp,
  LineChart,
  Handshake,
  Compass,
  Globe2,
  Landmark,
  Building2,
  Share2,
} from "lucide-react";

type FocusArea = {
  name: string;
  icon: React.ElementType;
};

const FOCUS_AREAS: FocusArea[] = [
  { name: "Trade", icon: TrendingUp },
  { name: "Investment", icon: LineChart },
  { name: "Business Partnerships", icon: Handshake },
  { name: "Market Entry", icon: Compass },
  { name: "International Networking", icon: Globe2 },
  { name: "Conferences", icon: Landmark },
  { name: "Exhibitions", icon: Building2 },
  { name: "Strategic Alliances", icon: Share2 },
];

const AFRICA_MARKETS = ["Kenya", "Ghana", "Nigeria", "Uganda", "Tanzania", "Rwanda", "South Africa"];

const EXPANSION_MARKETS = ["UAE", "UK", "Europe", "USA", "Canada", "Asia"];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/opportunities-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">International Opportunities</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Business Has
              <br />
              <span className="text-[#D4AF37]">No Borders.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              VEI International connects businesses, professionals and organizations to opportunities beyond their domestic markets.
            </p>

            <a href="#focus" className={HERO_CTA_CLASS}>
              See Our Areas of Focus
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section id="focus" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Areas of Focus</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              Where we help businesses move beyond their domestic markets.
            </p>
          </div>

          <div className="grid grid-cols-2 border-t border-l border-white/10 sm:grid-cols-4">
            {FOCUS_AREAS.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.name} className="flex flex-col items-start gap-4 border-b border-r border-white/10 px-5 py-8 sm:px-6">
                  <Icon className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold leading-snug text-white sm:text-base">{area.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AFRICA BUSINESS CONNECT */}
      <section className="relative border-b border-white/10 bg-[#0B0B0B] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Africa Business Connect</span>
          </div>

          <p className="max-w-2xl text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
            A VEI initiative designed to connect businesses across African markets.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Potential Markets Include
              </p>
              <div className="flex flex-wrap gap-3">
                {AFRICA_MARKETS.map((market) => (
                  <span key={market} className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 px-5 py-2.5 text-sm font-medium text-white">
                    {market}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <ArrowRight className="h-6 w-6 text-[#D4AF37]/50" strokeWidth={1.5} />
            </div>

            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                Progressively Connecting To
              </p>
              <div className="flex flex-wrap gap-3">
                {EXPANSION_MARKETS.map((market) => (
                  <span key={market} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80">
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-sm leading-6 text-white/45">
            With strategic partnerships, VEI can progressively connect businesses to markets across UAE, UK, Europe, USA, Canada and Asia.
          </p>
        </div>
      </section>
    </main>
  );
}