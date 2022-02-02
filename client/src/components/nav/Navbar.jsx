import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';
import styles from './Navbar.module.css';
import log from './logo.jpg'

export default function Navbar() {
    return (
        <div className={styles.header}>
            <Link to='/home'>
                <div className={styles.logo}>
                    <img src={log} alt="" />
                </div>
            </Link>
            <SearchBar />
            <Link to='/create'>
                <h1 className={styles.form}>Crear Actividad</h1>
            </Link>
        </div>
    );
}