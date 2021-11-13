import React from "react";
import { Link } from "react-router-dom";
import './Style.scss'

const Nav = ()=>{
   return(
      <div className="navbarcha">
         <ul>
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bir">First</Link>
            </li>
            <li>
               <Link to="/ikki">Second</Link>
            </li>
            <li>
              <Link to="/uch">Third</Link>
            </li>
         </ul>
      </div>
   )
}

export default Nav