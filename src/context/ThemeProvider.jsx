import { createContext, useContext, useState } from "react"

const ThemeContext=createContext()
export default function ThemeProvider({children}) {
    
    const [showTheme,setShowTheme]=useState(false)
  return (
    <ThemeContext.Provider value={{showTheme,setShowTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(){
    const context=useContext(ThemeContext)
    if(context===undefined) throw new Error("useTheme must be used within a ThemeProvider")
    return context
}
