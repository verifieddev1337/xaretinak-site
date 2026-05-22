import Parser from "rss-parser";

export interface Article {
  title: string;
  link: string;
  pubDate: string;
  isoDate?: string;
  contentSnippet?: string;
  thumbnail?: string;
}

const FEED_URL = "https://xaretinak.substack.com/feed";

export async function getArticles(): Promise<Article[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(FEED_URL);
    return feed.items.map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      isoDate: item.isoDate,
      contentSnippet: item.contentSnippet,
      thumbnail: item.enclosure?.url,
    }));
  } catch {
    return [];
  }
}

export function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
