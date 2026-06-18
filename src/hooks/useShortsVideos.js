import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchVideosShorts } from "../services/api"

export default function useShortsVideos() {
    const shorts=useInfiniteQuery({
        queryKey:["shorts"],
        queryFn:async({pageParam})=>{
            const data= await fetchVideosShorts(pageParam)
            return {shortVideos:data,nextPageToken:data.nextPageToken}
        },
        getNextPageParam:(lastPage)=>lastPage.nextPageToken || undefined

    })
   
    
  return shorts
    
  
}
