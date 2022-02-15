import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_NAME = 'GET_NAME';
export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const GET_ACTIVITY_FOR_ID = 'GET_ACTIVITY_FOR_ID';
export const RESET = 'RESET';
export const DELETE = 'DELETE';
export const LOADING = 'LOADING';

// export const getCountries = () => async dispatch => {
//    await fetch("http://localhost:3001/countries/")
//     .then(r => r.json())
//     .then(data => {
//         dispatch({
//             type: GET_COUNTRIES,
//             payload: data, 
//         })
//     })
// };

export const getCountries = () => async dispatch => {
    const res = await axios.get("http://localhost:3001/countries/");

    dispatch({
        type: GET_COUNTRIES,
        payload: res.data, 
    })
};

export const getDetailCountry = (idPais) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/countries/${idPais}`);

    dispatch({
        type: GET_DETAILS,
        payload: res.data, 
    })
}

export const getNameCountry = (Name) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/countries?name=${Name}`);

    dispatch({
        type: GET_NAME,
        payload: res.data, 
    })
}

export const SearchCountry = (name) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/countries?name=${name}`);

    dispatch({
        type: SEARCH,
        payload: res.data, 
    })
}

export const filterCountry = (filter) => async dispatch => {
    const fil = await axios.get(`http://localhost:3001/filter/${filter}`);

    dispatch({
        type: FILTER,
        payload: fil.data,
    })
}

export const getActivity = () => async dispatch => {
    const fil = await axios.get(`http://localhost:3001/activity`);

    dispatch({
        type: GET_ACTIVITY,
        payload: fil.data,
    })
}

export const getActivityforId = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3001/actividadPais/${id}`);

    dispatch({
        type: GET_ACTIVITY_FOR_ID,
        payload: res.data,
    })
}

export const addActivity = (obj) => async () => {
    await axios.post("http://localhost:3001/activity", obj)
}

export const reset = () => dispatch => {
    dispatch({
        type: RESET,
    })
}

export const deleteActivity = (id) => async dispatch => {
    const res = await axios.delete(`http://localhost:3001/activity/delete/${id}`);

    dispatch({
        type: DELETE,
        payload: res.data,
    })
}

export const loading = () => dispatch => {
    dispatch({
        type: LOADING,
    })
}