import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDown,
  BriefcaseBusiness,
  MonitorPlay,
  UserRound,
  Building2,
  GraduationCap,
} from "lucide-react";

type CourseCategory = {
  name: string;
  icon: React.ElementType;
  topics?: string[];
  description?: string;
};

const COURSES: CourseCategory[] = [
  {
    name: "Business & Entrepreneurship",
    icon: BriefcaseBusiness,
    topics: [
      "Entrepreneurship fundamentals",
      "Business planning",
      "Business models",
      "Business development",
    ],
  },
  {
    name: "Digital",
    icon: MonitorPlay,
    topics: [
      "Digital marketing",
      "Social media management",
      "Content creation",
      "Personal branding",
      "AI for business",
    ],
  },
  {
    name: "Professional Development",
    icon: UserRound,
    topics: [
      "Leadership",
      "Communication",
      "Sales",
      "Customer service",
      "Career development",
    ],
  },
  {
    name: "Corporate Training",
    icon: Building2,
    description: "Customized programs for organizations and institutions.",
  },
];

const ACADEMY_FEATURES = [
  "Short courses",
  "Masterclasses",
  "Workshops",
  "Webinars",
  "Corporate training",
  "Mentorship",
  "Certificates",
];

const HERO_CTA_CLASS =
  "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

export default function AcademyPage() {
  return (
    <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
        {/* PLACEHOLDER - replace src with the real background image */}
        <Image src="/images/academy-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#0B0B0B]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">VEI Academy</span>
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/50">
              Learn. Build. Grow.
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Practical Knowledge for
              <br />
              <span className="text-[#D4AF37]">the Modern Entrepreneur.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
              VEI Academy equips entrepreneurs, professionals, students and organizations with practical skills for today&apos;s economy.
            </p>

            <a href="#courses" className={HERO_CTA_CLASS}>
              Explore VEI Academy
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="mb-14 max-w-2xl sm:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4AF37]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Courses</span>
            </div>
            <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
              Skills organized around what you actually need next.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2">
            {COURSES.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="flex flex-col gap-6 border-b border-r border-white/10 px-6 py-8 sm:px-8 sm:py-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]">
                    <Icon className="h-5 w-5 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>

                  {category.topics ? (
                    <ul className="space-y-2.5">
                      {category.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2.5 text-sm text-white/60">
                          <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37]" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-6 text-white/60">{category.description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMY FEATURES */}
      <section className="relative border-b border-white/10 bg-[#0B0B0B] py-20 sm:py-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Academy Features</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Learning That Fits How You Work
              </h2>

              <Link href="/contact?service=academy" className="mt-8 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]">
                Explore VEI Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-wrap gap-3">
                {ACADEMY_FEATURES.map((feature) => (
                  <span key={feature} className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white">
                    <GraduationCap className="h-4 w-4 text-[#D4AF37]" strokeWidth={1.75} />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}