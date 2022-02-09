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
            <Link to='/create'>
                <h1>Crear Actividad</h1>
            </Link>
            <SearchBar />
        </div>
    );
}