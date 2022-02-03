import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_NAME = 'GET_NAME';
export const SEARCH = 'SEARCH';

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

export const addActivity = (obj) => async () => {
    await axios.post("http://localhost:3001/activity", obj)
}