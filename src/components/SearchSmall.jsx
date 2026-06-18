import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMicOutline, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SearchSmall() {

    const [show,setShow]=useState(false)
        const navigate=useNavigate()
    const [search,setSearch]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(search.trim()!==""){
            navigate(`/results?search_query=${search}`)
        }
        setSearch("")
    }
  return (
    <form className="sm:hidden" onSubmit={handleSubmit}>
        <button className="cursor-pointer" onClick={() => setShow(!show)}><IoSearch size={24}/></button>
{show && (
            <div className=" bg-bg-secondary absolute inset-0 flex items-center gap-2 dark:text-white dark:bg-black
                p-2 z-10
            ">
            <span className="cursor-pointer dark:hover:bg-dark-hover py-2 px-3 rounded-full" onClick={()=>{
                setShow(false)
                }}>
                <FaArrowLeft size={20}  />
                </span>
                <div className="flex gap-2 border border-dark-border rounded-full w-[80%]">

                <input type="text" placeholder="Search.." value={search} onChange={(e)=>{setSearch(e.target.value)}} className=" py-2 pl-2  rounded-l-full focus:border border-blue-500 focus:outline-0  w-full"/>
                <button className="py-2 px-3  rounded-full rounded-l-none dark:bg-dark-card dark:text-white cursor-pointer text-lg w-14 "><IoSearch size={24}/></button>
                </div>
                <div className="md:dark:bg-btn-gray rounded-full py-2 px-2 text-xl dark:text-white xs:block hidden">
                <span className="cursor-pointer ">
                    <IoMicOutline size={26} />
                </span>
                </div>
            </div>
        )}

    </form>
  )
}
