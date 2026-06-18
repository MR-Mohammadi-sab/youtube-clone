import { FaArrowLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import Modal from './Modal'
import { useTheme } from "../context/ThemeProvider";
import { useEffect, useState } from "react";



export default function ToggleTheme({setOpen}) {
    const {setShowTheme}=useTheme()
    const [theme,setTheme]=useState(()=>{
        const savedTheme=localStorage.getItem("theme")
        if(savedTheme) return savedTheme
        return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark":"light"
    })

    
    
    useEffect(()=>{
        let checkTheme=theme
          if (checkTheme === "device")checkTheme=window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark":"light"

        if(checkTheme==="dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme",checkTheme)
    },[theme])

  return (<div className=" fixed top-1/6 md:left-[70%] left-[40%]  min-w-48 flex flex-col gap-2 dark:bg-dark-card p-4 rounded-lg w-1/4 dark:text-white bg-bg-secondary shadow-lg text-text-secondary">
           <h3 className="flex gap-2 py-2 text-left border-b border-dark-border">
            <span className="cursor-pointer dark:hover:bg-dark-hover py-2 px-3 rounded-full" onClick={()=>{
                setShowTheme(false)
                setOpen(true)
            }}>

            <FaArrowLeft size={20}  />
            </span>
            Appearance
            </h3> 
        <ul className="flex flex-col gap-2 text-left">
            <li className="text-gray-500 ">Setting applies to this browser only</li>
            <li  onClick={()=>{setTheme("device")
                setTimeout(()=>setShowTheme(false),300)
            }} className="cursor-pointer flex items-center h-8 ">
               <span className="w-8 h-8 inline-block"> {theme ==="device" && <FaCheck size={24} />}</span>
                Use device theme</li>

            <li  onClick={()=>{setTheme("dark")
                setTimeout(()=>setShowTheme(false),300)
            }} className="cursor-pointer flex items-center h-8 ">
                <span className="w-8 h-8 inline-block"> {theme ==="dark" &&<FaCheck size={24} />}</span>
                Dark theme</li>

            <li  onClick={()=>{setTheme("light")
                setTimeout(()=>setShowTheme(false),300)
            }} className="cursor-pointer flex items-center h-8 ">
                  <span className="w-8 h-8 inline-block">{theme ==="light" &&<FaCheck size={24} />}</span>
                Light theme</li>
        </ul >
        </div>

  )
}
