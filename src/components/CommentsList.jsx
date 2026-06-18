import { useEffect, useRef } from "react";
import { useComments } from "../hooks/useCommentsList"
import Sppiner from "./Sppiner";
import timeAgo from "../utily/timeAgo";

export default function CommentsList() {
    const {data,hasNextPage,fetchNextPage,isFetchingNextPage}=useComments()
    const allComments = data?.pages.flatMap(page => page.comments) || [];
  const observerRef=useRef()

    useEffect(function(){
      const observe=new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting && hasNextPage) fetchNextPage();
      },{rootMargin:"100px"})
      if(observerRef.current)observe.observe(observerRef.current);
      return ()=>observe.disconnect();
    },[hasNextPage,fetchNextPage])

    
  return (
    <ul className="flex flex-col gap-8 mt-10 dark:text-white">
        {allComments.map((comment)=>
        <li key={comment.id} className="flex gap-2">
          <img src={comment?.snippet?.topLevelComment?.snippet.authorProfileImageUrl} alt={comment?.snippet?.topLevelComment?.snippet.authorDisplayName} className="w-12 h-12 rounded-full" />
          <div>
            <span>{comment?.snippet?.topLevelComment?.snippet.authorDisplayName}</span>
            <span className="text-gray-600 dark:text-gray-400 ml-2">{timeAgo(comment?.snippet?.topLevelComment?.snippet.publishedAt)}</span>
            <p className="dark:text-gray-100 text-gray-900">{comment?.snippet?.topLevelComment?.snippet.textDisplay}</p>
          </div>
          
    </li>)}
<div ref={observerRef}></div>
{isFetchingNextPage && <Sppiner />}
    </ul>
  )
}
