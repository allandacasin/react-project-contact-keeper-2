import axios from 'axios'
import {setAlert} from './alert'
import { ADD_CONTACT, CONTACT_ERROR, GET_CONTACTS, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, DELETE_CONTACT } from './types'


export const addContact = contact => async dispatch => {

  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('api/contacts', contact, config);

    dispatch({type: ADD_CONTACT, payload: res.data});

    dispatch((setAlert('Contact Added', 'success')));

  } catch (err) {

    const errors = err.response.data.errors;
    

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    
    dispatch({type: CONTACT_ERROR, payload: {msg: err.response.statusText, status: err.response.status}});

  }


}

export const getContacts = () => async dispatch => {

  try {

    const res = await axios.get('/api/contacts');
    //console.log(res.data);
    dispatch({type: GET_CONTACTS, payload: res.data });

  } catch (err) {
    
    dispatch({type: CONTACT_ERROR, payload: {msg: err.response.statusText, status: err.response.status}});

  }

}


export const setCurrent = contact => dispatch => {

  dispatch({type: SET_CURRENT, payload: contact})

}

export const clearCurrent = () => dispatch => {
  
  dispatch({type: CLEAR_CURRENT})

}

export const updateContact = contact => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.put(`api/contacts/${contact._id}`, contact, config);

    dispatch({type: UPDATE_CONTACT, payload: res.data});

    dispatch((setAlert('Contact Updated', 'success')));

  } catch (err) {
    
    const errors = err.response.data.errors;
    

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    
    dispatch({type: CONTACT_ERROR, payload: {msg: err.response.statusText, status: err.response.status}});
  }


}


export const deleteContact = _id => async dispatch => {

  if(window.confirm('Are you sure to delete? This cannot be undone.!')) {

    try {
      
      await axios.delete(`/api/contacts/${_id}`);

      dispatch({type: DELETE_CONTACT, payload: _id});

      dispatch((setAlert('Contact Deleted', 'success')));

    } catch (err) {
      
      dispatch({type: CONTACT_ERROR, payload: {msg: err.response.statusText, status: err.response.status}});
    }

  }


}