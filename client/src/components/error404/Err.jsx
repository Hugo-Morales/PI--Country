import { Link } from 'react-router-dom';
import styles from './Err.module.css';

export default function Err() {
    return (
        <div className={styles.error_page}>
            <div className={styles.error_a}>
                <Link to='/'>
                    <h1>Regresar al inicio</h1>
                </Link>
            </div>
        </div>
    )
}