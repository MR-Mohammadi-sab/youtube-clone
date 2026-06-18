import { Outlet } from "react-router-dom";
import Header from "./Header";
import HomeNavbar from "./HomeNavbar";
import LeftSideBar from "./LeftSideBar";
import LeftSideNavbar from "./LeftSideNavbar";

import '../services/api'
import { useSideNav } from "../context/LeftSideNavBarProvider";
import Modal from "./Modal";

export default function Layout() {
  const {drop}=useSideNav()
  return (
    <div className="h-screen dark:bg-black bg-bg  flex items-start justify-center w-full relative ">
       
        {drop && <Modal opacity={true} >  
          <LeftSideNavbar />
          </Modal>}
          
          <LeftSideBar  />
          
        {/* for header and navbar */}
        <div className="flex-1 min-w-62.5 md:ml-20">
        <div className="dark:bg-black bg-bg opacity-95  p-2  z-1000 sticky top-0"> 
            <Header />
            <HomeNavbar />
        </div>  
        <main className="dark:text-white dark:bg-black bg-bg text-black   overflow-auto">
          <Outlet />
        </main>
        </div>
         
    </div>
  )
}
