import { createPortal } from "react-dom"
import { useSideNav } from "../context/LeftSideNavBarProvider"
import { useTheme } from "../context/ThemeProvider"

export default function Modal({children,setOpen,opacity=false}) {
    const {setDrop}=useSideNav()
    const {setShowTheme}=useTheme()
    function handleClick(){
       setDrop(false)
       setOpen(false)
      setShowTheme(false)
    }
  
  return (
    createPortal(
    <div className={`fixed inset-0 z-100000 ${opacity ? "bg-black/50" : ""}`} onClick={handleClick}>
        <div onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
    </div>,
    document.body
    )

  )
}
