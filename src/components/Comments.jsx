
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function Comments({comment}) {

  return (
    <div> 
        <div className="flex gap-2 mt-4">
        <span>{comment?.statistics?.viewCount}</span>
        <h3 className="font-bold">Comments </h3>
        </div>
        <div className="flex gap-2 items-center">
         <img src="./my.png" alt="your photo " className="object-fill rounded-full cursor-pointer w-10 h-10 mt-6"/>
            <CommentForm />
        </div>
        <CommentsList />
    </div>
  )
}
