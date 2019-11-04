import { ADD_CONTACT, GET_CONTACTS, CLEAR_CONTACTS, CONTACT_ERROR, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, DELETE_CONTACT } from "../actions/types";

const initialState = {
  contacts: [],
  current: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action ) {

  const {type, payload} = action;

  switch(type) {

    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
        loading: false
      }

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
        loading: false
      }

    case CONTACT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }

    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: [],
        contact: null,
        loading: false
      }

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => contact._id === payload._id ? contact = payload : contact) ,
        loading: false
      }

    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false
      }

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== payload ),
        loading: false
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      }

    default: 
      return state

  }


}