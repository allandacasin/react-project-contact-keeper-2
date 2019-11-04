import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContactItem from './ContactItem'
import ContactFilter from './ContactFilter'
import ContactForm from './ContactForm'
import {getContacts} from '../../actions/contact'
import Spinner from '../layout/Spinner'

const Contact = ({contact: {contacts, loading, filter}, getContacts}) => {

  useEffect(() => {
    getContacts();
  }, [getContacts])

  return (
    <Fragment>
      <div className="grid-2">
        {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

        <div>
          {/* Filter Contact Component */}
          <ContactFilter />
          
          {/* ContactItem Component */}
          <Fragment>
            {loading ? (<Spinner />) : (
              filter ? 
                (<Fragment>
                  {filter.map(contact => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))}
                </Fragment>) :
                (
                <Fragment>
                  {contacts.map(contact => (
                    <ContactItem key={contact._id} contact={contact} />
                  ))}
                </Fragment>
                )
            )}
          </Fragment>
        </div>


      </div>
    </Fragment>
  )
}

Contact.propTypes = {

  getContacts: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
  contact: state.contact
})

export default connect(mapStateToProps, {getContacts})(Contact)
