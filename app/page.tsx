import Image from "next/image";
import Link from "next/link";
import {
    PenTool,
    Megaphone,
    Mic2,
    TrendingUp,
    GraduationCap,
    Globe,
    Eye,
    ShieldCheck,
    Users,
    Target,
    ArrowRight,
    CheckCircle2,
    User,
    Building2,
    Rocket,
    Building,
    HeartHandshake,
    Landmark,
    Briefcase,
    UserCheck,
    Star,
    Trophy,
    Palette,
    Coins,
    Share2,
  
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

        {/* =========================
            HERO
        ========================== */}
        <section className="relative min-h-screen overflow-hidden">

          {/* Empire / World Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-background.webp"
              alt=""
              fill
              priority
              className="object-cover object-center"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Subtle gold atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]" />
          </div>

          {/* =========================
              HERO CONTENT (50/50 split, full section height)
          ========================== */}
          <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-2">

            {/* LEFT: text column */}
            <div className="flex flex-col justify-center px-6 pb-12 pt-32 lg:px-12 xl:px-16">

              <div className="max-w-xl">

                {/* Eyebrow */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#D4AF37]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E5C766]">
                    Visibility Empire International
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
                  BUILD VISIBILITY.
                  <br />

                  <span className="text-[#D4AF37]">
                    CREATE OPPORTUNITIES.
                  </span>

                  <br />

                  GROW YOUR EMPIRE.
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                  We connect brands, businesses, media, talent and opportunities
                  to build visibility and create global growth from Africa to
                  the world.
                </p>

                {/* CTA buttons */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center border border-[#D4AF37] bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]"
                  >
                    Get Started
                    <span className="ml-2">→</span>
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center border border-white/20 bg-black/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Explore Our Services
                    <span className="ml-2">→</span>
                  </Link>

                </div>

                {/* Tagline */}
                <div className="mt-10 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D4AF37]" />

                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#E5C766]">
                    BE SEEN. BE HEARD. BE GLOBAL.
                  </span>
                </div>

              </div>

            </div>

            {/* =========================
                RIGHT: HERO IMAGE (desktop) — exactly half width, full section height
            ========================== */}
            <div className="relative hidden h-full w-full lg:block">
              <Image
                src="/images/hero.webp"
                alt="Visibility Empire International digital platform"
                fill
                priority
                className="object-contain "
              />
            </div>

            {/* Mobile version of devices */}
            <div className="relative mt-4 block w-full px-6 lg:hidden">
              <Image
                src="/images/vei-devices.png"
                alt="Visibility Empire International digital platform"
                width={1600}
                height={1000}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

          </div>
          </section>
          {/* =========================
              INTRODUCTION
          ========================== */}
          <section className="relative border border-[#D4AF37] bg-[#0B0B0B] py-16">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Introduction
                </span>

                <span className="h-px w-10 bg-[#D4AF37]" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Where Visibility Meets Opportunity
              </h2>

              <p className="mt-8 text-base leading-7 text-white/60 sm:text-lg">
                In today&apos;s competitive world, being good at what you do is not
                enough. You must be{" "}
                <span className="font-semibold text-white">
                  visible, credible, connected and strategically positioned.
                </span>
              </p>

              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg">
                At Visibility Empire International, we help transform ideas,
                businesses, professionals and organizations into recognizable and
                opportunity-ready brands.
              </p>

              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg">
                Through our integrated ecosystem of branding, digital marketing,
                media, public relations, business development, networking, training
                and international market access, we help our clients move from
                visibility to sustainable growth.
              </p>

            </div>

          </div>
          </section> 
          {/* =========================
                    WHAT WE DO
            ========================== */}
          <section className="relative overflow-hidden border-t border-white/10 bg-[#0B0B0B] py-16">

          {/* Decorative gold corner accents */}
          <div className="pointer-events-none absolute inset-0 z-0">

            {/* Top-left rays */}
            <svg
              className="absolute -left-10 -top-10 h-72 w-72"
              viewBox="0 0 200 200"
              fill="none"
            >
              <line x1="0" y1="40" x2="160" y2="-90" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.55" />
              <line x1="0" y1="75" x2="185" y2="-90" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="0" y1="110" x2="210" y2="-90" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.2" />
              <line x1="0" y1="145" x2="235" y2="-90" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.1" />
            </svg>

            {/* Top-right rays (mirrored) */}
            <svg
              className="absolute -right-10 -top-10 h-72 w-72 -scale-x-100"
              viewBox="0 0 200 200"
              fill="none"
            >
              <line x1="0" y1="40" x2="160" y2="-90" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.55" />
              <line x1="0" y1="75" x2="185" y2="-90" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.35" />
              <line x1="0" y1="110" x2="210" y2="-90" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.2" />
              <line x1="0" y1="145" x2="235" y2="-90" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.1" />
            </svg>

          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  What We Do
                </span>

                <span className="h-px w-10 bg-[#D4AF37]" />
              </div>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                We Make Visibility
                <br />
                <span className="text-[#D4AF37]">Work For You.</span>
              </h2>

              <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg">
                Visibility Empire International brings business, media,
                networking, education and global opportunities together within
                one connected ecosystem.
              </p>

            </div>

            {/* Service grid */}
            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-6">

              {[
                {
                  title: "Branding & Creative",
                  description:
                    "We build professional identities that communicate who you are, what you offer and why people should trust you.",
                  Icon: PenTool,
                },
                {
                  title: "Digital Marketing",
                  description:
                    "We help businesses reach the right audiences through strategic digital campaigns, content and social media.",
                  Icon: Megaphone,
                },
                {
                  title: "Media & PR",
                  description:
                    "We tell your story, strengthen your public profile and connect you with relevant media and audiences.",
                  Icon: Mic2,
                },
                {
                  title: "Business Development",
                  description:
                    "We help businesses identify customers, partners, markets and growth opportunities.",
                  Icon: TrendingUp,
                },
                {
                  title: "Training & Capacity Building",
                  description:
                    "We equip entrepreneurs, professionals and organizations with practical knowledge to grow.",
                  Icon: GraduationCap,
                },
                {
                  title: "International Market Access",
                  description:
                    "We facilitate connections between businesses, organizations and opportunities across markets.",
                  Icon: Globe,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Icon badge with gold ring + glow */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#0B0B0B] shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]">
                    <item.Icon className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/50">
                    {item.description}
                  </p>

                  <span className="mt-4 h-px w-8 bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#D4AF37]" />
                </div>
              ))}

            </div>

          </div>
          </section>
          {/* =========================
                      WHY VEI
                    ========================== */}
        <section className="relative overflow-hidden border border-[#D4AF37] bg-[#0B0B0B] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">

              {/* LEFT: intro + icon flow */}
              <div className="lg:col-span-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D4AF37]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Why VEI?
                  </span>
                </div>

                <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                  Visibility Is More
                  <br />
                  <span className="text-[#D4AF37]">Than Being Seen.</span>
                </h2>

                <p className="mt-5 text-base leading-7 text-white/70">
                  We believe true visibility should lead somewhere.
                </p>

                {/* Icon flow — */}
                <div className="mt-10 flex flex-wrap items-start gap-y-6">
                  {[
                    { label: "Visibility", Icon: Eye },
                    { label: "Credibility", Icon: ShieldCheck },
                    { label: "Connections", Icon: Users },
                    { label: "Opportunities", Icon: Target },
                    { label: "Growth", Icon: TrendingUp },
                  ].map((step, i, arr) => (
                    <div key={step.label} className="flex items-center">
                      <div className="flex w-16 flex-col items-center gap-2 text-center">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#0B0B0B] shadow-[0_0_16px_rgba(212,175,55,0.25)]">
                          <step.Icon className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.75} />
                        </div>
                        <span className="whitespace-nowrap text-[11px] font-medium text-white/80">
                          {step.label}
                        </span>
                      </div>

                      {i < arr.length - 1 && (
                        <ArrowRight className="mx-1 mb-5 h-4 w-4 shrink-0 text-[#D4AF37]/50" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm leading-6 text-white/50">
                  Our approach combines communication, technology, business strategy
                  and networks to create measurable value for our clients.
                </p>

                <span className="mt-8 block h-px w-10 bg-[#D4AF37]/50" />
              </div>

              {/* MIDDLE: what makes us different checklist — narrowed from col-span-4 to col-span-3 */}
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold text-[#D4AF37]">
                  What Makes Us Different
                </h3>

                <ul className="mt-6 space-y-4">
                  {[
                    "Integrated business ecosystem",
                    "Local knowledge with international outlook",
                    "Strategic rather than transactional approach",
                    "Business-focused visibility",
                    "Strong partnership philosophy",
                    "Customized solutions",
                    "Opportunity-driven networking",
                    "Capacity building",
                    "Long-term growth orientation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" strokeWidth={1.75} />
                      <span className="text-sm leading-6 text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT: portrait image with all-edge fade */}
              <div className="relative lg:col-span-4">
                <div className="relative h-[500px] w-full lg:h-full lg:min-h-[500px]">

                  <div
                    className="absolute inset-0"
                    style={{
                      maskImage:
                        "linear-gradient(to left, transparent 5%, black 10%, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 90%, transparent 100%)",
                      maskComposite: "intersect",
                      WebkitMaskImage:
                        "linear-gradient(to left, transparent 5%, black 10%, black 50%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 90%, transparent 100%)",
                      WebkitMaskComposite: "source-in",
                    }}
                  >
                    <Image
                      src="/images/why-vei-portrait.webp"
                      alt="Local expertise, global opportunities"
                      fill
                      className="object-cover object-right center"
                    />
                  </div>

                  {/* Overlay tagline */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <p className="text-sm font-semibold uppercase leading-6 tracking-wide text-white">
                      Local
                      <br />
                      <span className="text-[#D4AF37]">Expertise.</span>
                      <br />
                      Global
                      <br />
                      Opportunities.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* =========================
             OUR CORE PILLARS
          ========================== */}
        <section className="relative border-t border-white/10 bg-[#0B0B0B] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

              {/* LEFT: heading */}
              <div className="lg:col-span-3">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D4AF37]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                    Our Core Pillars
                  </span>
                </div>

                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  The Foundation
                  <br />
                  <span className="text-[#D4AF37]">of Lasting Growth.</span>
                </h2>

                <p className="mt-5 text-sm leading-6 text-white/50">
                  Our five core pillars guide everything we do, ensuring that our
                  clients achieve real visibility, build credibility, create
                  meaningful connections, unlock opportunities and grow into lasting
                  empires.
                </p>
              </div>

              {/* RIGHT: 5 numbered cards */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-5">
                {[
                  {
                    number: "01",
                    title: "Visibility",
                    description: "We help you become visible to the people who matter.",
                    Icon: Eye,
                  },
                  {
                    number: "02",
                    title: "Credibility",
                    description: "We build professional brands that inspire confidence.",
                    Icon: ShieldCheck,
                  },
                  {
                    number: "03",
                    title: "Connection",
                    description: "We connect people, businesses and institutions to relevant networks.",
                    Icon: Users,
                  },
                  {
                    number: "04",
                    title: "Opportunity",
                    description: "We identify opportunities for growth, partnerships and market access.",
                    Icon: Target,
                  },
                  {
                    number: "05",
                    title: "Empire",
                    description: "We help our clients build sustainable, scalable and recognizable enterprises.",
                    Icon: TrendingUp,
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group flex flex-col items-center border border-white/10 bg-[#0B0B0B] px-5 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
                  >
                    <span className="text-sm font-semibold text-[#D4AF37]">
                      {item.number}
                    </span>

                    <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#0B0B0B] shadow-[0_0_16px_rgba(212,175,55,0.25)] transition-all duration-300 group-hover:shadow-[0_0_26px_rgba(212,175,55,0.4)]">
                      <item.Icon className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.75} />
                    </div>

                    <h3 className="mt-5 text-sm font-bold uppercase tracking-wide">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-white/50">
                      {item.description}
                    </p>

                    <span className="mt-5 h-px w-8 bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-12 group-hover:bg-[#D4AF37]" />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Glowing gold divider — the "glow border" at the center */}
          <div className="mx-auto mt-20 h-px max-w-4xl bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60 shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
        </section>
        {/* =========================
              WHO WE SERVE
          ========================== */}
        <section className="relative overflow-hidden border-t border-white/10 bg-[#0B0B0B] py-16">

        {/* Decorative globe background image */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] opacity-40">
          <Image
            src="/images/who-we-serve-globe.webp"
            alt=""
            fill
            sizes="240px"
            className="object-contain"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

            {/* LEFT: heading + CTA */}
            <div className="lg:col-span-4">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                  Who We Serve
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Built for a Diverse
                <br />
                <span className="text-[#D4AF37]">and Global Community.</span>
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/60">
                VEI works with individuals, businesses and organizations across
                industries and sectors, including:
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 border border-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-[#0B0B0B]"
              >
                Partner With VEI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* RIGHT: audience grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-5">
              {[
                { label: "Entrepreneurs", Icon: User },
                { label: "SMEs", Icon: Building2 },
                { label: "Startups", Icon: Rocket },
                { label: "Corporations", Icon: Building },
                { label: "NGOs & Foundations", Icon: HeartHandshake },
                { label: "Institutions", Icon: Landmark },
                { label: "Professionals", Icon: Briefcase },
                { label: "Executives", Icon: UserCheck },
                { label: "Public Figures", Icon: Star },
                { label: "Sports Organizations", Icon: Trophy },
                { label: "Creative Professionals", Icon: Palette },
                { label: "Educational Institutions", Icon: GraduationCap },
                { label: "International Companies", Icon: Globe },
                { label: "Investors", Icon: Coins },
                { label: "Business Networks", Icon: Share2 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-3 border border-white/10 bg-[#0B0B0B] px-3 py-6 text-center transition duration-300 hover:border-[#D4AF37]/50"
                >
                  <item.Icon className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.75} />
                  <span className="text-xs font-medium leading-5 text-white/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom tagline */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#D4AF37]/50" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
              Together, We Build Global Impact.
            </span>
            <span className="h-px w-12 bg-[#D4AF37]/50" />
          </div>
        </div>
        </section>
        {/* =========================
                FEATURED CTA
         ========================== */}
        <section className="relative overflow-hidden border-t border-white/10 bg-[#0B0B0B] py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="relative overflow-hidden border border-[#D4AF37] bg-gradient-to-br from-[#151515] to-[#0B0B0B] px-8 py-16 text-center shadow-[0_0_40px_rgba(212,175,55,0.15)] sm:px-16">

              {/* Ambient glow */}
              <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

              <div className="relative z-10">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Are You Ready to
                  <br />
                  <span className="text-[#D4AF37]">Become More Visible?</span>
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                  Join a growing network of brands, businesses and individuals
                  building visibility, credibility and global opportunities with
                  Visibility Empire International.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]"
                  >
                    Start Your VEI Journey
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      
    </main>
  );
}