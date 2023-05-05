import { Link } from "react-router-dom"

function Footer() {
   return <footer className="page-footer green draken-3">
         <div className="footer-copyright">
            <div className="container">
               © {new Date().getFullYear()} Copyright Text
               <a className="grey-text text-lighten-4 right" href="https://github.com/xxantonyy">Repo </a>
               <Link className="grey-text text-lighten-4 right about" to="/About">About</Link>
            </div>
         </div>
   </footer>
}

export { Footer }