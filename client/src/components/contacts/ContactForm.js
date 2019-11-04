import React, {Fragment, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addContact, clearCurrent, updateContact} from '../../actions/contact'

const ContactForm = ({addContact, clearCurrent, updateContact, current}) => {

  useEffect(() => {

    if(current !== null ) {

      setContact(current);
    } 
    else {
      
      setContact({

        name: '',
        email: '',
        phone: '',
        type: ''

      })
    }
    
  }, [current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
  });

  const {name, email, phone, type} = contact;

  const onChange = e => {
    setContact({...contact, [e.target.name]:e.target.value})
  }

  const onSubmit = e => {
    
    e.preventDefault();
    
    if(current !== null) {

      updateContact(contact);

    } else {
    
      addContact(contact);

    }

    clearCurrent();

    setContact({

      name: '',
      email: '',
      phone: '',
      type: ''

    });

  }

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
          <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
        
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)}  />
          <input type="email" placeholder="Email" name="email" value={email} onChange={e => onChange(e)}/>
          <input type="text" placeholder="Phone" name="phone" value={phone} onChange={e => onChange(e)}/>

          <h5>Contact Type</h5>
            <input type="radio" place="type" name="type" value="personal" checked={type==="personal"} onChange={e => onChange(e)} />Personal &nbsp;
            <input type="radio" place="type" name="type" value="professional" checked={type==="professional"} onChange={e => onChange(e)} />Professional

          <div>
            <input className="btn btn-primary btn-block rounded-0" type="submit" value={current ? "Update Contact" : "Add Contact" }/>
          </div>

          {
            current &&
            <div>
             <button className="btn btn-light btn-block" onClick={() => clearCurrent()}>Clear</button>
           </div>
          }
      </form>
    </Fragment>
  )
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  current: PropTypes.object,
}

const mapStateToProps = state => ({
  current: state.contact.current
})


export default connect(mapStateToProps, {addContact, updateContact, clearCurrent})(ContactForm)
