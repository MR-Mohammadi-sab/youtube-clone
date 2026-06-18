import { createContext, useContext, useState } from 'react'
const LeftNavBarContext=createContext()
export default function LeftSideNavBarProvider({children}) {
    const [drop,setDrop]=useState(false)
  return <LeftNavBarContext.Provider value={{drop,setDrop}}>
    {children}
  </LeftNavBarContext.Provider>
}
// eslint-disable-next-line react-refresh/only-export-components
export function useSideNav(){
    const context=useContext(LeftNavBarContext)
    if(context===undefined) throw new Error("Use the Context out side its Arrary");
    return context;
}
