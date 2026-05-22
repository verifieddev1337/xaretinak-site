import Parser from "rss-parser";

export interface Video {
  videoId: string;
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  isShort: boolean;
}

const CHANNEL_ID = "UCSN-bXvEZjDWRuWwqEmd0gw";

export async function getVideos(): Promise<Video[]> {
  try {
    const parser = new Parser({
      customFields: { item: [["yt:videoId", "videoId"]] },
    });
    const feed = await parser.parseURL(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (feed.items as any[])
      .map((item) => {
        const videoId: string = item.videoId ?? "";
        const link: string = item.link ?? "";
        return {
          videoId,
          title: (item.title ?? "").trim(),
          link,
          pubDate: item.pubDate ?? item.isoDate ?? "",
          thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          isShort: link.includes("/shorts/"),
        };
      })
      .filter((v) => v.videoId);
  } catch {
    return [];
  }
}
