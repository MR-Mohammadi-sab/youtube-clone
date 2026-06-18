import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchSubscriptions } from "../services/subscirption";





export default function useSbscriptions() {
  const queryClient=useQueryClient()
    const accessToken=localStorage.getItem("token")
    const {data:subscriptions,isPending}=useQuery({
        queryKey:["subscriptions",accessToken],
        queryFn:()=>fetchSubscriptions(accessToken)
    })
   queryClient.prefetchQuery({
            queryKey:["subscriptions",accessToken],
        queryFn:()=>fetchSubscriptions(accessToken)
   })
    
  return { subscriptions, isPending }
  
}
