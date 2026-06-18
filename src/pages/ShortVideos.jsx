
import { useEffect, useRef } from "react";

import useShortsVideos from "../hooks/useShortsVideos";

import Sppiner from "../components/Sppiner";
import VideoActions from "../components/VideoActions";



export default function ShortVideos() {
  const {
    data,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useShortsVideos();

  const observerRef = useRef(null);

  const items =
    data?.pages
      ?.flatMap(page => page?.shortVideos?.items || [])
      ?.filter(item => item?.id) || [];
      console.log(items);
      


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isPending) {
    return (
      <div className="h-screen flex items-center justify-center dark:bg-black dark:text-white">
        <Sppiner />
      </div>
    );
  }

  return (
    <section className="h-screen w-full overflow-y-scroll shortsScroll snap-y snap-mandatory dark:bg-black pt-30 bg-white">

      {items.map((item) => (
        <div
          key={item.id}
          className="h-screen w-full max-w-105 mx-auto  snap-start relative"
        >
         
          <iframe
            className="w-full h-[90vh] rounded-xl"
            src={`https://www.youtube-nocookie.com/embed/${item.id}`}
            title="short"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <VideoActions like={item.statistics.likeCount} comment={item.statistics.likeCount} />

        </div>
      ))}

      
      <div ref={observerRef} className="h-10" />

      {isFetchingNextPage && (
        <div className="flex justify-center py-5 dark:text-white">
          <Sppiner />
        </div>
      )}
    </section>
  );
}