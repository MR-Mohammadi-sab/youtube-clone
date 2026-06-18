import  { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import LoadingBar from "./LoadinBar"
import NotInternetError from './NotInternetError';

export default function RootLayout() {

      useEffect(()=>{
        let checkTheme;
          if(localStorage.getItem("theme")) checkTheme=localStorage.getItem("theme")
          if(checkTheme==="dark"){
              document.documentElement.classList.add("dark")
          }else if(checkTheme=="light"){
              document.documentElement.classList.remove("dark")
          }else {
           if(window.matchMedia("(prefers-color-scheme:dark)").matches){
               document.documentElement.classList.add("dark")
           }else{
            document.documentElement.classList.remove("dark")
           }
          }      
      },[])
      
       if(!navigator.onLine) return <NotInternetError />
  return (
    <div className='max-w-7xl min-w-90 mx-auto dark:bg-black dark:text-white '>
         <LoadingBar />
        <Outlet />
    </div>
  )
}
