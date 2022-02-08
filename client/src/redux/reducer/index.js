import { GET_COUNTRIES, GET_DETAILS, GET_NAME, SEARCH, FILTER, GET_ACTIVITY, GET_ACTIVITY_FOR_ID, RESET } from "../actions";

const initialState = {
    countries: [],
    details: [],
    names: [],
    actividades: [],
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
        case GET_ACTIVITY: return {
            ...state,
            actividades: action.payload
        }
        case GET_ACTIVITY_FOR_ID: return {
            ...state,
            countries: action.payload
        }
        case RESET: return {
            ...state,
            details: []
        }
        default: return state;
    }
}