import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const ContactItem = ({contact :{
  _id,
  name,
  email,
  phone,
  type
}}) => {
  return (
    <Fragment>
      <div className="card bg-light">
        <h3 className="text-primary text-left">{name}
          <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')} style={{float:"right"}}>{type}</span>
        </h3>
        <ul className="list">
            <li>
             {email && <i className="fas fa-envelope-open"> {email}</i>}
            </li>
            <li>
             {phone && <i className="fas fa-phone"> {phone}</i>}
            </li>
            <p>
              <button className="btn btn-dark btn-sm">Edit</button> <button className="btn btn-danger btn-sm">Delete</button>
            </p>
        </ul>
      </div>
    </Fragment>
  )
}

ContactItem.propTypes = {
  
  contact: PropTypes.object.isRequired,

}

export default ContactItem
