import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import LeftSideNavbar from "./LeftSideNavbar";


export default function NotInternetError() {
  return (
        <div className="grid-cols-[6rem_1fr] max-w-7xl min-w-90 mx-auto">
        <LeftSideBar />
        <LeftSideNavbar />
        <div className="md:ml-24 mt-2">
            <Header />
            <div className="flex flex-col gap-5 items-center justify-center h-[80vh]">
                <img src="./utube.png" alt="no internet" />
                <h3>Connect to the internet</h3>
                <p>You're offline. Check your connection</p>
                <button className="cursor-pointer px-2 py-1 rounded-4xl text-blue-500 hover:bg-blue-400/30 border border-blue-300">Retry</button>
            </div>
        </div>
        
    </div>
  )
}




