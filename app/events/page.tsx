import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Landmark,
  Globe2,
  UserPlus,
  Trophy,
} from "lucide-react";

type FlagshipEvent = {
  name: string;
  href: string;
  icon: React.ElementType;
  description: string;
};

const FLAGSHIP_EVENTS: FlagshipEvent[] = [
  {
    name: "Visibility Empire Business Summit",
    href: "/events/business-summit",
    icon: Landmark,
    description: "A platform for entrepreneurship, business growth and networking.",
  },
  {
    name: "Africa Business & Investment Forum",
    href: "/events/africa-business-investment-forum",
    icon: Globe2,
    description: "Connecting businesses, investors and institutions.",
  },
  {
    name: "Young Entrepreneurs Summit",
    href: "/events/young-entrepreneurs-summit",
    icon: UserPlus,
    description: "Supporting the next generation of business leaders.",
  },
  {
    name: "VEI Excellence & Visibility Awards",
    href: "/events/awards",
    icon: Trophy,
    description: "Recognizing businesses, entrepreneurs and organizations creating exceptional impact.",
  },
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function EventsPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/events-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">VEI Events</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Connect. Learn.
              <br />
              <span className="text-[#D4AF37]">Collaborate. Grow.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              VEI Events brings together entrepreneurs, businesses, professionals, investors, institutions and thought leaders.
            </p>

            <a href="#flagship" className={HERO_CTA_CLASS}>
              See Our Flagship Events
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FLAGSHIP EVENTS */}
      <section id="flagship" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Flagship Events</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              Four platforms, one purpose - bringing the right people together.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2">
            {FLAGSHIP_EVENTS.map((event) => {
              const Icon = event.icon;
              return (
                <Link
                  key={event.name}
                  href={event.href}
                  className="group flex flex-col justify-between gap-8 border-b border-r border-white/10 px-6 py-10 transition-colors hover:bg-white/[0.03] sm:px-8"
                >
                  <Icon className="h-6 w-6 text-[#D4AF37]/70 transition-colors group-hover:text-[#D4AF37]" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-white">{event.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/50">{event.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] opacity-0 transition group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}