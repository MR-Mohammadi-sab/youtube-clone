import {useGoogleLogin } from "@react-oauth/google";
import { FaRegCircleUser } from "react-icons/fa6";


export default function Login({setUser}) {
  
const login = useGoogleLogin({
    scope: "https://www.googleapis.com/auth/youtube.force-ssl",
  onSuccess: async (tokenResponse) => {
    const tokenAccess = tokenResponse.access_token;
  
    localStorage.setItem("token",tokenAccess)
    const userInfo = await fetch(
      "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
      {
        headers: {
          Authorization: `Bearer ${tokenAccess}`,
        },
      }
    );

    const data = await userInfo.json();
    setUser(data)
    localStorage.setItem("user",JSON.stringify(data))
    window.location.reload();
  },
});


  return (
    <button
      onClick={login}
      className="dark:bg-dark-card  border border-gray-400 dark:text-white cursor-pointer gap-0.5 rounded-full md:px-4 py-2  px-2 text-sm  font-semibold flex items-center justify-center hover:border-bg-secondary dark:hover:border-dark-hover  dark:hover:bg-dark-hover transition text-black bg-bg-secondary" 
    >
      <FaRegCircleUser size={19} />
      Sign in
    </button>
  )
}

