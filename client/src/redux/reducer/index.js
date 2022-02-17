import { GET_COUNTRIES, GET_DETAILS, GET_NAME, SEARCH, FILTER, GET_ACTIVITY, GET_ACTIVITY_FOR_ID,
    RESET, DELETE, LOADING, DELETE_COUNTRY_ON_ACT } from "../actions";

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
            isLoading: false,
        }
        case FILTER: return {
            ...state,
            countries: action.payload,
            isLoading: false,
        }
        case GET_ACTIVITY: return {
            ...state,
            actividades: action.payload,
        }
        case DELETE_COUNTRY_ON_ACT: return {
            ...state,
            actividades: action.payload,
        }
        case GET_ACTIVITY_FOR_ID: return {
            ...state,
            countries: action.payload,
            isLoading: false,
        }
        case RESET: return {
            ...state,
            details: [],
        }
        case DELETE: return {
            ...state,
            actividades: action.payload,
        }
        case LOADING: return {
            ...state,
            countries: [],
            isLoading: true,
        }
        default: return state;
    }
}