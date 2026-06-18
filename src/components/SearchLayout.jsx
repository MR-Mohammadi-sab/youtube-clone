import SearchResults from "../pages/SearchResults";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import LeftSideNavbar from "./LeftSideNavbar";

export default function SearchLayout() {
  return (
    <div className="h-screen">
        <LeftSideBar />
        <LeftSideNavbar />
        <div className="dark:bg-dark-bg dark:text-white md:ml-20">
            <div className="sticky top-0 z-10000 dark:bg-dark-bg opacity-95 dark:text-white bg-bg-secondary">
            <Header />
            </div>  
            <SearchResults />
        </div>
    </div>
  )
}
