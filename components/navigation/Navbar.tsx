"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Search,
  Home,
  Building2,
  Palette,
  Megaphone,
  Newspaper,
  BriefcaseBusiness,
  GraduationCap,
  CalendarDays,
  Users,
  Globe2,
  BarChart3,
  Lightbulb,
  Handshake,
  UserRound,
  Phone,
  Tv,
  Mic2,
  BookOpen,
  MonitorPlay,
  Trophy,
  Landmark,
  UserPlus,
  Target,
  ShoppingBag,
  LineChart,
} from "lucide-react";

type DropdownItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

type NavItem =
  | {
      name: string;
      href: string;
      dropdown?: false;
    }
  | {
      name: string;
      dropdown: true;
      items: DropdownItem[];
    };

const navigation: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "About Us",
    href: "/about",
  },

  {
    name: "Our Services",
    dropdown: true,
    items: [
      {
        name: "Branding & Creative",
        href: "/services/branding",
        icon: Palette,
      },
      {
        name: "Digital Marketing",
        href: "/services/digital-marketing",
        icon: Megaphone,
      },
      {
        name: "Media & PR",
        href: "/services/media-pr",
        icon: Newspaper,
      },
      {
        name: "Business Development",
        href: "/services/business-development",
        icon: BriefcaseBusiness,
      },
      {
        name: "International Market Access",
        href: "/services/international-market-access",
        icon: Globe2,
      },
      {
        name: "Consulting",
        href: "/services/consulting",
        icon: Target,
      },
      {
        name: "Events & Activations",
        href: "/services/events-activations",
        icon: CalendarDays,
      },
    ],
  },

  {
    name: "VEI Media",
    dropdown: true,
    items: [
      {
        name: "News",
        href: "/media/news",
        icon: Newspaper,
      },
      {
        name: "TV",
        href: "/media/tv",
        icon: Tv,
      },
      {
        name: "Podcast",
        href: "/media/podcast",
        icon: Mic2,
      },
      {
        name: "Magazine",
        href: "/media/magazine",
        icon: BookOpen,
      },
      {
        name: "Digital",
        href: "/media/digital",
        icon: MonitorPlay,
      },
    ],
  },

  {
    name: "VEI Business",
    href: "/business",
  },

  {
    name: "VEI Academy",
    href: "/academy",
  },

  {
    name: "VEI Events",
    dropdown: true,
    items: [
      {
        name: "Business Summit",
        href: "/events/business-summit",
        icon: Landmark,
      },
      {
        name: "Africa Business & Investment Forum",
        href: "/events/africa-business-investment-forum",
        icon: Globe2,
      },
      {
        name: "Young Entrepreneurs Summit",
        href: "/events/young-entrepreneurs-summit",
        icon: UserPlus,
      },
      {
        name: "VEI Excellence & Visibility Awards",
        href: "/events/awards",
        icon: Trophy,
      },
    ],
  },

  {
    name: "VEI Network",
    href: "/network",
  },

  {
    name: "International Opportunities",
    href: "/opportunities",
  },
];

const moreItems: DropdownItem[] = [
  {
    name: "Our Impact",
    href: "/impact",
    icon: BarChart3,
  },
  {
    name: "Insights & News",
    href: "/insights",
    icon: Lightbulb,
  },
  {
    name: "Partnerships",
    href: "/partnerships",
    icon: Handshake,
  },
  {
    name: "Careers",
    href: "/careers",
    icon: UserRound,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center px-6 lg:px-8">

        {/* ========================================= */}
        {/* VEI BRAND */}
        {/* ========================================= */}

        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3"
        >
          {/* VEI Logo Mark */}
          <div className="relative flex h-12 w-12 items-center justify-center">
            <span className="absolute -top-1 text-[10px] text-[#D4AF37]">
              ♛
            </span>

            <span className="font-serif text-4xl font-bold leading-none text-[#D4AF37]">
              VEI
            </span>
          </div>

          {/* Wordmark */}
          <div className="hidden border-l border-white/10 pl-3 sm:block">
            <div className="text-[13px] font-semibold tracking-[0.16em] text-white">
              VISIBILITY EMPIRE
            </div>

            <div className="text-[11px] font-medium tracking-[0.3em] text-[#D4AF37]">
              INTERNATIONAL
            </div>

            <div className="mt-0.5 text-[7px] tracking-[0.18em] text-[#A3A3A3]">
              BE SEEN. BE HEARD. BE GLOBAL
            </div>
          </div>
        </Link>

        {/* ========================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ========================================= */}

        <nav className="ml-auto hidden items-center gap-1 xl:flex">

          {navigation.map((item) => {
            if (!item.dropdown) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center gap-1 px-3 py-7 text-[13px] font-medium text-white/80 transition hover:text-[#D4AF37]"
                >
                  {item.name}

                  <span className="absolute bottom-0 left-3 right-3 h-px origin-left scale-x-0 bg-[#D4AF37] transition-transform group-hover:scale-x-100" />
                </Link>
              );
            }

            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-7 text-[13px] font-medium text-white/80 transition hover:text-[#D4AF37]"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                >
                  {item.name}

                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {openDropdown === item.name && (
                  <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-1">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#151515] p-2 shadow-2xl shadow-black/50">

                      {item.items.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;

                        return (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="group flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-[#D4AF37]/10"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                              <Icon className="h-4 w-4 text-[#D4AF37]" />
                            </span>

                            <span className="text-sm text-white/80 transition group-hover:text-white">
                              {dropdownItem.name}
                            </span>

                            <ArrowRight className="ml-auto h-3.5 w-3.5 text-[#D4AF37] opacity-0 transition group-hover:opacity-100" />
                          </Link>
                        );
                      })}

                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* ========================================= */}
          {/* MORE */}
          {/* ========================================= */}

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("More")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              className="flex items-center gap-1 px-3 py-7 text-[13px] font-medium text-white/80 transition hover:text-[#D4AF37]"
            >
              More
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  openDropdown === "More" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "More" && (
              <div className="absolute right-0 top-full w-64 pt-1">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#151515] p-2 shadow-2xl shadow-black/50">

                  {moreItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-[#D4AF37]/10"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                          <Icon className="h-4 w-4 text-[#D4AF37]" />
                        </span>

                        <span className="text-sm text-white/80 group-hover:text-white">
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}

                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ========================================= */}
        {/* DESKTOP ACTIONS */}
        {/* ========================================= */}

        <div className="ml-4 hidden items-center gap-2 xl:flex">

          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:bg-white/5 hover:text-[#D4AF37]"
          >
            <Search className="h-4 w-4" />
          </button>

          <div className="h-7 w-px bg-white/10" />

          <Link
            href="/get-visible"
            className="rounded-lg border border-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            Get Visible
          </Link>

          <Link
            href="/partnerships"
            className="rounded-lg bg-[#D4AF37] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#E5C766]"
          >
            Partner With VEI
          </Link>

        </div>

        {/* ========================================= */}
        {/* MOBILE MENU BUTTON */}
        {/* ========================================= */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white xl:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* ========================================= */}
      {/* MOBILE NAVIGATION */}
      {/* ========================================= */}

      {mobileOpen && (
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 bg-[#0B0B0B] xl:hidden">

          <div className="space-y-1 px-5 py-5">

            {navigation.map((item) => {
              if (!item.dropdown) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#D4AF37]"
                  >
                    {item.name === "Home" && (
                      <Home className="h-4 w-4 text-[#D4AF37]" />
                    )}

                    {item.name === "About Us" && (
                      <Building2 className="h-4 w-4 text-[#D4AF37]" />
                    )}

                    {item.name === "VEI Business" && (
                      <BriefcaseBusiness className="h-4 w-4 text-[#D4AF37]" />
                    )}

                    {item.name === "VEI Academy" && (
                      <GraduationCap className="h-4 w-4 text-[#D4AF37]" />
                    )}

                    {item.name === "VEI Network" && (
                      <Users className="h-4 w-4 text-[#D4AF37]" />
                    )}

                    {item.name === "International Opportunities" && (
                      <Globe2 className="h-4 w-4 text-[#D4AF37]" />
                    )}

                    {item.name}
                  </Link>
                );
              }

              const isOpen = mobileDropdown === item.name;

              return (
                <div key={item.name}>

                  <button
                    onClick={() =>
                      setMobileDropdown(isOpen ? null : item.name)
                    }
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-[#D4AF37]"
                  >
                    <span className="flex items-center gap-3">

                      {item.name === "Our Services" && (
                        <BriefcaseBusiness className="h-4 w-4 text-[#D4AF37]" />
                      )}

                      {item.name === "VEI Media" && (
                        <Newspaper className="h-4 w-4 text-[#D4AF37]" />
                      )}

                      {item.name === "VEI Events" && (
                        <CalendarDays className="h-4 w-4 text-[#D4AF37]" />
                      )}

                      {item.name}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="ml-4 border-l border-[#D4AF37]/20 pl-3">

                      {item.items.map((subItem) => {
                        const Icon = subItem.icon;

                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:text-[#D4AF37]"
                          >
                            <Icon className="h-4 w-4 text-[#D4AF37]" />
                            {subItem.name}
                          </Link>
                        );
                      })}

                    </div>
                  )}
                </div>
              );
            })}

            {/* More */}

            <div>

              <button
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "More" ? null : "More"
                  )
                }
                className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-[#D4AF37]"
              >
                <span className="flex items-center gap-3">
                  <LineChart className="h-4 w-4 text-[#D4AF37]" />
                  More
                </span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileDropdown === "More" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "More" && (
                <div className="ml-4 border-l border-[#D4AF37]/20 pl-3">

                  {moreItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:text-[#D4AF37]"
                      >
                        <Icon className="h-4 w-4 text-[#D4AF37]" />
                        {item.name}
                      </Link>
                    );
                  })}

                </div>
              )}
            </div>

            {/* Contact */}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-[#D4AF37]"
            >
              <Phone className="h-4 w-4 text-[#D4AF37]" />
              Contact Us
            </Link>

            {/* Mobile CTAs */}

            <div className="mt-5 grid gap-2 border-t border-white/10 pt-5">

              <Link
                href="/get-visible"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-lg bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-black"
              >
                Get Visible
              </Link>

              <Link
                href="/partnerships"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-lg border border-[#D4AF37] px-4 py-3 text-sm font-semibold text-[#D4AF37]"
              >
                Partner With VEI
              </Link>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}