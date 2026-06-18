import {
  HiThumbUp,
  HiThumbDown,
  HiChat,
  HiShare,
} from "react-icons/hi";
import converteViewtoK from "../utily/converteViewtoK";

export default function VideoActions({like,comment}) {
  return (
            <aside className="absolute -right-12 bottom-[20%] flex flex-col items-center gap-4 text-white z-50">

            
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80  transition ">
              <HiThumbUp size={44} className="bg-gray-400/30  p-2 rounded-full " />
              <span className="text-xs mt-2">{converteViewtoK(like)}</span>
            </div>

            
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80  transition">
              <HiThumbDown size={44} className="bg-gray-400/30  p-2 rounded-full " />
              <span className="text-xs mt-2">dislike</span>
            </div>

           
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80  transition">
              <HiChat size={44} className="bg-gray-400/30  p-2 rounded-full " />
              <span className="text-xs mt-2">{converteViewtoK(comment)}</span>
            </div>

            
            <div className="flex flex-col items-center cursor-pointer hover:opacity-80  transition">
              <HiShare size={44} className="bg-gray-400/30  p-2 rounded-full" />
            </div>

          </aside> 
  )
}
