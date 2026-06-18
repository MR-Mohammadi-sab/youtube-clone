import { useQuery } from "@tanstack/react-query";
import { fetchWatchVideo } from "../services/api";



  export function useWatchVideos(id){

    
    
    const query= useQuery({
      queryKey:["watchVideo",id],
      queryFn:()=>fetchWatchVideo(id),
    })
  return query;
  }