import React, {Fragment, useState} from 'react'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import {login} from '../../actions/auth'

const Login = ({setAlert, login, isAuthenticated}) => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData;

  const onChange = e => {

    setFormData({...formData, [e.target.name]:e.target.value})

  }

  const onSubmit = e => {

    e.preventDefault();

    if(password == null || email == null) {
      setAlert('Please fill in all fields.', 'danger');
    } else {
      login({email, password});
    }

  }

  if(isAuthenticated) {
    return <Redirect to="/" />
  }
  
  return (
    <Fragment>
      <div className="form-container">
        <h1>Account <span className="text-primary">Login</span></h1>
      
        <form onSubmit={e => onSubmit(e)}>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} name="email" onChange={e => onChange(e)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} name="password" onChange={e => onChange(e)}></input>
        </div>
        <input type="submit" className="btn btn-primary btn-block" value="Login" />
      </form>
      </div>
    </Fragment>
  )
}

Login.propTypes = {

  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, login})(Login)
