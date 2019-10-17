import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const ContactFilter = props => {
  return (
    <Fragment>
      <form>
        <input type="text" placeholder="Filter Contacts..."/>
      </form>
    </Fragment>
  )
}

ContactFilter.propTypes = {

}

export default ContactFilter
