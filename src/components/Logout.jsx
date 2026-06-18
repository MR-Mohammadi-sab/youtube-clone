import {googleLogout} from "@react-oauth/google"
import { HiOutlineLogout } from "react-icons/hi";

export default function Logout() {
    
  const handleLogout = () => {
    window.location.reload();
    googleLogout();
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };


  return (
      <div className="flex items-center gap-3 px-4 py-2 cursor-pointer dark:bg-dark-card  dark:hover:bg-dark-hover" onClick={handleLogout}>
      <HiOutlineLogout className="text-lg" />
    <span  >sign out</span>
    </div>
  )
}
