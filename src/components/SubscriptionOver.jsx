

import { memo } from "react";

import useSbscriptions from "../hooks/useSbscriptions";
import Sppiner from "./Sppiner";


const SubscriptionsOVer=memo(function Subscriptions() {

    const {subscriptions:subscriptionChannels,isPending}=useSbscriptions()
    const subscriptionsChannelsItems=subscriptionChannels?.items;

    if(!subscriptionChannels || !isPending) return null

   
    
  return (
                  <div className="fixed top-[40%] left-20 w-64 dark:bg-dark-bg p-4 rounded-lg shadow-lg z-100000 h-40 overflow-y-auto dark:text-white shortsScroll">
        <ul className="">
            {isPending && <Sppiner/>}
            { subscriptionsChannelsItems?.map((sub)=> <li key={sub.id} className="cursor-pointer flex justify-between items-center gap-4 ">
                <div className="flex gap-4 mb-4 items-center">
                <img src={sub.snippet.thumbnails.high.url} alt="subscrip photo" className="w-7 h-7 rounded-full object-cover" referrerPolicy="no-referrer"/>
                <span className=" text-sm">{sub.snippet.title}</span>
                 </div>
                <div className="w-1 h-1 rounded-full bg-blue-400 mr-4"></div>
            </li>)}
           
            
        </ul>
    </div>
  )
}
)

export default SubscriptionsOVer;