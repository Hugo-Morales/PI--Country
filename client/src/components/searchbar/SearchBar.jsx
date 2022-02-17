import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchCountry, loading } from '../../redux/actions';
import styles from './SearchBar.module.css';
import search from './search.svg'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [buscar, setBuscar] = useState('')

    const onChange = (e) => {
        setBuscar(e.target.value);
    }

    const Submit = (e) => {
        e.preventDefault();
        dispatch(loading());
        setTimeout(() => {
            dispatch(SearchCountry(buscar));
        }, 250);
    }

    return (
        <>
            <form onSubmit={Submit} className={styles.container}>
                <input type="text" placeholder='Buscar...' className={styles.input} onChange={onChange} />
                <button type="search" style={{ cursor: 'pointer', height: '23px' }} className={styles.button}><img src={search} alt="search-button" /></button>
            </form>
        </>
    );
}