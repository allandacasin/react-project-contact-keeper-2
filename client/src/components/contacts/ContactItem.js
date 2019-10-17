import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const ContactItem = props => {
  return (
    <Fragment>
      <div className="card bg-light">
        <h3 className="text-primary text-left">Allan Rey Dacasin
          <span className="badge badge-success" style={{float:"right"}}>Professional</span>
        </h3>
        <ul className="list">
            <li>
              <i className="fas fa-envelope-open"> allanrey.dacasin@gmail.com</i>
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

}

export default ContactItem
