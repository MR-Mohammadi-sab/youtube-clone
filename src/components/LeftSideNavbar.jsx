import { Link } from "react-router-dom";
import { useSideNav } from "../context/LeftSideNavBarProvider";

import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import Subscriptions from "./Subscriptions";
import User from "./User";
import Explore from "./Explore";

import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
export default function LeftSideNavbar() {
    const {drop}=useSideNav()
  return (
    <aside className={`z-100000 fixed top-0 left-0 bottom-0 overflow-y-auto dark:bg-black dark:text-white bg-white ${drop?"w-60":"w-0"}  duration-100 leftSideNAvbar`}>
        <nav >
            <ul className="divide-y divide-gray-700  ">
                <div className="pb-8">
                    
                <div className="flex  ml-4 items-center gap-6 mt-4 mb-8">
                    <HamburgerButton/>
                    <Logo />
                </div>
                
                <li>
                    <Link to="/" className="flex gap-6 ml-4 items-center mt-4">
                    <IoHomeOutline size={24}/>
                    <span className="font-medium">Home</span>
                    </Link>
                </li> 
                <li >
                    <Link to='/shorts' className="flex gap-6 ml-4 items-center mt-4">
                    <SiYoutubeshorts size={24}/>
                    <span className="font-medium">Shorts</span>
                    </Link>  
                </li>  
                </div>
                <Subscriptions />
                <User />
                <Explore />
               
            </ul>
        </nav>
    </aside>
  )
}
