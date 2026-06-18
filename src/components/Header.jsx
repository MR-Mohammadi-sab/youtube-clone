

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus, faBell} from '@fortawesome/free-solid-svg-icons'

import Logo from "./Logo";
import Search from "./Search";
import HamburgerButton from "./HamburgerButton";
import Profile from "./Profile";
import SearchSmall from "./SearchSmall";

export default function Header() {

 
  return (
    <header  className="flex justify-between items-center p-2 relative max-w-300 min-w-87.5 select-none">

      <div className="flex gap-2">
      <div className="md:hidden">
        <HamburgerButton />
      </div>
        <Logo />
      </div>
    
        <Search />
      <div className="flex gap-4 items-center"> 
        <SearchSmall />
       <div className="gap-4 flex">
            <button className="md:dark:bg-dark-border text-black bg-bg-secondary py-1 md:px-2 font-medium dark:text-white rounded-full  cursor-pointer min-w-18 dark:bg-btn-gray px-1 text-sm "><FontAwesomeIcon size="lg" icon={faPlus}/>Create</button>
            <button className="  font-medium dark:text-white rounded-full text-xl cursor-pointer hidden xs:block"><FontAwesomeIcon icon={faBell}/></button>
        </div> 
          <Profile />
      </div>
    </header>
  )
}
