import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, GET_LOGGEDIN_USER, AUTH_ERROR, NO_TOKEN, LOG_OUT, CLEAR_CONTACTS } from './types'
import {setAlert} from './alert'
import setAuthToken from '../utils/setAuthToken'



// Get Logged In User

export const getLoggedinUser = () => async dispatch => {

  if(localStorage.token){
    setAuthToken(localStorage.token);
  }

  try {
    
    const res = await axios.get('/api/auth');

    //console.log(res.data);

    dispatch({type: GET_LOGGEDIN_USER, payload: res.data});

  } catch (err) {
    
    dispatch({type: AUTH_ERROR})

  }

}


// No Token

export const noToken = () => dispatch => {
  dispatch({type: NO_TOKEN});
}

// Register User

export const register = ({name, email, password}) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({name, email, password});

  try {
    
    const res = await axios.post('api/users', body, config);

    dispatch({ type: REGISTER_SUCCESS, payload: res.data});

  } catch (err) {
    
    const errors = err.response.data.errors;
    
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({ type: REGISTER_FAIL })
  }

}



// Login User

export const login = ({email, password}) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({email, password});

  try {
    
    const res = await axios.post('/api/auth', body, config);

    //console.log(res.data);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data});

    dispatch(getLoggedinUser());

  } catch (err) {

    //console.log(err.response);
    
    const errors = err.response.data.errors;
    
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({ type: LOGIN_FAIL })
  }

}


//Logout User and Clear Contacts

export const logout = () => dispatch => {
  dispatch({type: CLEAR_CONTACTS});
  dispatch({ type: LOG_OUT});
}