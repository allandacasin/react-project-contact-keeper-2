import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <div className="container">
        <a className="navbar-brand" href="/" >
        <i className="fas fa-id-card-alt"> </i> Contact Keeper v.2 
        </a>
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link"  to="/login">Login</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
        </ul>
      </div>      
    </nav>
  )
}

Navbar.propTypes = {

}

export default Navbar
