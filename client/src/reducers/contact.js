import { ADD_CONTACT, GET_CONTACTS, CLEAR_CONTACTS, CONTACT_ERROR, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, DELETE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER } from "../actions/types";

const initialState = {
  contacts: [],
  current: null,
  filter: null,
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
        current: null,
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
        filter: null,
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

    case FILTER_CONTACTS:
      return {
        ...state,
        filter: state.contacts.filter(contact => {
          
          const regex = new RegExp(`${payload}`, 'gi');

        // g = global, match all instances of the pattern in a string, not just one
        // i = case-insensitive (so, for example, /a/i will match the string "a" or "A".

          return contact.name.match(regex) || contact.email.match(regex) || contact.phone.match(regex);

        }),
        loading: false
      }

    case CLEAR_FILTER:
      return {
        ...state,
        filter: null,
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