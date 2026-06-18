import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchSearchVideos } from "../services/api"
import { useSearchParams } from "react-router-dom"

export default function useSearch() {
    const [searchParams]=useSearchParams()
    const key=searchParams?.get("search_query") || "quran"

    
    const {data:searchVideos,isPending,fetchNextPage,isFetchingNextPage,hasNextPage}=useInfiniteQuery({
        queryKey:["search",key],
        queryFn:async({pageParam })=>{

          const data=await fetchSearchVideos(pageParam , key);
           return { searchVideos: data.items, nextPageToken: data.nextPageToken };
        },
        getNextPageParam:(lastPage)=>lastPage.nextPageToken || undefined,
    })
    
  return {searchVideos, isPending, fetchNextPage, isFetchingNextPage,hasNextPage}
}
