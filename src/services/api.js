import axios from "axios";


export const API=axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/",
    params:{
        key:import.meta.env.VITE_YOUTUBE_KEY,
    }
})



export async function fetchVideos(pageToken) {

  const res = await API.get("/videos", {
        params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: 12,
      ...(pageToken && { pageToken }),
    },
  });
  
  return res.data;
}
export async function fetchSearchVideos(pageToken,search) {

  const res = await API.get("/search", {
        params: {
          part: "snippet",
          q: search,
          type: "video",
          maxResults: 12,
      ...(pageToken && { pageToken }),
    },
  });
  
  return res.data;
}


export async function fetchVideosShorts(pageToken) {
  const res = await API.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: 12,
      
      ...(pageToken && { pageToken }) 
    },
  });
  
  return res.data;
}


export async function fetchChannels(channelId) {
  const res = await API.get("/channels", {
    params: { part: "snippet", id: channelId },
  });
  // console.log(res.data);
  
  return res.data.items;
}


export async function fetchWatchVideo(id ) {
  const res = await API.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      ...(id && { id }) 
    },
  });

  
  return res.data.items[0]; 
}


export async function fetchComments(videoId, pageToken = "") {
  const res = await API.get("/commentThreads", {
    params: {
      part: "snippet",
      videoId,
      maxResults: 20,
      ...(pageToken && { pageToken }) ,
      textFormat: "plainText",
    },
  });

  return res.data;
}


