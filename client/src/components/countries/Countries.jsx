import { Link } from 'react-router-dom'
import styles from './Countries.module.css'

export default function Countries({ flag, name, continente, id }) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Link to={`/country/${id}`}>
                    <h3>{name} | ({id})</h3>
                </Link>
            </div>
            <div className={styles.img}>
                <img src={flag} alt='flag' />
            </div>
            <div className={styles.title}>
                <h4>Continente: {continente}</h4>
            </div>
        </div>
    )
}