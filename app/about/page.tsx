import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Rocket,
  Globe,
  ArrowRight,
  Users,
  Palette,
  Megaphone,
  Radio,
  TrendingUp,
  GraduationCap,
  Target,
  Gem,
  Eye,
  Search,
  Handshake,
  Compass,
} from "lucide-react";

const ECOSYSTEM = [
  { label: "Branding", icon: Palette },
  { label: "Marketing", icon: Megaphone },
  { label: "Media", icon: Radio },
  { label: "Business Development", icon: TrendingUp },
  { label: "Networking", icon: Users },
  { label: "Training", icon: GraduationCap },
  { label: "International Connections", icon: Globe },
];

const CORE_VALUES = [
  "Excellence",
  "Integrity",
  "Innovation",
  "Collaboration",
  "Impact",
];

const STORY_BEATS = [
  {
    icon: Search,
    title: "The Observation",
    copy: "Many talented people and businesses have the potential to succeed but lack visibility, strategic positioning and access to the right opportunities.",
  },
  {
    icon: Handshake,
    title: "The Response",
    copy: "VEI was created to bridge that gap — built around the belief that a great opportunity can only create impact when the right people can see it, trust it and access it.",
  },
  {
    icon: Compass,
    title: "Where We're Headed",
    copy: "We are building an ecosystem where visibility becomes a pathway to opportunity, and opportunity becomes a pathway to growth.",
  },
];

const COLLAGE_IMAGES = [
  { src: "/images/about-collage-1.webp", rotate: "-rotate-3", hoverRotate: "group-hover/collage:-rotate-6" },
  { src: "/images/about-collage-2.webp", rotate: "rotate-2", hoverRotate: "group-hover/collage:rotate-5" },
  { src: "/images/about-collage-3.webp", rotate: "-rotate-2", hoverRotate: "group-hover/collage:-rotate-5" },
  { src: "/images/about-collage-4.webp", rotate: "rotate-3", hoverRotate: "group-hover/collage:rotate-6" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-20 text-white">

        {/* =========================
          WHO WE ARE — hero
        ========================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0B0B0B] py-16">
        <style>{`
          @keyframes vei-kenburns {
            0%   { transform: scale(1.18) translateX(-4%); }
           50%  { transform: scale(1.18) translateX(4%); }
           100% { transform: scale(1.18) translateX(-4%); }
          }
          .vei-kenburns {
            animation: vei-kenburns 18s ease-in-out infinite;
            transform-origin: center center;
            will-change: transform;
          }
          .group\\/frame:hover .vei-kenburns {
            animation-play-state: paused;
            transform: scale(1) translate(0, 0) !important;
            transition: transform 0.6s ease-out;
          }
          @media (prefers-reduced-motion: reduce) {
            .vei-kenburns {
              animation: none;
              transform: scale(1) translate(0, 0);
            }
          }
        `}</style>

      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:pl-8 lg:pr-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-6">

          {/* LEFT: text — narrowed */}
          <div className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Who We Are
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              We Build Brands.
              <br />
              We Build <span className="text-[#D4AF37]">Connections.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
              Visibility Empire International is an international business
              visibility and development organization focused on helping
              businesses, professionals and institutions strengthen their
              public presence, communicate their value and access
              opportunities for sustainable growth.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* RIGHT: images — widened, bleeds to the right edge */}
          <div className="lg:col-span-8">
            <div className="group/collage flex items-stretch gap-3 transition-[gap] duration-500 ease-out hover:gap-0">

              <div className="flex flex-1 items-stretch gap-3 transition-[gap] duration-500 ease-out group-hover/collage:gap-0">
                {COLLAGE_IMAGES.map((img, i) => (
                  <div
                    key={i}
                    className={`group/frame relative h-80 flex-1 overflow-hidden border-[3px] border-[#D4AF37] shadow-[0_0_0_3px_#0B0B0B,0_0_0_6px_rgba(212,175,55,0.5)] transition-all duration-500 ease-out sm:h-[420px] lg:h-[500px] ${img.rotate} ${img.hoverRotate} hover:!rotate-0 hover:z-20 hover:scale-110 hover:shadow-[0_0_0_3px_#0B0B0B,0_0_0_6px_#D4AF37,0_20px_40px_rgba(0,0,0,0.6)]`}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 20vw, 25vw"
                      className="object-cover vei-kenburns"
                      style={{ animationDelay: `${i * -4.5}s` }}
                      priority
                    />
                  </div>
                ))}
              </div>

              {/* Vertical stacked text */}
              <div className="hidden shrink-0 flex-col justify-center gap-3 pl-2 pr-6 lg:flex">
                {["Brands", "People", "Businesses", "Opportunities"].map((word) => (
                  <span
                    key={word}
                    className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]/80"
                  >
                    {word}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
      </section>

      {/* =========================
        ONE ECOSYSTEM — refined marquee
      ========================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#111111] py-16">
        <style>{`
          @keyframes vei-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .vei-marquee-track {
            animation: vei-marquee 36s linear infinite;
          }
          .vei-marquee-group:hover .vei-marquee-track {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .vei-marquee-track {
              animation: none;
              transform: translateX(0);
            }
            .vei-marquee-group {
              overflow-x: auto;
            }
          }
        `}</style>

        {/* Headline block */}
        <div className="mx-auto mb-12 max-w-3xl px-6">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              The Ecosystem
            </span>
          </div>
          <p className="text-2xl font-medium leading-6 text-white/60 sm:text-3xl">
            What we bring together as one ecosystem.
          </p>
        </div>

        <div className="vei-marquee-group relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#111111] to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#111111] to-transparent sm:w-32" />

          <div className="flex w-max gap-4 vei-marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-4">
                {ECOSYSTEM.map(({ label, icon: Icon }) => (
                  <div
                    key={`${copy}-${label}`}
                    className="flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#D4AF37]" strokeWidth={1.75} />
                    <span className="whitespace-nowrap text-base font-medium text-white sm:text-lg">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* =========================
        MISSION / VISION / VALUES / QUOTE
      ========================== */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#0B0B0B] py-20">

        {/* left-edge image, fades into the background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[26%] lg:block">
          {/* PLACEHOLDER — replace src with the real image */}
          <Image
            src="/images/about-mission-side.webp"
            alt=""
            fill
            sizes="26vw"
            className="object-cover object-left opacity-70 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0B0B0B]/60 to-[#0B0B0B]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 lg:pl-[28%]">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

            {/* Our Mission */}
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]">
                <Target className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#D4AF37]">
                Our Mission
              </h3>
              <p className="text-sm leading-6 text-white/60">
                To empower individuals, businesses and organizations to
                build visibility, credibility and opportunities through
                strategic media, branding, marketing, business
                development, training and global connections.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]">
                <Eye className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#D4AF37]">
                Our Vision
              </h3>
              <p className="text-sm leading-6 text-white/60">
                To be the leading global ecosystem for visibility,
                opportunity and sustainable growth, connecting people,
                businesses and markets across Africa and beyond.
              </p>
            </div>

            {/* Our Core Values */}
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]">
                <Gem className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#D4AF37]">
                Our Core Values
              </h3>
              <ul className="space-y-2">
                {CORE_VALUES.map((value) => (
                  <li key={value} className="flex items-center gap-2.5 text-sm text-white/60">
                    <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div className="flex items-center border-t border-white/10 pt-8 sm:col-span-2 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0 lg:col-span-1">
              <blockquote>
                <p className="text-2xl font-medium italic leading-snug text-[#D4AF37] sm:text-[26px]">
                  &ldquo;We don&apos;t just create visibility, we create
                  opportunities.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-white/50">— VEI</footer>
              </blockquote>
            </div>

          </div>
        </div>
        </section>

      {/* =========================
        OUR STORY
      ========================== */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#111111] py-20">
        <div className="mx-auto max-w-[1600px] px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">

            {/* LEFT: heading + story beats + CTA */}
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Founded Around a
                <br />
                Simple <span className="text-[#D4AF37]">Observation.</span>
              </h2>

              <Link
                href="/about-vei"
                className="mt-8 inline-flex items-center gap-2 border border-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0B0B0B]"
              >
                Learn More About VEI
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Story beats */}
              <ol className="mt-12 space-y-8 border-l border-white/10 pl-6">
                {STORY_BEATS.map(({ icon: Icon, title, copy }) => (
                  <li key={title} className="relative">
                    <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#111111]">
                      <Icon className="h-3 w-3 text-[#D4AF37]" strokeWidth={2} />
                    </span>
                    <h4 className="text-base font-semibold text-white">
                      {title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-white/50">
                      {copy}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* RIGHT: image collage with badge overlay */}
            <div className="lg:col-span-7">
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">

                {/* PLACEHOLDER — top-left wide */}
                <div className="relative col-span-2 h-52 overflow-hidden sm:col-span-2 sm:h-64">
                  <Image
                    src="/images/about-story-1.webp"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 40vw, 60vw"
                    className="object-cover"
                  />
                </div>

                {/* PLACEHOLDER — top-right */}
                <div className="relative col-span-2 h-52 overflow-hidden sm:col-span-1 sm:h-64">
                  <Image
                    src="/images/about-story-2.webp"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 20vw, 60vw"
                    className="object-cover"
                  />
                </div>

                {/* PLACEHOLDER — bottom-left */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/about-story-3.webp"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 20vw, 30vw"
                    className="object-cover"
                  />
                </div>

                {/* Badge overlay */}
                <div className="flex h-44 flex-col items-center justify-center gap-2 border border-[#D4AF37]/40 bg-[#0B0B0B]">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#D4AF37] text-sm font-bold text-[#D4AF37]">
                    VEI
                  </div>
                  <p className="text-center text-[11px] font-semibold uppercase leading-tight tracking-[0.15em] text-white">
                    Visibility Empire
                    <br />
                    <span className="text-[#D4AF37]">International</span>
                  </p>
                </div>

                {/* PLACEHOLDER — bottom-right */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src="/images/about-story-4.webp"
                    alt=""
                    fill
                    sizes="(min-width: 640px) 20vw, 30vw"
                    className="object-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}