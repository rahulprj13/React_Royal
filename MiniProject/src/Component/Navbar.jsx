import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarNav">
        <Link style={{fontSize:"2.3rem"}} className="navbar-brand text-white" to="/">Navbar</Link>

          <ul className="navbar-nav ms-auto">

            <li className="nav-item me-3">
              <Link className="nav-link text-white" to="/netflixhome">Home</Link>
            </li>

            <li className="nav-item me-3">
              <Link className="nav-link text-white" to="/netflixabout">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/netflixcontact">Contact</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-white" to="/netflixmovie">Movies</Link>
            </li>

             <li className="nav-item">
              <Link className="nav-link text-white" to="/iplteam">IplTeam</Link>
            </li> 

            <li className="nav-item">
              <Link className="nav-link text-white" to="/usedemo1">Usedemo1</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/usedemo2">Usedemo2</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/usedemo3">Usedemo3</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
