import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import { useNavigate } from "react-router-dom"

export default function SearchForm() {
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
    <form className="flex sm:w-[95%] sm:border border-dark-border rounded-full" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search.." value={search} onChange={(e)=>{setSearch(e.target.value)}} className=" py-2 pl-2  rounded-l-full focus:border border-blue-500 focus:outline-0 dark:text-white dark:bg-black sm:w-full hidden sm:inline-block"/>
            <button className="md:py-2 md:px-3  rounded-full sm:rounded-l-none sm:dark:bg-dark-card dark:text-white cursor-pointer text-lg w-14 bg-bg-secondary"><IoSearch size={24}/></button>
    </form>
  )
}
