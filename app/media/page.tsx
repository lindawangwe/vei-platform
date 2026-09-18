// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowDown,
//   Newspaper,
//   Tv,
//   Mic2,
//   BookOpen,
//   MonitorPlay,
// } from "lucide-react";

// type EcosystemItem = {
//   name: string;
//   href: string;
//   icon: React.ElementType;
//   description: string;
// };

// const ECOSYSTEM: EcosystemItem[] = [
//   {
//     name: "VEI News",
//     href: "/media/news",
//     icon: Newspaper,
//     description: "Business, entrepreneurship, innovation and opportunity stories.",
//   },
//   {
//     name: "VEI TV",
//     href: "/media/tv",
//     icon: Tv,
//     description: "Interviews, documentaries, business features and video content.",
//   },
//   {
//     name: "VEI Podcast",
//     href: "/media/podcast",
//     icon: Mic2,
//     description: "Conversations with entrepreneurs, leaders, innovators and changemakers.",
//   },
//   {
//     name: "VEI Magazine",
//     href: "/media/magazine",
//     icon: BookOpen,
//     description: "Business, leadership, entrepreneurship and lifestyle features.",
//   },
//   {
//     name: "VEI Digital",
//     href: "/media/digital",
//     icon: MonitorPlay,
//     description: "Social media and digital storytelling.",
//   },
// ];

// const GET_FEATURED = [
//   "Business features",
//   "Interviews",
//   "Sponsored content",
//   "Founder stories",
//   "Product features",
//   "Event coverage",
//   "Expert commentary",
// ];

// const HERO_CTA_CLASS =
//   "mt-9 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]";

// export default function MediaPage() {
//   return (
//     <main className="min-h-screen scroll-smooth bg-[#0B0B0B] text-white">
//       {/* HERO */}
//       <section className="relative flex min-h-[85vh] items-end overflow-hidden border-b border-white/10 pt-20">
//         {/* PLACEHOLDER - replace src with the real background image */}
//         <Image src="/images/media-hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
//         <div className="absolute inset-0 bg-[#0B0B0B]/55" />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
//         <div className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

//         <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 lg:px-8 lg:pb-20">
//           <div className="max-w-2xl">
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-10 bg-[#D4AF37]" />
//               <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">VEI Media</span>
//             </div>

//             <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
//               Your Story Deserves
//               <br />
//               <span className="text-[#D4AF37]">a Platform.</span>
//             </h1>

//             <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
//               VEI Media is the storytelling and communication arm of Visibility Empire International. We create platforms where businesses, entrepreneurs, professionals and organizations can share their stories, achievements, ideas and innovations.
//             </p>

//             <a href="#ecosystem" className={HERO_CTA_CLASS}>
//               Explore VEI Media
//               <ArrowDown className="h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* OUR MEDIA ECOSYSTEM */}
//       <section id="ecosystem" className="relative scroll-mt-20 border-b border-white/10 bg-[#111111] py-20 sm:py-24">
//         <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
//           <div className="mb-14 max-w-2xl sm:mb-16">
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-10 bg-[#D4AF37]" />
//               <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Our Media Ecosystem</span>
//             </div>
//             <p className="text-2xl font-medium leading-snug text-white/90 sm:text-3xl">
//               Five platforms, one story worth telling.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-5">
//             {ECOSYSTEM.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="group flex flex-col justify-between gap-8 border-b border-r border-white/10 px-6 py-8 transition-colors hover:bg-white/[0.03] sm:px-8 sm:py-10"
//                 >
//                   <Icon className="h-6 w-6 text-[#D4AF37]/70 transition-colors group-hover:text-[#D4AF37]" strokeWidth={1.5} />
//                   <div>
//                     <h3 className="text-lg font-semibold text-white">{item.name}</h3>
//                     <p className="mt-2 text-sm leading-6 text-white/50">{item.description}</p>
//                   </div>
//                   <ArrowRight className="h-4 w-4 text-[#D4AF37] opacity-0 transition group-hover:opacity-100" />
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* GET FEATURED */}
//       <section className="relative border-b border-white/10 bg-[#0B0B0B] py-20 sm:py-24">
//         <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
//             <div className="lg:col-span-5">
//               <div className="mb-5 flex items-center gap-3">
//                 <span className="h-px w-10 bg-[#D4AF37]" />
//                 <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">Get Featured</span>
//               </div>

//               <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
//                 Businesses and Professionals Can Apply For:
//               </h2>

//               <Link href="/contact?service=media" className="mt-8 inline-flex items-center gap-2 bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0B0B] transition hover:bg-[#E5C766]">
//                 Feature My Brand
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>

//             <div className="lg:col-span-7">
//               <ul className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/10 sm:grid-cols-2">
//                 {GET_FEATURED.map((item) => (
//                   <li key={item} className="flex items-center gap-3 border-b border-white/10 py-3 text-sm text-white/75 sm:text-base">
//                     <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37]" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
