
import { IoMicOutline } from "react-icons/io5";
import SearchForm from "./SearchForm";





export default function Search() {

    

  return (
            <div className="hidden sm:flex items-center md:gap-2 sm:w-[47%] md:w-1/2">
                <SearchForm />
        <div className="md:dark:bg-btn-gray rounded-full py-2 px-2 text-xl dark:text-white xs:block hidden">
            <span className="cursor-pointer ">
                <IoMicOutline size={26} />
            </span>
        </div>
    </div>
  )
}
