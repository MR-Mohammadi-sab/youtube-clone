import { Link } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import { useEffect, useRef } from "react";
import Sppiner from "../components/Sppiner";


export default function SearchResults() {
      const {searchVideos, isPending,fetchNextPage,isFetchingNextPage,hasNextPage}=useSearch()
    const searchResults=searchVideos?.pages?.flatMap(page=>page.searchVideos) || []
   
    
  const  rootRef = useRef()
  const refElement=useRef()
    useEffect(function(){
      const observer=new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting && hasNextPage && !isFetchingNextPage)fetchNextPage();
      },{

        rootMargin:"300px"})
      if(refElement.current) observer.observe(refElement.current);
      return ()=>observer.disconnect()

    },[fetchNextPage,hasNextPage,isFetchingNextPage])
    if(isPending) return <div className="h-screen my-auto w-16 mx-auto flex justify-center items-center"><Sppiner /></div>

  return (
    <main className=" dark:bg-black dark:text-dark-text  min-h-screen " ref={rootRef}>
      
      {/* Container */}
      <div className=" px-4 py-4  p-8">

        {/* Results */}
        <div className="space-y-2">

          {searchResults.map((video) => (
            <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
              <div
                
                className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 p-2 rounded-lg dark:hover:bg-dark-hover text-gray-800 dark:text-gray-100 hover:bg-bg-secondary transition cursor-pointer w-full"
              >
                {/* Thumbnail */}
              <div className="sm:w-125 w-full  h-80  bg-dark-card rounded-lg overflow-hidden">
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.channelTitle}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">

                {/* Title */}
                <h3 className="dark:text-dark-text text-gray-800 text-base sm:text-lg font-medium line-clamp-2">
                  {video.snippet.title}
                </h3>

                {/* Channel */}
                <p className="dark:text-dark-text-secondary text-gray-800 text-sm mt-1">
                  {video.snippet.channelTitle}
                </p>

                {/* Meta */}
                <p className="dark:text-dark-text-secondary text-gray-800 text-xs mt-1">
                  {video.snippet.viewCount} views • {video.snippet.publishedAt}
                </p>

                {/* Description */}
                <p className="text-gray-800 dark:text-dark-text-secondary text-sm mt-2 line-clamp-2 hidden sm:block">
                  {video.snippet.description}
                </p>

              </div>
            </div>
            </Link>
          ))}

        </div>

      </div>
      {isFetchingNextPage && <div className="h-12 w-32 mx-auto"><Sppiner /></div>}
      <div  ref={refElement} className="h-8"></div>
    </main>
  );
}