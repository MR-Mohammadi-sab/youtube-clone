
import { CiDark } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTheme } from "../context/ThemeProvider";


export default function Theme({ setOpen:openProfile }) {
      const {setShowTheme}=useTheme()
  return (
            <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover" onClick={()=>{
               setShowTheme(true)
                openProfile(false)
            }}>
              <CiDark size={24} />
              <span className="text-sm">Appearance: Device theme</span>
              <MdKeyboardArrowRight size={20} className="ml-auto" />
              
            </div>
  )
}
