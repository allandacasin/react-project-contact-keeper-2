import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import ContactItem from './ContactItem'
import ContactFilter from './ContactFilter'
import ContactForm from './ContactForm'

const Contact = props => {
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
          <ContactItem />

        </div>


      </div>
    </Fragment>
  )
}

Contact.propTypes = {

}

export default Contact
