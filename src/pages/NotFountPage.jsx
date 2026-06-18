import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";

export default function NotFountPage() {
  return (
    <div className="h-screen w-full dark:bg-dark-bg bg-white dark:text-white flex-col gap-3 flex justify-center items-center">
        <img src="./notfound.png" alt="not fount img" />
        <p className="text-gray-800 dark:text-gray-100 text-center">This page isn't available. Sorry about that.
           <br /> Try searching for something else.</p>
        <div className="flex justify-center items-center gap-8 w-[45%]">
            <Logo />
            <SearchForm />
        </div>
    </div>
  )
}
