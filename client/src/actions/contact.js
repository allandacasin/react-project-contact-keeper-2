import axios from 'axios'
import {setAlert} from './alert'
import { ADD_CONTACT, CONTACT_ERROR } from './types'


export const addContact = ({name, email, phone, type}) => async dispatch => {

  try {
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({name, email, phone, type});

    const res = await axios.post('api/contacts', body, config);

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