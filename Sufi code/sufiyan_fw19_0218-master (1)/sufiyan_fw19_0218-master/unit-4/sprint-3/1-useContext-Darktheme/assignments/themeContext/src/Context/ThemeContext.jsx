import { useState } from "react";
import { createContext } from "react";



//1 create context 
export const ThemeContext = createContext()

//2. custom function 
const ThemeContextProvider = ({children})=>{


    const [theme ,  setTheme] = useState("dark")

    
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };


    return (

        //3.Provider 
   <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}} >
       {children}
   </ThemeContext.Provider>

    )
}

export default ThemeContextProvider