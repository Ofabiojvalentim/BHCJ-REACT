import React , { Fragment }from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">

      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 rounded p-2">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" id="navbar-home">Home</Link>
        </li>
        <li className="nav-item dropdown" id="dropdown-menu">
          
          <button className="nav-link active dropdown-toggle" data-bs-toggle="dropdown"> Products </button>
            <div className="dropdown-menu">
              <Link to={"/notebooks"} className="dropdown-item" id="dropdown-notebooks">Notebooks</Link>
              <Link to={"/desktops"} className="dropdown-item" id="dropdown-notebooks">Desktops</Link>
              <Link to={"/servers"} className="dropdown-item" id="dropdown-notebooks">Servers</Link>
              <Link to={"/softwares"} className="dropdown-item" id="dropdown-notebooks">Softwares</Link>
            </div>
        </li>
        <li className="nav-item">
          <Link to={"/services"} className="nav-link active" id="nav-item-services">Services</Link>
        </li>
        <li className="nav-item active">
          <Link to={"/locations"} className="nav-link active" id="nav-item-locations">Locations</Link>
        </li>
        <li className="nav-item active">
          <Link to={"/contact"} className="nav-link active" id="nav-item-contact">Contact</Link>
        </li>
        <li className="nav-item active">
          <a className="nav-link active bi bi-linkedin" href="https://www.linkedin.com/in/fabiojvalentim" tabIndex="-1"> LinkedIn</a>
        </li>
        
        <li className="nav-item active">
          <a className="nav-link active bi bi-twitter" href="https://www.twitter.com/fabiojvalentim" tabIndex="-1"> Twitter</a>
        </li>
      </ul>

    </div>
    </>
  )
}

export default Navigation
