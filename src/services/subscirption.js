

import axios from "axios";

export async function fetchSubscriptions( accessToken) {
  if(!accessToken) return null
  const res = await axios.get(
    "https://www.googleapis.com/youtube/v3/subscriptions",
    {
      params: {
        part: "snippet,contentDetails",
        mine: true,
        maxResults: 12,
      },
      headers: accessToken?{
        Authorization: `Bearer ${accessToken}`,
      }:{},
    }
  );


  return res.data;
}