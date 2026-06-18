import { Link } from "react-router-dom"
import converteViewtoK from "../utily/converteViewtoK"
import timeAgo from "../utily/timeAgo"
import formatDuration from "../utily/conveteTime"

export default function VideoLists({data}) {
  return (
    <>
         {data?.map((video) => (
        <figure key={video.id} className="flex flex-col gap-2 rounded-sm relative dark:hover:bg-gray-800 p-3 min-w-62.5 overflow-hidden w-full mx-auto max-w-300 hover:bg-gray-200 text-black dark:text-white ">
          <Link to={`/watch?v=${video.id}`}>
          <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className="rounded-sm w-full h-62.5 object-fill" referrerPolicy="no-referrer" />
          <span className="absolute top-52  right-12">{formatDuration(video?.contentDetails?.duration)}</span>
          <div className="flex items-center gap-2">
          {video.channelAvatar && <img
            src={video.channelAvatar}
            alt={video.snippet.channelTitle + " avatar"}
            className="w-10 h-10 rounded-full"
          />}
          <h3 className="font-bold mt-2">{video.snippet.title}</h3>
          </div>
          </Link>
          <div className="text-gray-400 ml-12 -mt-1">

            <Link to="">
          <p className="text-sm">{video.snippet.channelTitle}</p></Link>
          <div className="flex gap-3 mt-1 text-xs">
          <span>{converteViewtoK(video.statistics.viewCount)}</span> <span>•</span>
          <span >{timeAgo(video.snippet.publishedAt)}</span>
          </div>
          </div>
        </figure>
      ))}
    </>
  )
}
