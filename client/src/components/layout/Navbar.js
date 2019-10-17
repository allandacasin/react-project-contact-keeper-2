import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = ({auth: {isAuthenticated, loading, user }}) => {

  const guestLinks = (

  <ul className="navbar-nav" >
    <li className="nav-item"><Link className="nav-link"  to="/login">Login</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>    
  </ul>

  )

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>  
      <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>  
      <li className="nav-item"><span className="nav-link">{!loading && `Hello ${user.name}!`}</span></li>
      <li className="nav-item"><a href="#!" className="nav-link"><i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span></a></li>
    </ul>
  )

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <div className="container">
        <Link className="navbar-brand" href="/" >
          <i className="fas fa-id-card-alt"> </i> Contact Keeper v.2 
        </Link>
        {loading ? null : <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
      </div>      
    </nav>
  )
}

Navbar.propTypes = {

  auth: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
  
  auth: state.auth

})

export default connect(mapStateToProps)(Navbar)
