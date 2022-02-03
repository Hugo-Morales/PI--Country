import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchCountry } from '../../redux/actions';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    const dispatch = useDispatch();
    const [buscar, setBuscar] = useState('')

    const onChange = (e) => {
        setBuscar(e.target.value)
    }

    const Submit = (e) => {
        e.preventDefault();

        dispatch(SearchCountry(buscar));
    }

    return (
        <>
            <form onSubmit={Submit}>
                <input type="text" placeholder='Buscar...' className={styles.input} onChange={onChange} />
                <button type="submit" style={{ cursor: 'pointer', height: '23px' }}>Buscar</button>
            </form>
        </>
    );
}