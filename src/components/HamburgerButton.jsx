import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSideNav } from "../context/LeftSideNavBarProvider"


export default function HamburgerButton({margin =""}) {
  const {setDrop}=useSideNav()
  return (

        <button className={`cursor-pointer dark:text-white ${margin}`} onClick={()=>setDrop(p=>!p)}>
        <FontAwesomeIcon size="lg" icon={faBars} />
        </button>
   
  )
}
