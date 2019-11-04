import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setCurrent, deleteContact} from '../../actions/contact'

const ContactItem = ({contact,
    setCurrent,
    deleteContact
  }) => {

  const {_id, name, email, phone, type} = contact;

  return (
    <Fragment>
      <div className="card bg-light">
        <h3 className="text-primary text-left">{name}
          <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')} style={{float:"right"}}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className="list">
            <li>
             {email && <i className="fas fa-envelope-open"> {email}</i>}
            </li>
            <li>
             {phone && <i className="fas fa-phone"> {phone}</i>}
            </li>
            <p>
              <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button> 
              <button className="btn btn-danger btn-sm" onClick={() => deleteContact(_id)}>Delete</button>
            </p>
        </ul>
      </div>
    </Fragment>
  )
}

ContactItem.propTypes = {
  
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,

}

export default connect(null, {setCurrent, deleteContact})(ContactItem)
