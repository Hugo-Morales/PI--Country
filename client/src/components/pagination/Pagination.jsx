import { Link } from "react-router-dom";
import styles from './Pagination.module.css';

export default function Pagination({ countryPerPage, totalPost, paginate, currentPage }) {
    const page = [];

    for (let i = 1; i < Math.ceil(totalPost / countryPerPage); i++) {
        page.push(i)
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.list_page}>
                {
                    page.map(n => (
                        <div key={n} className={(currentPage === n) ? [styles['page'], styles['activ']].join(' ') : styles['page']}>
                            <Link onClick={() => paginate(n)} to="/home" className={(currentPage === n) ? styles['active'] : ''}>{n}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}