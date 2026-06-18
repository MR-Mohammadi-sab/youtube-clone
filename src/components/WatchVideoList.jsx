import { useEffect, useRef } from "react";
import { useVideos } from "../hooks/useVideosFetch";
import formatDuration from "../utily/conveteTime";
import converteViewtoK from "../utily/converteViewtoK";
import timeAgo from "../utily/timeAgo";
import Sppiner from "./Sppiner";
import { Link } from "react-router-dom";

export default function WatchVideoList() {
        const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useVideos();
  const videos = data?.pages.flatMap(page => page.videos) || [];

   const observerRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { rootMargin: "100px" }
      );
      if (observerRef.current) observer.observe(observerRef.current);
      return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage]);
  return (
    <aside>
    {videos?.map((video) => (
        <figure key={video.id} className="rounded-sm flex h-28 w-[95%] ">
           
          <Link to={`/watch?v=${video.id}`} className="relative aspect-video w-48 ">
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="object-cover" />
          <span className="absolute z-10000 top-19 left-31">{formatDuration(video.contentDetails.duration)}</span>
          </Link>
          
          <div className="text-gray-400 flex flex-col  justify-center ml-2">
        <h3 className="font-bold  line-clamp-2 text-xs text-white ">{video.snippet.title}</h3>
          <p className="text-sm">{video.snippet.channelTitle}</p>
          <div className="flex gap-3 text-xs">
          <span>{converteViewtoK(video.statistics.viewCount)}</span> <span>•</span>
          <span >{timeAgo(video.snippet.publishedAt)}</span>
          </div>
          </div>
        </figure>
      ))}
    <div className="flex justify-center items-center">
      {isFetchingNextPage && <Sppiner />}
      </div>
      <div ref={observerRef}></div>

    </aside>
  )
}
