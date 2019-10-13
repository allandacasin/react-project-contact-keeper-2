import React, {Fragment, useState} from 'react'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'

const Register = ({setAlert, register, isAuthenticated}) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const {name, email, password, password2} = formData;

  const onChange = e => {

    setFormData({...formData, [e.target.name]:e.target.value})

  }

  const onSubmit = e => {

    e.preventDefault();

    if(password !== password2) {
      setAlert('Password Not Match', 'danger');
    } else {
      register({name, email, password});
    }

  }

  if(isAuthenticated) {
    return <Redirect to="/" />
  }
  
  return (
    <Fragment>
      <div className="form-container">
        <h1>Account <span className="text-primary">Register</span></h1>
      
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name" >Name</label>
          <input type="text" value={name} name="name" onChange={e => onChange(e)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} name="email" onChange={e => onChange(e)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} name="password" onChange={e => onChange(e)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Password</label>
          <input type="password" value={password2} name="password2" onChange={e => onChange(e)}></input>
        </div>
        <input type="submit" className="btn btn-primary btn-block" value="Register" />
      </form>
      </div>
    </Fragment>
  )
}

Register.propTypes = {

  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(Register)
