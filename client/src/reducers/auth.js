import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, GET_LOGGEDIN_USER, NO_TOKEN, LOG_OUT, AUTH_ERROR } from "../actions/types";


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null
}

export default function(state = initialState, action) {

  const {type, payload} = action;

  switch (type) {

    case GET_LOGGEDIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        loading: false
      }


    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOG_OUT:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false        
      }
    

    case NO_TOKEN:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false        
      }
          

  
    default:
      return state
  }

}