"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { TactileButton } from "../originkit/Client";
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
  LineChart,
  Layers,
} from "lucide-react";

type DropdownItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

type SimpleNavItem = {
  name: string;
  href: string;
  dropdown?: false;
  mega?: false;
};

type DropdownNavItem = {
  name: string;
  dropdown: true;
  mega?: false;
  items: DropdownItem[];
};

// One column per "arm" of the ecosystem. A column with no `items` is a
// single-destination arm (Business, Academy, Network) — it gets a
// description instead of a sub-list. A column with `items` (Media, Events)
// keeps its existing sub-navigation inside the panel.
type EcosystemColumn = {
  name: string;
  href: string;
  icon: React.ElementType;
  description: string;
  items?: DropdownItem[];
};

type MegaNavItem = {
  name: string;
  dropdown: true;
  mega: true;
  href: string;
  columns: EcosystemColumn[];
};

type NavItem = SimpleNavItem | DropdownNavItem | MegaNavItem;

const ecosystemColumns: EcosystemColumn[] = [
  {
    name: "VEI Media",
    href: "/media",
    icon: Newspaper,
    description: "Your story deserves a platform.",
    items: [
      { name: "News", href: "/media/news", icon: Newspaper },
      { name: "TV", href: "/media/tv", icon: Tv },
      { name: "Podcast", href: "/media/podcast", icon: Mic2 },
      { name: "Magazine", href: "/media/magazine", icon: BookOpen },
      { name: "Digital", href: "/media/digital", icon: MonitorPlay },
    ],
  },
  {
    name: "VEI Business",
    href: "/business",
    icon: BriefcaseBusiness,
    description: "We don't just promote businesses — we help them grow.",
  },
  {
    name: "VEI Academy",
    href: "/academy",
    icon: GraduationCap,
    description: "Practical knowledge for the modern entrepreneur.",
  },
  {
    name: "VEI Events",
    href: "/events",
    icon: CalendarDays,
    description: "Connect. Learn. Collaborate. Grow.",
    items: [
      { name: "Business Summit", href: "/events/business-summit", icon: Landmark },
      { name: "Africa Business & Investment Forum", href: "/events/africa-business-investment-forum", icon: Globe2 },
      { name: "Young Entrepreneurs Summit", href: "/events/young-entrepreneurs-summit", icon: UserPlus },
      { name: "Excellence & Visibility Awards", href: "/events/awards", icon: Trophy },
    ],
  },
  {
    name: "VEI Network",
    href: "/network",
    icon: Users,
    description: "Your network can become your greatest business asset.",
  },
];

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
    href: "/services",
    dropdown: true,
    items: [
      { name: "Branding & Creative", href: "/services#branding", icon: Palette },
      { name: "Digital Marketing", href: "/services#digital-marketing", icon: Megaphone },
      { name: "Media & PR", href: "/services#media-pr", icon: Newspaper },
      { name: "Business Development", href: "/services#business-development", icon: BriefcaseBusiness },
      { name: "International Market Access", href: "/services#international-market-access", icon: Globe2 },
      { name: "Consulting", href: "/services#consulting", icon: Target },
      { name: "Events & Activations", href: "/services#events-activations", icon: CalendarDays },
    ],
  },
  {
    name: "Ecosystem",
    dropdown: true,
    mega: true,
    href: "/ecosystem",
    columns: ecosystemColumns,
  },
  {
    name: "International Opportunities",
    href: "/opportunities",
  },
];

const moreItems: DropdownItem[] = [
  { name: "Our Impact", href: "/impact", icon: BarChart3 },
  { name: "Insights & News", href: "/insights", icon: Lightbulb },
  { name: "Partnerships", href: "/partnerships", icon: Handshake },
  { name: "Careers", href: "/careers", icon: UserRound },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  // Triggers the gold glow on a keycap, then fades it out
  const handlePress = (name: string) => {
    setPressedKey(name);
    window.setTimeout(() => {
      setPressedKey((curr) => (curr === name ? null : curr));
    }, 550);
  };

  // Shared 3D keycap styling for desktop nav items
  const keycapBase =
    "relative mx-0.5 flex items-center gap-1 rounded-lg border border-white/10 " +
    "bg-gradient-to-b from-[#222222] to-[#0A0A0A] px-4 py-2.5 text-[13px] font-medium " +
    "text-white/80 transition-transform duration-150 ease-out hover:text-[#D4AF37] " +
    "hover:from-[#272727] hover:to-[#0D0D0D] " +
    "[box-shadow:0_1px_0_#020202,0_2px_0_#020202,0_3px_0_#010101,0_4px_0_#010101,0_5px_0_#000000,0_6px_8px_rgba(0,0,0,0.6)] " +
    "active:translate-y-[5px] " +
    "active:[box-shadow:0_1px_0_#000000,0_2px_4px_rgba(0,0,0,0.5)]";

  const keycapGlow =
    "translate-y-[5px] border-[#D4AF37]/70 text-[#D4AF37] " +
    "[box-shadow:0_1px_0_#000000,0_0_20px_6px_rgba(212,175,55,0.6)]";

     const isActive = (name: string, href?: string) => {
        if (pressedKey === name) return true;
        if (openDropdown === name) return true;
        if (href && pathname === href) return true;
        return false;
      };

  const keycapClass = (name: string, href?: string) =>
    `${keycapBase} ${isActive(name, href) ? keycapGlow : ""}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1600px] items-center px-6 lg:px-8">

        {/* ========================================= */}
        {/* VEI BRAND */}
        {/* ========================================= */}

        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <span className="absolute -top-1 text-[10px] text-[#D4AF37]">♛</span>
            <span className="font-serif text-4xl font-bold leading-none text-[#D4AF37]">
              VEI
            </span>
          </div>

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
            // ---- plain link ----
              if (!item.dropdown) {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handlePress(item.name)}
                    className={keycapClass(item.name, item.href)}
                  >
                    {item.name}
                  </Link>
                );
            }
            // ---- mega menu (Ecosystem) ----
            if (item.mega) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={keycapClass(item.name)}
                    onClick={() => {
                      handlePress(item.name);
                      setOpenDropdown(openDropdown === item.name ? null : item.name);
                    }}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <div className="absolute left-1/2 top-full w-[880px] -translate-x-1/2 pt-1">
                      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#151515] shadow-2xl shadow-black/50">

                        {/* panel header */}
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                            <Layers className="h-3.5 w-3.5" />
                            One Ecosystem, Five Arms
                          </div>
                          <Link
                            href={item.href}
                            className="flex items-center gap-1 text-xs font-medium text-white/50 transition hover:text-[#D4AF37]"
                          >
                            View all
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>

                        {/* columns */}
                        <div className="grid grid-cols-5 divide-x divide-white/10">
                          {item.columns.map((col) => {
                            const ColIcon = col.icon;
                            return (
                              <div key={col.name} className="p-4">
                                <Link
                                  href={col.href}
                                  className="group/col mb-3 flex flex-col gap-2"
                                >
                                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                                    <ColIcon className="h-4 w-4 text-[#D4AF37]" />
                                  </span>
                                  <span className="text-sm font-semibold text-white transition group-hover/col:text-[#D4AF37]">
                                    {col.name}
                                  </span>
                                  <span className="text-[11px] leading-4 text-white/45">
                                    {col.description}
                                  </span>
                                </Link>

                                {col.items && (
                                  <div className="mt-3 space-y-0.5 border-t border-white/10 pt-3">
                                    {col.items.map((sub) => (
                                      <Link
                                        key={sub.name}
                                        href={sub.href}
                                        className="block rounded px-1.5 py-1.5 text-[12px] leading-tight text-white/60 transition hover:bg-[#D4AF37]/10 hover:text-white"
                                      >
                                        {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              );
            }

            // ---- standard dropdown (Our Services) ----
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={keycapClass(item.name)}
                  onClick={() => {
                    handlePress(item.name);
                    setOpenDropdown(openDropdown === item.name ? null : item.name);
                  }}
                >
                  {item.name}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

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
              className={keycapClass("More")}
              onClick={() => {
                handlePress("More");
                setOpenDropdown(openDropdown === "More" ? null : "More");
              }}
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
            href="/contact"
            className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-white/70 transition hover:text-[#D4AF37]"
          >
            <Phone className="h-3.5 w-3.5" />
            Contact
          </Link>

          <TactileButton
            label="Get Visible"
            link="/get-visible"
            padding="10px 18px"
            rounded={20}
            font={{ fontSize: 14, fontWeight: 600 }}
            colors={{
              fill: "#0B0B0B",
              textColor: "#D4AF37",
              hoverFill: "#D4AF37",
              hoverTextColor: "#000000",
            }}
            border={{ border: "1px solid #D4AF37" }}
            base={{ color: "#8a6d1f", offsetX: 0, offsetY: 4 }}
          />

          <TactileButton
            label="Partner With VEI"
            link="/partnerships"
            padding="10px 18px"
            rounded={20}
            font={{ fontSize: 14, fontWeight: 600 }}
            colors={{
              fill: "#D4AF37",
              textColor: "#000000",
              hoverFill: "#E5C766",
              hoverTextColor: "#000000",
            }}
            base={{ color: "#8a6d1f", offsetX: 0, offsetY: 4 }}
          />
        </div>

        {/* ========================================= */}
        {/* MOBILE MENU BUTTON */}
        {/* ========================================= */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37] xl:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {mobileOpen && (
          <nav className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-white/10 bg-[#0B0B0B] px-6 py-4 shadow-2xl xl:hidden">
            <div className="mx-auto max-w-[1600px] space-y-1">
              {navigation.map((item) => {
                if (!item.dropdown) {
                  const Icon = item.name === "Home" ? Home : item.name === "About Us" ? Building2 : Target;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-[#D4AF37]"
                    >
                      <Icon className="h-4 w-4 text-[#D4AF37]" />
                      {item.name}
                    </Link>
                  );
                }

                const expanded = mobileDropdown === item.name;
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setMobileDropdown(expanded ? null : item.name)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-[#D4AF37]"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                    </button>

                    {expanded && (
                      <div className="ml-3 border-l border-white/10 py-1 pl-3">
                        {item.mega
                          ? item.columns.map((column) => {
                              const Icon = column.icon;
                              return (
                                <div key={column.name} className="py-2">
                                  <Link
                                    href={column.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2 py-2 text-sm font-semibold text-white hover:text-[#D4AF37]"
                                  >
                                    <Icon className="h-4 w-4 text-[#D4AF37]" />
                                    {column.name}
                                  </Link>
                                  {column.items?.map((subItem) => {
                                    const SubIcon = subItem.icon;
                                    return (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-2 py-2 pl-6 text-sm text-white/60 transition hover:text-white"
                                      >
                                        <SubIcon className="h-3.5 w-3.5" />
                                        {subItem.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              );
                            })
                          : item.items.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
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

              <div className="border-t border-white/10 pt-2">
                {moreItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                    >
                      <Icon className="h-4 w-4 text-[#D4AF37]" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-3 text-sm font-medium text-white/80 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
                >
                  <Phone className="h-4 w-4" />
                  Contact
                </Link>
                <Link
                  href="/get-visible"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-3 py-3 text-sm font-semibold text-black transition hover:bg-[#E5C766]"
                >
                  Get Visible
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}