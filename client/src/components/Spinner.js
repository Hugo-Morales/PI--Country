import styles from './Spinner.module.css'

export default function Spinner () {
    return (
        <div className={styles['sk-chase']}>
            <div className={styles['sk-chase-dot']}></div>
            <div className={styles['sk-chase-dot']}></div>
            <div className={styles['sk-chase-dot']}></div>
            <div className={styles['sk-chase-dot']}></div>
            <div className={styles['sk-chase-dot']}></div>
            <div className={styles['sk-chase-dot']}></div>
        </div>
    )
}