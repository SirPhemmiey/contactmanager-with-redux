import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT
} from '../actions/types';
const initialState = {
    contacts: [],
    contact: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
            break;
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            }
            break;
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
            break;
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}