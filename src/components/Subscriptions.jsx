import { faAngleDown, faAngleRight, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useState } from "react";

import useSbscriptions from "../hooks/useSbscriptions";
import Sppiner from "./Sppiner";

// const subscriptions=[
//     {id:1,photo:"my.png" , name :"khan"},
//     {id:2,photo:"my.png" , name :"khan"},
//     {id:3,photo:"my.png" , name :"khan"},
//     {id:4,photo:"my.png" , name :"khan"},
//     {id:5,photo:"my.png" , name :"khan"},
//     {id:6,photo:"my.png" , name :"khan"},
//     {id:7,photo:"my.png" , name :"khan"},
//     {id:8,photo:"my.png" , name :"khan"},
//     {id:9,photo:"my.png" , name :"khan"},
//     {id:10,photo:"my.png" , name :"khan"},
// ]
const Subscriptions=memo(function Subscriptions() {
    const [showMore,setShowMore]=useState(false)
    const {subscriptions:subscriptionChannels,isPending}=useSbscriptions()
    const subscriptionsChannelsItems=subscriptionChannels?.items;
    const subs=showMore ? subscriptionsChannelsItems :subscriptionsChannelsItems?.slice(0,6);

    

  
    
  return (
    <li className="ml-4 py-8">
        <div className="flex items-center gap-4">
        <span className="font-medium">Subscriptions</span>
        <FontAwesomeIcon icon={faAngleRight} size="xs"/>
        </div>
        {subscriptionChannels &&<>
        {!isPending &&<>
        <ul className="mt-4 n ">
            { subs?.map((sub)=> <li key={sub.id} className="cursor-pointer flex justify-between items-center gap-4 ">
                <div className="flex gap-4 mb-4 items-center">
                <img src={sub.snippet.thumbnails.high.url} alt="subscrip photo" className="w-7 h-7 rounded-full object-cover" referrerPolicy="no-referrer"/>
                <span className=" text-sm">{sub.snippet.title}</span>
                 </div>
                <div className="w-1 h-1 rounded-full bg-blue-400 mr-4"></div>
            </li>)}
                   
        </ul>
    <button className="capitalize cursor-pointer" onClick={()=>setShowMore(!showMore)}>
        {showMore?
        <> 
        <span className="font-medium">show less</span> <FontAwesomeIcon icon={faAngleUp} size="xs" /> 
        </>
        :<>
        <FontAwesomeIcon icon={faAngleDown} size="xs" /> 
        <span className="font-medium">show More</span>
        </>
        }
        
    </button>
        </>}
        </>}
    </li>
  )
}
)

export default Subscriptions;