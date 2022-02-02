import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

export default function LandingPage() {
    return (
        <div className={styles.landing}>
            <Link className={styles.button} to='/home'>INGRESAR</Link>
        </div>
    );
}