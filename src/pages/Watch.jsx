import { useLocation, useSearchParams } from "react-router-dom";
import WatchVideoList from "../components/WatchVideoList";
import { HiOutlineThumbUp , HiOutlineThumbDown,HiOutlineDotsHorizontal, HiArrowRight, HiOutlineDownload  } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useWatchVideos } from "../hooks/useWatchVideos";
import converteViewtoK from "../utily/converteViewtoK";
import timeAgo from "../utily/timeAgo";
import Comments from "../components/Comments";
export default function Watch() {
  const [showMore,setShowMore]=useState(true)
  const [searchParams]=useSearchParams();
  const id=searchParams.get('v')
   const {data}=useWatchVideos(id)
     const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search]);

  // console.log(data);
  
  return (
    <>
    <div className="h-[80vh] rounded-md">
      <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video"
      className="rounded-md"
    ></iframe>

    <h1 className="font-bold mt-2 tracking-wide">{data?.snippet.title}</h1>

    <div className="flex justify-between items-center">
      <div className="flex gap-10 mt-4">
        <div className="flex gap-2">
        <img src={data?.snippet.thumbnails.default.url} alt={data?.snippet.channelTitle+"avater"} className="w-10 h-10 rounded-full" />
      <h3  className="font-bold mt-2 tracking-wide">{data?.snippet.channelTitle}</h3>
      </div>
      <button className="py-1 px-3 dark:bg-white dark:text-black font-medium rounded-full">Subscribe</button>
      </div>
      <div className="flex gap-2 items-center font-medium ">
        <div className="dark:bg-gray-400/30 py-2 px-3 opacity-78 rounded-full text-xl divide divide-gray-50 flex gap-4 text-white  ">
        {/* like */}
          <button className="border-r border-gray-100 pr-3 cursor-pointer flex items-center gap-2 group relative"><HiOutlineThumbUp />
          <span className="text-xs">{converteViewtoK(data?.statistics?.likeCount)}</span>
          <span className="w-24 bg-gray-400/30 absolute -bottom-10 text-sm py-1 px-1 rounded-sm hidden group-hover:inline-block">I like this</span>
          </button>
          {/* dislike */}
          <button className="  cursor-pointer flex items-center gap-2 group relative"><HiOutlineThumbDown />
          <span className="text-xs">{converteViewtoK(data?.statistics?.dislikeCount)}</span>
          <span className="bg-gray-400/30 absolute  -bottom-10 text-sm py-1 px-1 rounded-sm hidden group-hover:inline-block w-24 -right-4">I dislike this</span>
          </button>
          
        </div>
          <div className="dark:bg-gray-400/30 py-2 px-3 opacity-78 rounded-full text-xl divide divide-gray-50 flex gap-4 text-white cursor-pointe  items-center">
          <span><HiArrowRight /></span>
          <span>Share</span>
        </div>
          <div className="dark:bg-gray-400/30 py-2 px-3 opacity-78 rounded-full text-xl divide divide-gray-50 flex gap-4 text-white cursor-pointe  items-center">
          <span><HiOutlineDownload /></span>
          <span>Download</span>
        </div>
        <span className="dark:bg-gray-400/30 py-2 px-3 opacity-78 rounded-full text-xl divide divide-gray-50 flex gap-4 text-white cursor-pointer"><HiOutlineDotsHorizontal  /></span>

      </div>
    </div>

      {/* descirption */}
      <div>
        <div className=" mt-10 bg-gray-400/15 hover:bg-gray-800/40 p-4 relative">
        <p><span>{converteViewtoK(data?.statistics?.viewCount)}</span> <span>{timeAgo(data?.snippet.publishedAt)}</span></p>
          <p className={`whitespace-pre-line   ${showMore && "line-clamp-3"}`}>{data?.snippet.description}</p>
           <button className={`cursor-pointer capitalize`} onClick={()=>setShowMore(p=>!p)}>{showMore?"more":"show less"}</button>
        </div>
      </div>

      <Comments comment={data} />
    </div>
  <WatchVideoList/>
    </>
  )
}
