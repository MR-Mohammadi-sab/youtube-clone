import { useEffect, useRef } from "react";
import { useVideos } from "../hooks/useVideosFetch"
import Sppiner from "../components/Sppiner";
import SkeletonLoader from "../components/SkeletonLoader";
import VideoLists from "../components/VideoLists";


export default function Home() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage,isPending } = useVideos();
  const videos = data?.pages.flatMap(page => page.videos) || [];

 
  
  const observerRef = useRef();

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "300px" }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage,isFetchingNextPage]);

  if(isPending) return  <SkeletonLoader />

     return    (
    <section className="grid lg:grid-cols-3 gap-8 text-white sm:p-4 select-none md:grid-cols-2 grid-cols-1 w-full">
      <VideoLists data={videos}/>
      {isFetchingNextPage && <div className="max-w-24 mx-auto col-span-full"><Sppiner /></div>}
      <div ref={observerRef}></div>
    </section>
    ) 
}