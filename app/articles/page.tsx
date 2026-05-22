import type { Metadata } from "next";
import { getArticles, formatDate } from "@/lib/rss";

export const metadata: Metadata = {
  title: "Articles — Haretina Kukuri",
  description: "Writing on geopolitics, markets, and strategic intelligence.",
};

export default async function Articles() {
  const articles = await getArticles();

  return (
    <>
      {/* Header */}
      <section className="px-6 pt-20 pb-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-8 h-px bg-gold" />
          <p className="text-[11px] tracking-label uppercase text-gold">Insights</p>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-6">
          Writing &amp; Analysis
        </h1>
        <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed">
          Published via Substack. Essays and analysis on geopolitics, markets, and
          the intelligence that connects them.
        </p>
      </section>

      <div className="border-t border-white/10" />

      {/* Articles grid */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        {articles.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted text-base mb-4">No articles found.</p>
            <a
              href="https://xaretinak.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-label uppercase text-gold border-b border-gold/40 pb-0.5"
            >
              Visit Substack directly →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article) => (
              <a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden mb-4 bg-navy-surface">
                  {article.thumbnail ? (
                    <img
                      src={article.thumbnail}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="w-8 h-px bg-gold/30" />
                    </div>
                  )}
                </div>

                {/* Meta */}
                <p className="text-[10px] tracking-label uppercase text-gold mb-2">
                  {formatDate(article.pubDate)}
                </p>

                {/* Title */}
                <h2 className="font-serif text-lg text-cream leading-snug mb-3 group-hover:text-gold transition-colors line-clamp-3 flex-1">
                  {article.title}
                </h2>

                {/* Snippet */}
                {article.contentSnippet && (
                  <p className="text-sm text-muted leading-relaxed line-clamp-2 mb-4">
                    {article.contentSnippet}
                  </p>
                )}

                <span className="text-[10px] tracking-label uppercase text-gold/60 group-hover:text-gold transition-colors mt-auto">
                  Read on Substack →
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-muted text-sm mb-4">All articles published on Substack.</p>
          <a
            href="https://xaretinak.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-label uppercase text-gold border-b border-gold/40 pb-0.5 hover:text-gold-light transition-colors"
          >
            Subscribe on Substack →
          </a>
        </div>
      </section>
    </>
  );
}
