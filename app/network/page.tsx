import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  UserRound,
  Rocket,
  BriefcaseBusiness,
  Building2,
  Landmark,
  Globe2,
} from "lucide-react";

type MembershipCategory = {
  name: string;
  icon: React.ElementType;
};

const CATEGORIES: MembershipCategory[] = [
  { name: "Individual Member", icon: UserRound },
  { name: "Entrepreneur Member", icon: Rocket },
  { name: "SME Member", icon: BriefcaseBusiness },
  { name: "Corporate Member", icon: Building2 },
  { name: "Institutional Partner", icon: Landmark },
  { name: "International Partner", icon: Globe2 },
];

const MEMBERSHIP_BENEFITS = [
  "Business directory listing",
  "Networking events",
  "Business referrals",
  "Training opportunities",
  "Business features",
  "Partnership opportunities",
  "Industry connections",
  "Promotional opportunities",
  "Member resources",
  "International networking",
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function NetworkPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/network-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">The VEI Business Network</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Network Can Become Your
              <br />
              <span className="text-[#D4AF37]">Greatest Business Asset.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              VEI Network connects members to business communities, professionals, entrepreneurs and potential partners.
            </p>

            <a href="#membership" className={HERO_CTA_CLASS}>
              Join VEI Network
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP BENEFITS */}
      <section id="membership" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Membership Benefits</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                What Membership Gets You
              </h2>

              <Link href="/contact?service=network" className="mt-8 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]">
                Join VEI Network
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/10 sm:grid-cols-2">
                {MEMBERSHIP_BENEFITS.map((item) => (
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

      {/* MEMBERSHIP CATEGORIES */}
      <section className="relative border-b border-white/10 bg-[#0B0B0B] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Membership Categories</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              A category for wherever you are in your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="flex items-center gap-4 border-b border-r border-white/10 px-6 py-8 sm:px-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]">
                    <Icon className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{category.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}