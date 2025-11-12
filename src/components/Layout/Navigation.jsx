import { Link } from "react-router-dom"
import '../../../src/App.css'


function Navigation () {
    return(
        <>
        <nav>
       <div className="nav-links" >
      <Link to="/" className="nav-link">Home </Link>
      <Link to="/Portfolio" className="nav-link">Portfolio </Link>
      <Link to="/Contact" className="nav-link">Contact </Link>   
        </div>
</nav>
        </>
    )
}

export default Navigation


