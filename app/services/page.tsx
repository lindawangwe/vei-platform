import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  Palette,
  Megaphone,
  Newspaper,
  BriefcaseBusiness,
  Globe2,
  Target,
  CalendarDays,
} from "lucide-react";

type ServiceSection = {
  id: string;
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  intro: string;
  services: string[];
  note?: string;
  cta?: { label: string; href: string };
  theme: "dark" | "gold";
};

const SERVICES: ServiceSection[] = [
  {
    id: "branding",
    icon: Palette,
    eyebrow: "A - Branding & Creative Services",
    title: "Build a Brand People Remember",
    intro: "We help businesses establish professional, consistent and compelling identities.",
    services: [
      "Logo design",
      "Corporate identity",
      "Brand strategy",
      "Brand positioning",
      "Business profiles",
      "Company profiles",
      "Personal branding",
      "Brand guidelines",
      "Marketing materials",
      "Posters and brochures",
      "Presentation design",
      "Website content",
      "Campaign creative",
      "Visual communication",
    ],
    cta: { label: "Build My Brand", href: "/contact?service=branding" },
    theme: "dark",
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    eyebrow: "B - Digital Marketing",
    title: "Turn Digital Visibility Into Business Growth",
    intro: "Our digital marketing solutions help brands reach, engage and convert their target audiences.",
    services: [
      "Social media management",
      "Social media strategy",
      "Content creation",
      "Digital advertising",
      "Campaign management",
      "Lead generation",
      "Email marketing",
      "Online reputation",
      "Digital strategy",
      "Search visibility",
      "Influencer campaigns",
      "Analytics and reporting",
    ],
    theme: "gold",
  },
  {
    id: "media-pr",
    icon: Newspaper,
    eyebrow: "C - Media & Public Relations",
    title: "Tell Your Story. Build Your Reputation.",
    intro: "VEI helps individuals and organizations develop strategic public profiles.",
    services: [
      "Press releases",
      "Media campaigns",
      "Business features",
      "Executive interviews",
      "Video interviews",
      "Podcast appearances",
      "Public relations",
      "Corporate communications",
      "Event coverage",
      "Brand storytelling",
      "Reputation management",
      "Media relations",
    ],
    theme: "dark",
  },
  {
    id: "business-development",
    icon: BriefcaseBusiness,
    eyebrow: "D - Business Development",
    title: "From Visibility to Business Opportunities",
    intro: "Visibility is valuable when it produces opportunities. Our business development services help clients identify and pursue growth opportunities.",
    services: [
      "Business strategy",
      "Market research",
      "Business opportunity identification",
      "Lead generation",
      "Partnership development",
      "Customer acquisition strategy",
      "Market-entry strategy",
      "Business matchmaking",
      "Strategic introductions",
      "Growth consulting",
      "Sales strategy",
    ],
    theme: "gold",
  },
  {
    id: "international-market-access",
    icon: Globe2,
    eyebrow: "E - International Market Access",
    title: "Think Beyond Borders",
    intro: "VEI supports businesses and organizations looking to connect with new markets. We facilitate:",
    services: [
      "International business networking",
      "Market research",
      "Market-entry support",
      "Partner identification",
      "Business introductions",
      "Trade connections",
      "International events",
      "Cross-border collaborations",
      "Investment networking",
      "Expansion strategy",
    ],
    note: "Africa to Global Markets. We aim to help African businesses become more visible and competitive internationally while helping international organizations understand and access African markets.",
    theme: "dark",
  },
  {
    id: "consulting",
    icon: Target,
    eyebrow: "F - Business Consulting",
    title: "Clarity Before Growth",
    intro: "Our consulting services help entrepreneurs and organizations make better strategic decisions.",
    services: [
      "Business startup strategy",
      "Business model development",
      "Business planning",
      "Branding strategy",
      "Marketing strategy",
      "Growth strategy",
      "Market positioning",
      "Digital transformation",
      "Partnership strategy",
      "International expansion",
    ],
    theme: "gold",
  },
  {
    id: "events-activations",
    icon: CalendarDays,
    eyebrow: "G - Events & Activations",
    title: "Visibility in the Room, Not Just Online",
    intro: "We design and manage events that create visibility, networking and commercial opportunities.",
    services: [
      "Conferences",
      "Business forums",
      "Exhibitions",
      "Networking events",
      "Corporate events",
      "Product launches",
      "Awards",
      "Workshops",
      "Summits",
      "Brand activations",
    ],
    theme: "dark",
  },
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function ServicesPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO - Integrated Solutions */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/services-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Our Services</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Integrated Solutions for
              <br />
              <span className="text-[#D4AF37]">Visibility and Growth.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              VEI provides a range of interconnected services designed to help clients at every stage of their journey.
            </p>

            <a href="#branding" className={HERO_CTA_CLASS}>
              Explore Our Services
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS - alternating gold / black */}
      {SERVICES.map((service) => {
        const isGold = service.theme === "gold";
        const Icon = service.icon;

        const sectionClass = isGold
          ? "relative scroll-mt-20 border-b py-20 sm:py-24 border-black/10 bg-[#D4AF37] text-[#0B0B0B]"
          : "relative scroll-mt-20 border-b py-20 sm:py-24 border-white/10 bg-[#0B0B0B] text-white";

        const iconWrapClass = isGold
          ? "mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#0B0B0B]"
          : "mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]";

        const iconClass = isGold ? "h-6 w-6 text-[#0B0B0B]" : "h-6 w-6 text-[#D4AF37]";
        const ruleClass = isGold ? "h-px w-10 bg-[#0B0B0B]" : "h-px w-10 bg-[#D4AF37]";
        const eyebrowClass = isGold
          ? "text-xs font-semibold uppercase tracking-[0.3em] text-[#0B0B0B]/70"
          : "text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]";
        const introClass = isGold ? "mt-5 max-w-md text-base leading-7 text-[#0B0B0B]/75" : "mt-5 max-w-md text-base leading-7 text-white/60";
        const noteClass = isGold ? "mt-4 max-w-md text-sm leading-6 text-[#0B0B0B]/60" : "mt-4 max-w-md text-sm leading-6 text-white/45";
        const ctaClass = isGold
          ? "mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition bg-[#0B0B0B] text-[#D4AF37] hover:bg-[#1a1a1a]"
          : "mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition bg-[#D4AF37] text-[#0B0B0B] hover:bg-[#E5C766]";
        const listClass = isGold
          ? "grid grid-cols-1 gap-x-8 gap-y-3 border-t sm:grid-cols-2 border-black/15"
          : "grid grid-cols-1 gap-x-8 gap-y-3 border-t sm:grid-cols-2 border-white/10";
        const listItemClass = isGold
          ? "flex items-center gap-3 border-b py-3 text-sm sm:text-base border-black/15 text-[#0B0B0B]/85"
          : "flex items-center gap-3 border-b py-3 text-sm sm:text-base border-white/10 text-white/75";
        const bulletClass = isGold
          ? "h-1.5 w-1.5 shrink-0 rotate-45 bg-[#0B0B0B]"
          : "h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37]";

        return (
          <section key={service.id} id={service.id} className={sectionClass}>
            <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-5">
                  <div className={iconWrapClass}>
                    <Icon className={iconClass} strokeWidth={1.5} />
                  </div>

                  <div className="mb-5 flex items-center gap-3">
                    <span className={ruleClass} />
                    <span className={eyebrowClass}>{service.eyebrow}</span>
                  </div>

                  <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{service.title}</h2>

                  <p className={introClass}>{service.intro}</p>

                  {service.note ? <p className={noteClass}>{service.note}</p> : null}

                  {service.cta ? (
                    <Link href={service.cta.href} className={ctaClass}>
                      {service.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>

                <div className="lg:col-span-7">
                  <ul className={listClass}>
                    {service.services.map((item) => (
                      <li key={item} className={listItemClass}>
                        <span className={bulletClass} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
