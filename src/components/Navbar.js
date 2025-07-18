import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg  bg-body-tertiary   ">
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>

    <div className="container-fluid " style={{display:'flex', justifyContent:'center'}} >
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link active mx-4" to="/about">aboutText</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://www.youtube.com/=" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://www.youtube.com/=">Action</a></li>
              <li><a className="dropdown-item" href="https://www.youtube.com/=">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="https://www.youtube.com/=">Something else here</a></li>
             
  
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div class={`form-check form-switch text-${props.mode==='light' ?  'dark':'light'}`}>
  <input className="form-check-input"  onClick ={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
