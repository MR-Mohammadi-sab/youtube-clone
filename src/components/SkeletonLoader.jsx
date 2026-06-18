
export default function SkeletonLoader() {
  return (
      <div className="grid lg:grid-cols-3 gap-8 text-white sm:p-4 select-none md:grid-cols-2 grid-cols-1 w-full">
          {Array.from({length:6},(_,i)=><div key={i} className="flex flex-col gap-2 w-87.5  mx-auto">
            {/* image */}
            <div className="w-full h-52 dark:bg-dark-border bg-border animate-pulse mx-auto">
            </div>
            
            {/* content */}
              <div className="flex items-center gap-2">
                {/* user img */}
               <div 
                className="w-10 h-10 rounded-full dark:bg-dark-border bg-border animate-pulse"
              ></div>
              {/* title */}
              <div className="font-bold dark:bg-dark-border bg-border animate-pulse w-[85%] h-4">  </div>
              </div>
              
              {/* desc */}
              <div className="ml-12 text-sm w-[70%] dark:bg-dark-border bg-border animate-pulse  h-3"></div>
            

          </div>
          )}
      </div>
  )
}

