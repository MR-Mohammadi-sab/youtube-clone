import { MdOutlineSubscriptions } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { FaRegCircleUser } from "react-icons/fa6";
import HamburgerButton from "./HamburgerButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import Subscriptions from "./Subscriptions";
import { createPortal } from "react-dom";
import SubscriptionsOVer from "./SubscriptionOver";

export default function LeftSideBar() {
  const [showSubscription ,setShowSubscription] = useState(false);
  return (
    <aside className="hidden bg-white w-24 dark:bg-black dark:text-white md:block fixed top-0 left-0 bottom-0 px-4 pt-7">

      <ul className="flex flex-col items-center">

        {/* Hamburger */}
        <li className="mb-4">
          <HamburgerButton />
        </li>

        {/* Home */}
        <li className=" p-4 dark:hover:bg-dark-hover rounded-lg transition">
          <Link to="/" className="flex flex-col items-center transition">
            <IoHomeOutline size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
        </li>

        {/* Shorts */}
        <li className=" p-4 dark:hover:bg-dark-hover rounded-lg transition">
          <Link to="/shorts" className="flex flex-col items-center transition">
            <SiYoutubeshorts size={24} />
            <span className="text-xs mt-1">Shorts</span>
          </Link>
        </li>

        {/* Subscriptions */}
        <li className=" p-4 dark:hover:bg-dark-hover rounded-lg transition relative flex flex-col items-center  cursor-pointer" onMouseOver={() => setShowSubscription(true)} onMouseLeave={() => setShowSubscription(false)}>
            <MdOutlineSubscriptions size={24} />
            <span className="text-xs mt-1">Subscriptions</span>
            {showSubscription && (
              createPortal(

                <SubscriptionsOVer />
              
              , document.body
              )
            )}
        </li>
        {/* You */}
        <li className=" p-4 dark:hover:bg-dark-hover rounded-lg transition">
          <Link to="/you" className="flex flex-col items-center transition">
            <FaRegCircleUser size={24} />
            <span className="text-xs mt-1">You</span>
          </Link>
        </li>

      </ul>
    </aside>
  );
}