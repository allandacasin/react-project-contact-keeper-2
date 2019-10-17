import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addContact} from '../../actions/contact'

const ContactForm = ({addContact}) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
  })

  const {name, email, phone, type} = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const onSubmit = e => {
    e.preventDefault();
    
    addContact({name, email, phone, type});

    setFormData({
      name: '',
      email: '',
      phone: '',
      type: ''
    })

  }

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
          <h2 className="text-primary">Add Contact</h2>
        
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)}  />
          <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)}/>
          <input type="text" placeholder="Phone" name="phone" value={phone} onChange={e => onChange(e)}/>

          <h5>Contact Type</h5>
            <input type="radio" place="type" name="type" value="personal" checked={type==="personal"} onChange={e => onChange(e)} />Personal &nbsp;
            <input type="radio" place="type" name="type" value="professional" checked={type==="professional"} onChange={e => onChange(e)} />Professional

          <div>
            <input className="btn btn-primary btn-block rounded-0" type="submit" value="Add Contact" />
          </div>
      </form>
    </Fragment>
  )
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
}

export default connect(null, {addContact})(ContactForm)
