"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import {
  MapPin,
  Globe as GlobeIcon,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] pt-20">

      {/* Ambient gold glow — bottom-left haze */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center border-2 border-[#D4AF37] text-xl font-bold text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                VEI
              </div>

              <div>
                <p className="text-lg font-bold uppercase leading-tight tracking-wide text-white">
                  Visibility Empire
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  International
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Be Seen. Be Heard. Be Global.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              Visibility Empire International (VEI) is a business
              visibility, media, branding, marketing and business
              development company helping individuals, businesses,
              organizations and institutions build credible brands, reach
              wider audiences, access opportunities and expand into new
              markets.
            </p>

            {/* Social icons */}
            <div className="mt-7 flex items-center gap-3">
              {[
                { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
                { Icon: FaXTwitter, href: "#", label: "X" },
                { Icon: FaInstagram, href: "#", label: "Instagram" },
                { Icon: FaYoutube, href: "#", label: "YouTube" },
                { Icon: FaFacebookF, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/60 text-[#D4AF37] transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0B]"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[#D4AF37]">Quick Links</h3>
            <span className="mt-3 block h-px w-8 bg-[#D4AF37]" />

            <ul className="mt-5 space-y-3">
              {[
                "Home",
                "About Us",
                "Our Services",
                "VEI Media",
                "VEI Business",
                "VEI Academy",
                "VEI Events",
                "VEI Network",
                "International Opportunities",
                "Our Impact",
                "Insights & News",
                "Partnerships",
                "Careers",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white/60 transition hover:text-[#D4AF37]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* OUR SERVICES + WHO WE SERVE */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[#D4AF37]">Our Services</h3>
            <span className="mt-3 block h-px w-8 bg-[#D4AF37]" />

            <ul className="mt-5 space-y-3">
              {[
                "Branding & Creative",
                "Digital Marketing",
                "Media & PR",
                "Business Development",
                "Training & Capacity Building",
                "International Market Access",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white/60 transition hover:text-[#D4AF37]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 text-sm font-bold text-[#D4AF37]">
              Who We Serve
            </h3>
            <span className="mt-3 block h-px w-8 bg-[#D4AF37]" />

            <ul className="mt-5 space-y-3">
              {[
                "Entrepreneurs",
                "SMEs",
                "Startups",
                "Corporations",
                "NGOs & Foundations",
                "Institutions",
                "Professionals",
                "Executives",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-white/60 transition hover:text-[#D4AF37]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* GLOBAL REACH */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[#D4AF37]">Global Reach</h3>
            <span className="mt-3 block h-px w-8 bg-[#D4AF37]" />

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" strokeWidth={1.75} />
                <p className="text-sm leading-6 text-white/70">
                  Nairobi, Kenya
                  <br />
                  <span className="text-white/50">Head Office</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <GlobeIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF37]" strokeWidth={1.75} />
                <p className="text-sm leading-6 text-white/70">
                  Serving Africa
                  <br />
                  <span className="text-white/50">and the World</span>
                </p>
              </div>
            </div>

            <span className="mt-7 block h-px w-8 bg-[#D4AF37]" />

            <p className="mt-5 text-xs font-semibold uppercase leading-6 tracking-[0.2em] text-[#D4AF37]">
              Together,
              <br />
              We Build
              <br />
              Global Impact.
            </p>
          </div>

          {/* STAY CONNECTED — globe sits behind this column now */}
          <div className="relative lg:col-span-2">

            {/* Globe glow, positioned just behind the form */}
            <div className="pointer-events-none absolute -right-10 -top-6 z-0 h-60 w-60 opacity-30">
              <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-[70px]" />
              <Image
                src="/images/who-we-serve-globe.webp"
                alt=""
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-sm font-bold text-[#D4AF37]">
                Stay Connected
              </h3>
              <span className="mt-3 block h-px w-8 bg-[#D4AF37]" />

              <p className="mt-5 text-sm leading-6 text-white/60">
                Get the latest updates, insights, opportunities and events
                from VEI.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-5">
                <div className="flex items-center border border-white/20 bg-transparent focus-within:border-[#D4AF37]">
                  <Mail className="ml-3 h-4 w-4 shrink-0 text-white/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#D4AF37] text-[#0B0B0B] transition hover:bg-[#E5C766]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <label className="mt-3 flex items-start gap-2 text-xs text-white/50">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#D4AF37]"
                  />
                  I agree to receive updates from VEI.
                </label>
              </form>
            </div>
          </div>

        </div>

        {/* Glowing gold divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70 shadow-[0_0_20px_rgba(212,175,55,0.6)]" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Visibility Empire International. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Terms of Service
            </Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Cookies
            </Link>
            <span className="text-white/20">|</span>
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}