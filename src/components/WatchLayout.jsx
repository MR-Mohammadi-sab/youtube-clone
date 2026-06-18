import { Outlet } from "react-router-dom";
import Header from "./Header";
import HamburgerButton from "./HamburgerButton";
import LeftSideNavbar from "./LeftSideNavbar";
import Modal from "./Modal";
import { useSideNav } from "../context/LeftSideNavBarProvider";

export default function WatchLayout() {
  const {drop}=useSideNav()
  return (
    <div className="min-h-screen dark:bg-black bg-white w-full p-8">
      {drop && <Modal>
        <LeftSideNavbar />
      </Modal>}

        <div className="grid grid-cols-[4rem_1fr] fixed top-0 right-0 left-0 bg-bg-secondary dark:bg-black opacity-95  p-2  z-1000">
            <Header />
        </div>
        
        <main className="dark:text-white pt-18 md:px-6 px-2 grid grid-cols-[1fr_32rem] gap-4 overflow-hidden">
          <Outlet />
        </main>  
    </div>
  )
}
