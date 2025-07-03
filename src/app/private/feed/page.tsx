// app/feed/page.tsx

import PictureItem from "@/components/private/PictureItem";
import { fetchFeed } from "./action";

export default async function FeedPage() {
  const feeds = await fetchFeed();

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-10">Fotos e Vídeos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {feeds.map((feed, i) => (
          <PictureItem
            showFanClubButton={i % 2 === 0}
            price={i % 3 === 0 && i % 2 !== 0 ? 30 : undefined}
            key={feed.id}
            url={feed.img}
            isVideo={i % 4 === 0}
          />
        ))}
      </div>
    </>
  );
}
