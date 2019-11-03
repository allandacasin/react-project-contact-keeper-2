import { ADD_CONTACT, GET_CONTACTS, CLEAR_CONTACTS, CONTACT_ERROR } from "../actions/types";

const initialState = {
  contacts: [],
  contact: null,
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

    default: 
      return state

  }


}