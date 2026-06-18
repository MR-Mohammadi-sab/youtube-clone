import {  useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import Header from "../components/Header";

export default function You() {
  const [user] = useState(()=>{
    if(localStorage.getItem("user")) return JSON.parse(localStorage.getItem("user"))
});
console.log(user);

    if(!user) return <div className="dark:text-white dark:bg-blackh-screen flex flex-col justify-center items-center">
        <p>You should Log in!</p>
    </div>

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-white">
        <LeftSideBar />
      <div className="md:ml-24 ml-0">
        <div className="sticky top-0 opacity-95 dark:bg-black bg-bg-secondary">

        <Header />
        </div>
        {/* HEADER */}
        <div className="flex items-center gap-2 py-20 px-8 dark:bg-dark-card  bg-bg-secondary">

          <div className=" w-28 h-28 border-4 border-white rounded-full">
            <img
              src={user?.picture}
              className="w-28 h-28 rounded-full  dark:border-black"
              referrerPolicy="no-referrer"
            />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <p className="text-gray-500 dark:text-gray-400">
                @{user?.name} • 12K subscribers • 120 videos
              </p>
            </div>

        </div>

        {/* TABS */}
        <div className="flex gap-6 px-6 mt-6 border-b border-gray-200 dark:border-gray-800">
          <button className="pb-2 border-b-2 border-red-600">Home</button>
          <button className="pb-2 text-gray-500">Videos</button>
          <button className="pb-2 text-gray-500">Playlists</button>
          <button className="pb-2 text-gray-500">About</button>
        </div>

        {/* VIDEOS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={`https://picsum.photos/300/180?random=${item}`}
                className="w-full"
              />

              <div className="p-3">
                <h3 className="font-semibold text-sm">
                  How to build a YouTube Clone in React {item}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  12K views • 2 days ago
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}