import React from "react";
import { Link } from "react-router-dom";
import './Style.css'

const Nav = ()=>{
   return(
      <div className="navbarcha">
         <ul>
           <li>
              <Link to="/">Insert</Link>
            </li>
            <li>
              <Link to="/bir">Fetch</Link>
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