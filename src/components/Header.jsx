import { Link } from "react-router-dom"


function Header() {
   return <nav className="green draken-3">
      <div className="nav-wrapper">
         <Link to="/" className="brand-logo">React Recepts</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
               <a href="https://github.com/xxantonyy">Repo</a>
            </li>
            <li>
               <Link to="/About">About</Link>
            </li>
         </ul>
      </div>
   </nav>

}

export { Header }