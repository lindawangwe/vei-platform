import Link from "next/link";
import {
  ArrowUpRight,
  Newspaper,
  Tv,
  Mic2,
  BookOpen,
  MonitorPlay,
} from "lucide-react";

const platforms = [
  {
    number: "01",
    title: "VEI News",
    description:
      "Business, entrepreneurship, innovation and opportunity stories.",
    href: "/media/news",
    icon: Newspaper,
    image: "/images/media/news.jpg",
  },
  {
    number: "02",
    title: "VEI TV",
    description:
      "Interviews, documentaries, business features and video content.",
    href: "/media/tv",
    icon: Tv,
    image: "/images/media/tv.jpg",
  },
  {
    number: "03",
    title: "VEI Podcast",
    description:
      "Conversations with entrepreneurs, leaders, innovators and changemakers.",
    href: "/media/podcast",
    icon: Mic2,
    image: "/images/media/podcast.jpg",
  },
  {
    number: "04",
    title: "VEI Magazine",
    description:
      "Business, leadership, entrepreneurship and lifestyle features.",
    href: "/media/magazine",
    icon: BookOpen,
    image: "/images/media/magazine.jpg",
  },
  {
    number: "05",
    title: "VEI Digital",
    description:
      "Social media and digital storytelling.",
    href: "/media/digital",
    icon: MonitorPlay,
    image: "/images/media/digital.jpg",
  },
];

export default function MediaPlatforms() {
  return (
    <section
      id="media-platforms"
      className="bg-[#0B0B0B] px-6 py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Media Ecosystem
          </p>

          <h2 className="mt-5 font-serif text-5xl text-white md:text-7xl">
            One Story.
            <span className="block text-[#D4AF37]">
              Multiple Platforms.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A3A3A3]">
            From news and television to podcasts, magazines and
            digital storytelling, VEI creates platforms for ideas,
            businesses and people to be seen and heard.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">

          {platforms.map((platform, index) => {
            const Icon = platform.icon;

            return (
              <Link
                key={platform.number}
                href={platform.href}
                className={`group relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#151515] ${
                  index === 0 || index === 1
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
                }`}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${platform.image}')`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                {/* Gold hover glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.2),transparent_45%)]" />

                <div className="relative flex h-full flex-col justify-between p-7">

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-black/30 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-[#D4AF37]" />
                    </div>

                    <span className="font-serif text-5xl text-white/20">
                      {platform.number}
                    </span>

                  </div>

                  <div>

                    <h3 className="font-serif text-3xl text-white">
                      {platform.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                      {platform.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
                      Explore
                      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>

                  </div>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
}