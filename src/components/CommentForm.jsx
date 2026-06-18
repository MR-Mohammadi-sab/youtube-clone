import React, { useState } from 'react'

export default function CommentForm() {
        
    const [sendComment,setSendComment]=useState("")
    const isComment=sendComment==="";
    function handleCancel(e){
        e.PreventDefault();
        setSendComment("")
    }
  return (
            <form className="mt-10 w-[94%] relative">
            <input type="text"  className="focus:outline-0 border-b dark:border-gray-500 w-full" value={sendComment} onChange={(e)=>setSendComment(e.target.value)}/>
            <div className="flex gap-2 absolute right-2 top-10">
            <button className="rounded-full py-1 px-2 hover:bg-btn-gray cursor-pointer" onClick={handleCancel}>Cancel</button>
            <button disabled={isComment} className={`py-1 px-2 rounded-full cursor-pointer ${isComment?" text-gray-600 bg-gray-600/10 ":"dark:text-white bg-blue-400"}`}>Comment</button>
            </div>
        </form>
  )
}
