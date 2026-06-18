import {
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineGlobe,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { SiYoutubestudio } from "react-icons/si";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiShieldUserLine } from "react-icons/ri";

import { IoLanguageOutline } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import { FaEarthAsia } from "react-icons/fa6";
import { CiKeyboard } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";


import Logout from "./Logout";
import Theme from "./Theme";

export default function ProfileMenu({ open, user, setOpen }) {
  if (!open || !user) return null;

  return (
    <div className="absolute right-[4%] mt-3 w-72 dark:bg-dark-bg dark:text-gray-200 shortsScroll shadow-xl rounded-lg z-50 py-2 top-10 bg-bg-secondary">
      
      {/* User Info */}
      <div className="px-4 py-3 border-b">
        <div className="w-10 h-10 rounded-full">
          <img
            src={user.picture}
            alt="your photo"
            className="object-contain rounded-full cursor-pointer"
          />
        </div>
        <p className="font-semibold">Asef Mohammadi</p>
        <p className="text-xs text-gray-500">@AsefMohammadi-zz3pg</p>
        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <span className="text-sm text-blue-400">View your channel</span>
        </div>
      </div>

      {/* Menu */}
      <div className="overflow-y-scroll max-h-104 shortsScroll">

        {/* Section 1 */}


        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <FaGoogle size={24} />
          <span className="text-sm">Google Account</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <MdOutlineSwitchAccount size={24} />
          <span className="text-sm">Switch account</span>
          
        </div>

          <Logout />

        {/* Section 2 */}
        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <SiYoutubestudio size={24} />
          <span className="text-sm">YouTube Studio</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <RiMoneyDollarCircleLine size={24} />
          <span className="text-sm">Purchases and memberships</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <RiShieldUserLine size={24} />
          <span className="text-sm">Your data in YouTube</span>
        </div>

        {/* Section 3 */}
          <Theme setOpen={setOpen} />

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <IoLanguageOutline size={24} />
          <span className="text-sm">Display language: English</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <FaUserGear size={24} />
          <span className="text-sm">Restricted Mode: Off</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <FaEarthAsia size={24} />
          <span className="text-sm">Location: United States</span>
        </div>

        {/* Section 4 */}
        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <CiKeyboard size={24} />
          <span className="text-sm">Keyboard shortcuts</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <HiOutlineCog size={24} />
          <span className="text-sm">Settings</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <HiOutlineQuestionMarkCircle size={24} />
          <span className="text-sm">Help</span>
        </div>

        <div className="mb-10 flex items-center gap-3 px-4 py-2 cursor-pointer dark:hover:bg-dark-hover">
          <MdOutlineFeedback size={24} />
          <span className="text-sm">Send feedback</span>
        </div>

      </div>
    </div>
  );
}