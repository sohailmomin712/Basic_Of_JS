import style from ".//Navbar.module.css"

import {BsFillCartFill} from "react-icons/bs"
import { Link } from "react-router-dom"

function Navbar() {


    return (
    <div className={style.mainDiv}>

      <div>suFi-Shop</div>

      <div>

        <ul className={style.ul}>
    
          <li>
           <Link  to="/"  > HOME </Link> 
          </li>

          <li>
           <Link  to="/products"  >All Products </Link> 
          </li>
          
          <li>
            <Link  to="/login"  > Login </Link> 
          </li>

          <li>
            <Link  to="/about"  > About </Link> 
          </li>

          <li>
            <Link  to="/cart"  > 
            <BsFillCartFill style={{ fontSize: "20px" }} />
             </Link> 
          </li>

        </ul>
        

      </div>

    </div>

    )


}


export default Navbar