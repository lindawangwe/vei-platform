import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Search,
  Compass,
  Megaphone,
  Handshake,
  TrendingUp,
  Rocket,
} from "lucide-react";

type FrameworkStage = {
  step: string;
  icon: React.ElementType;
};

const FRAMEWORK: FrameworkStage[] = [
  { step: "Discover", icon: Search },
  { step: "Position", icon: Compass },
  { step: "Promote", icon: Megaphone },
  { step: "Connect", icon: Handshake },
  { step: "Convert", icon: TrendingUp },
  { step: "Expand", icon: Rocket },
];

const GROWTH_SERVICES = [
  "Business consulting",
  "Business model development",
  "Market research",
  "Marketing strategy",
  "Customer acquisition",
  "Partnership development",
  "Business matchmaking",
  "Market entry",
  "Corporate positioning",
  "Strategic networking",
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function BusinessPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/business-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Business Development & Growth</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We Don&apos;t Just Promote Businesses.
              <br />
              <span className="text-[#D4AF37]">We Help Them Grow.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              VEI Business provides strategic services to entrepreneurs, SMEs and organizations looking to improve their positioning, reach customers and access new opportunities.
            </p>

            <a href="#framework" className={HERO_CTA_CLASS}>
              See the Growth Framework
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* GROWTH FRAMEWORK */}
      <section id="framework" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Our Business Growth Framework</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              A clear path from where you are to where you&apos;re going.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10 lg:flex-row lg:divide-x lg:divide-y-0">
            {FRAMEWORK.map((stage, index) => {
              const Icon = stage.icon;
              const stepNumber = String(index + 1).padStart(2, "0");
              return (
                <div key={stage.step} className="group flex flex-1 items-center gap-5 px-2 py-6 transition-colors hover:bg-white/[0.03] lg:flex-col lg:items-start lg:justify-between lg:gap-10 lg:px-6 lg:py-10">
                  <span className="text-xs font-semibold tracking-[0.2em] text-white/30">{stepNumber}</span>
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-5">
                    <Icon className="h-6 w-6 shrink-0 text-[#D4AF37]/70 transition-colors group-hover:text-[#D4AF37]" strokeWidth={1.5} />
                    <h3 className="text-lg font-semibold text-white">{stage.step}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS GROWTH SERVICES */}
      <section className="relative border-b border-white/10 bg-[#0B0B0B] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Business Growth Services</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Support at Every Stage of Growth
              </h2>

              <Link href="/contact?service=business" className="mt-8 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]">
                Talk to VEI Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/10 sm:grid-cols-2">
                {GROWTH_SERVICES.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/75 sm:text-base">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}