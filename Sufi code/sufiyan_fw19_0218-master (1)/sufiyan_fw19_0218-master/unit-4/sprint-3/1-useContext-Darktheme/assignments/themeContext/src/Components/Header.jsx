
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";


function Header() {

  //3.//consuming

  const value = useContext(ThemeContext);

  console.log(value);

  return (
    <>
      <h1>Change Theme</h1>
      <h2>{value.theme}</h2>
    </>
  );
}

export default Header;