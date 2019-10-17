import { ADD_CONTACT } from "../actions/types";

const initialState = {
  contacts: [],
  contact: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action ) {

  const {type, payload} = action;

  switch(type) {

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

    default: 
      return state

  }


}