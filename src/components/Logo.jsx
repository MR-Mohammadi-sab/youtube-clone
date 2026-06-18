import { memo } from "react"
import { Link } from "react-router-dom";

 const Logo= memo(function Logo() {
  return (
    <Link to="/" className="select-none cursor-pointer flex items-center justify-center ">
            <img src="./logo.png" alt="youtube logo" className="md:w-10 md:h-10 h-7 w-7" />
            <span className="font-sans font-bold dark:text-white text-black md:text-lg text-sm">YOUTUBE</span>
        </Link>
  )
})
export default Logo;