import styles from './Accordion.module.css';

export default function Accordion({ name, difficulty, duration, season, active, setpull }) {
    return (
        <div className={styles.accordion}>
            <div className={styles.accordionHeading}>
                <div className={styles.container}>
                    <p>{name}</p>
                    <span onClick={() => setpull(name)}>
                        {active === name ? 'X' : '▼'}
                    </span>
                </div>
            </div>
            <div className={(active === name ? [styles['accordionContent'], styles['show']].join(' ') : styles['accordionContent'])}>
                <div className={styles.container}>
                    <p>Duración: {duration}hs</p>
                    <p>Dificultad: {difficulty}</p>
                    <p>Temporada: {season}</p>
                </div>
            </div>
        </div >
    )
}
