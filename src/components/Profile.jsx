import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import Login from "./Login";
import Modal from "./Modal";
import ProfileMenu from "./ProfileMenu";
import ToggleTheme from "./ToggleTheme";

export default function Profile() {
    const [open, setOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const {showTheme}=useTheme()
  return (
    <>
         {user ?<div className="w-8 h-8 rounded-full mr-2" onClick={()=>setOpen(prev=>!prev)}>
       <img src={user.picture} alt="your photo " className="object-contain rounded-full cursor-pointer " referrerPolicy="no-referrer" />
    </div>:
      <Login setUser={setUser} user={user} />}
    
    {open && <Modal setOpen={setOpen} open={open}>
      <ProfileMenu open={open} user={user} setOpen={setOpen}/>
    </Modal>
    }
        {showTheme &&<Modal >
        <ToggleTheme setOpen={setOpen}/>
    </Modal>}
    </>
  )
}

