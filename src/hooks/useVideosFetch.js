import {fetchChannels, fetchVideos} from '../services/api'
import { useInfiniteQuery } from "@tanstack/react-query";


export function useVideos() {
  
  return useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: async ({ pageParam }) => {
      const data=await fetchVideos(pageParam)

      
      
      const videos = data.items;

      const channelIds = [...new Set(videos.map(v => v.snippet.channelId))];

      const channelsData = await fetchChannels(channelIds.join(","));

      const channelAvatars = {};

      channelsData.forEach(ch => {
        channelAvatars[ch.id] = ch.snippet.thumbnails.high.url;
      });
      
      

      const videosWithChannels = videos.map(v => ({
        ...v,
        channelAvatar: channelAvatars[v.snippet.channelId] || "",
      }));

      return {
        videos: videosWithChannels,
        nextPageToken: data.nextPageToken,
      };
    },

    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    staleTime: 1000 * 60 * 5,
  });
}





