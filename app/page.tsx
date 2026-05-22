import Link from "next/link";
import Image from "next/image";
import { getArticles, formatDate } from "@/lib/rss";
import { getVideos } from "@/lib/youtube";

const practiceAreas = [
  {
    title: "Commercial Brokerage",
    body: "Market access through relationships, structure, and timing. Cross-sector deal facilitation across emerging and frontier markets where the formal and informal intersect.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Geopolitical Intelligence",
    body: "Political risk advisory integrated directly into commercial strategy. Understanding how power moves, who holds leverage, and what changes before the consensus catches up.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  {
    title: "Cross-Border Navigation",
    body: "Market entry, regulatory orientation, and local ecosystem mapping for businesses and investors operating across jurisdictions with complex political economies.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

export default async function Home() {
  const [allArticles, allVideos] = await Promise.all([getArticles(), getVideos()]);
  const articles = allArticles.slice(0, 4);
  const longVideos = allVideos.filter((v) => !v.isShort);
  const featuredVideo = longVideos[0] ?? allVideos[0] ?? null;
  const sidebarVideos = [...longVideos.slice(1), ...allVideos.filter((v) => v.isShort)].slice(0, 4);

  return (
    <>
      {/* 1. герой */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
          <Image
            src="/assets/haretina.jpg"
            alt="Haretina Kukuri"
            fill
            className="object-cover object-[center_12%]"
            style={{ filter: "brightness(0.82) contrast(1.05)" }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0B1929 0%, #0B1929 18%, rgba(11,25,41,0.88) 42%, rgba(11,25,41,0.35) 75%, rgba(11,25,41,0.08) 100%)",
            }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-48 md:hidden bg-gradient-to-t from-navy to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 md:py-48">
          <div className="max-w-lg">
            <p className="text-[11px] tracking-label uppercase text-gold mb-6">
              Strategic Consultancy
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[5.5rem] text-cream leading-[1.0] mb-6">
              Bridging the<br />
              <em className="text-gold not-italic">World as It Is.</em>
            </h1>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-muted text-base leading-relaxed mb-10 max-w-sm">
              Strategic intelligence for decision-makers who understand that the most
              consequential moves are made at the intersection of finance, politics, and access.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-[11px] tracking-label uppercase px-7 py-3.5 border border-gold text-gold hover:bg-gold hover:text-navy transition-all"
            >
              Work With Me <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. статьи */}
      <section className="bg-paper px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">

          <div className="md:hidden mb-10">
            <p className="text-[10px] tracking-label uppercase text-gold mb-3">Latest Insights</p>
            <h2 className="font-serif text-3xl text-navy leading-tight">
              Analysis.<br />Context.<br />Impact.
            </h2>
          </div>

          <div className="md:flex gap-14 lg:gap-20">

            <div className="hidden md:flex flex-col justify-between shrink-0 w-48 pb-2">
              <div>
                <p className="text-[10px] tracking-label uppercase text-gold mb-4">Latest Insights</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-navy leading-tight mb-8">
                  Analysis.<br />Context.<br />Impact.
                </h2>
              </div>
              <Link
                href="/articles"
                className="text-[11px] tracking-label uppercase text-navy/60 hover:text-gold transition-colors border-b border-navy/20 pb-0.5 self-start"
              >
                View all insights →
              </Link>
            </div>


            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {articles.map((article) => (
                <a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-3 bg-navy/8">
                    {article.thumbnail ? (
                      <img
                        src={article.thumbnail}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-navy/10 flex items-center justify-center">
                        <span className="w-8 h-px bg-gold/30" />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] tracking-label uppercase text-gold mb-1.5">Insights</p>
                  <h3 className="font-serif text-navy text-sm leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  <p className="text-[11px] text-navy/40">{formatDate(article.pubDate)}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden mt-10">
            <Link
              href="/articles"
              className="text-[11px] tracking-label uppercase text-gold border-b border-gold/40 pb-0.5"
            >
              View all insights →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. видео */}
      {featuredVideo && (
        <section className="bg-navy px-6 py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[220px_1fr_240px] gap-8 lg:gap-12 items-start">

              <div className="md:pt-2">
                <p className="text-[10px] tracking-label uppercase text-gold mb-4">
                  Intelligence Briefings
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl text-cream leading-tight mb-8">
                  Strategic video briefings and commentary.
                </h2>
                <a
                  href="https://www.youtube.com/channel/UCSN-bXvEZjDWRuWwqEmd0gw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] tracking-label uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
                >
                  View all briefings →
                </a>
              </div>


              <a
                href={featuredVideo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/30 group-hover:bg-navy/20 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0B1929">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4 py-5 bg-gradient-to-t from-navy/90 to-transparent">
                  <p className="text-[10px] tracking-label uppercase text-gold mb-1">Featured</p>
                  <p className="text-cream font-serif text-base leading-snug line-clamp-2">
                    {featuredVideo.title}
                  </p>
                </div>
              </a>


              <div className="space-y-4">
                {sidebarVideos.map((video) => (
                  <a
                    key={video.videoId}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-3 items-start"
                  >
                    <div
                      className="relative flex-shrink-0 overflow-hidden bg-navy-surface"
                      style={{ width: 80, aspectRatio: "16/9" }}
                    >
                      <img
                        src={video.thumbnail}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-navy/20">
                        <div className="w-5 h-5 rounded-full bg-gold/80 flex items-center justify-center">
                          <svg width="7" height="7" viewBox="0 0 24 24" fill="#0B1929">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted text-xs leading-snug line-clamp-2 group-hover:text-cream transition-colors pt-0.5">
                      {video.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. услуги */}
      <section className="bg-paper px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="md:grid md:grid-cols-[1fr_2.5fr] gap-16 items-start">
            <div className="mb-12 md:mb-0">
              <p className="text-[10px] tracking-label uppercase text-gold mb-4">How I Can Help</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy leading-tight mb-5">
                Strategic advisory for a shifting world.
              </h2>
              <p className="text-sm text-navy/60 leading-relaxed mb-8 max-w-xs">
                Tailored advisory for institutions, investors, and decision-makers operating in
                complex global environments.
              </p>
              <Link
                href="/services"
                className="text-[11px] tracking-label uppercase text-navy/70 border-b border-navy/30 pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Discover the approach →
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
              {practiceAreas.map((area) => (
                <div key={area.title}>
                  <div className="text-gold mb-4">{area.icon}</div>
                  <h3 className="font-serif text-navy text-lg mb-3">{area.title}</h3>
                  <p className="text-sm text-navy/60 leading-relaxed mb-4">{area.body}</p>
                  <Link
                    href="/services"
                    className="text-[10px] tracking-label uppercase text-gold hover:text-gold/70 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. призыв */}
      <section className="bg-navy px-6 py-24 md:py-32 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] tracking-label uppercase text-gold mb-6">Work Together</p>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mb-6">
            Ready to integrate intelligence into your decisions?
          </h2>
          <p className="text-muted text-base max-w-md mx-auto mb-10 leading-relaxed">
            Whether you need deal facilitation, market orientation, or geopolitical context —
            start with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block text-[11px] tracking-label uppercase px-10 py-4 bg-gold text-navy font-medium hover:bg-gold-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
