import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchComments } from "../services/api";
import { useSearchParams } from "react-router-dom";

export function useComments() {
  const [searchParams]=useSearchParams();
  const id=searchParams.get('v')
  return useInfiniteQuery({
    queryKey: ["comments", id],
    queryFn: async ({ pageParam  }) => {
      const data = await fetchComments(id, pageParam);
      return { comments: data.items, nextPageToken: data.nextPageToken };
    },
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  });
}