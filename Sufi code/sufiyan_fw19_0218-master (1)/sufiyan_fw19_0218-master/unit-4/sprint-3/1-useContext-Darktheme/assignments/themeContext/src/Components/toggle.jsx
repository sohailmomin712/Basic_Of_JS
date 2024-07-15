import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";



const getStyle = (theme) =>
  theme === "dark"
    ? {
        color: "white",
        background: "black"
      }
    : {
        color: "black",
        background: "white"
      };



function ToggleComp(){

    //4. Provider
  const  context = useContext(ThemeContext)

  const { toggleTheme, theme } = context;

  const style = getStyle(theme);





    return (
        <button style={style} onClick={toggleTheme} >
            Change Theme
        </button>
    )
}

export default ToggleComp