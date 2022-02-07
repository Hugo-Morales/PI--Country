import { GET_COUNTRIES, GET_DETAILS, GET_NAME, SEARCH, FILTER } from "../actions";

const initialState = {
    countries: [],
    details: [],
    names: [],
    isLoading: true,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_COUNTRIES: return {
            ...state,
            countries: action.payload,
            isLoading: false,
        }
        case GET_DETAILS: return {
            ...state,
            details: action.payload,
            isLoading: false,
        }
        case GET_NAME: return {
            ...state,
            names: action.payload
        }
        case SEARCH: return {
            ...state,
            countries: action.payload,
        }
        case FILTER: return {
            ...state,
            countries: action.payload,
        }
        default: return state;
    }
}