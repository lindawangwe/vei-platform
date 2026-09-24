"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceOption = {
  value: string;
  label: string;
};

const SERVICE_OPTIONS: ServiceOption[] = [
  { value: "branding", label: "Branding & Creative" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "media-pr", label: "Media & PR" },
  { value: "business-development", label: "Business Development" },
  { value: "international-market-access", label: "International Market Access" },
  { value: "consulting", label: "Consulting" },
  { value: "events-activations", label: "Events & Activations" },
  { value: "media", label: "VEI Media" },
  { value: "business", label: "VEI Business" },
  { value: "academy", label: "VEI Academy" },
  { value: "events", label: "VEI Events" },
  { value: "network", label: "VEI Network" },
  { value: "opportunities", label: "International Opportunities" },
  { value: "partnerships", label: "Partnerships" },
  { value: "other", label: "Something Else" },
];

const CONTACT_METHODS = ["Email", "Phone Call", "WhatsApp"];

const INPUT_CLASS =
  "w-full border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#D4AF37]";
const LABEL_CLASS = "mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // NOTE: no backend is wired up yet. This just simulates a submission so
    // the form is fully functional in the UI. Before this goes live, replace
    // this handler with a real request to an API route, form service
    // (e.g. Formspree, Resend), or CRM integration.
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-8 py-10">
        <CheckCircle2 className="h-8 w-8 text-[#D4AF37]" strokeWidth={1.5} />
        <h3 className="text-xl font-semibold text-white">Message Sent</h3>
        <p className="text-sm leading-6 text-white/60">
          Thank you for reaching out. A member of the VEI team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASS} htmlFor="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" required className={INPUT_CLASS} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="organization">Organization / Company</label>
          <input id="organization" name="organization" type="text" className={INPUT_CLASS} placeholder="Company name" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASS} htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required className={INPUT_CLASS} placeholder="you@example.com" />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" className={INPUT_CLASS} placeholder="+254 700 000 000" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={LABEL_CLASS} htmlFor="country">Country</label>
          <input id="country" name="country" type="text" className={INPUT_CLASS} placeholder="Kenya" />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="service">Service Interested In</label>
          <select id="service" name="service" defaultValue={preselectedService} className={INPUT_CLASS}>
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL_CLASS} htmlFor="project">Tell Us About Your Project</label>
        <textarea id="project" name="project" rows={5} className={INPUT_CLASS} placeholder="What are you looking to achieve?" />
      </div>

      <div>
        <span className={LABEL_CLASS}>Preferred Contact Method</span>
        <div className="flex flex-wrap gap-3">
          {CONTACT_METHODS.map((method, index) => (
            <label key={method} className="flex cursor-pointer items-center gap-2.5 border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white/80 transition has-[:checked]:border-[#D4AF37] has-[:checked]:text-[#D4AF37]">
              <input type="radio" name="contactMethod" value={method} defaultChecked={index === 0} className="accent-[#D4AF37]" />
              {method}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766] disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Start the Conversation"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-20 text-white">
      <section className="relative border-b border-white/10 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            {/* LEFT: heading + intro */}
            <div className="lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Contact Us</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Let&apos;s Build
                <br />
                Something <span className="text-[#D4AF37]">Visible.</span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-white/60">
                Whether you want to build your brand, grow your business, enter a new market, promote an event, partner with VEI or simply explore an idea, our team is ready to engage with you.
              </p>
            </div>

            {/* RIGHT: form */}
            <div className="lg:col-span-7">
              <Suspense fallback={null}>
                <ContactFormInner />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}