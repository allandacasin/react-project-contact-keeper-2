import React, {Fragment, useRef} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {filterContact, clearFilter} from '../../actions/contact'

const ContactFilter = ({filterContact, clearFilter}) => {

  const text = useRef('');

  const onChange = e => {

    if(text.current.value !== '') {
      
      filterContact(e.target.value)

    } else {
      
      clearFilter();

    }

  }

  return (
    <Fragment>
      <form>
        <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange}/>
      </form>
    </Fragment>
  )
}

ContactFilter.propTypes = {

  filterContact: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,

}

export default connect(null, {filterContact, clearFilter})(ContactFilter)
