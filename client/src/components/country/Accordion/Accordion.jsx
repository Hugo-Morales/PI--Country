import styles from './Accordion.module.css';
import img from './trash-2.svg';
import { useDispatch } from 'react-redux';
import { deleteActivity, deleteActivityonDetails } from '../../../redux/actions'

export default function Accordion({ name, difficulty, duration, season, active, setpull, id, id_activity }) {
    const dispatch = useDispatch();

    const refreshPage = () => {
        // dispatch(deleteActivity(id))
        let act_id = {
            id: id
        }

        dispatch(deleteActivityonDetails(id_activity, act_id))
        alert(`Se borro la actividad ${name} en este país.`)
        window.location.reload(false);
    }

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
            <div className={styles.btn_delete}>
                <button className={styles.btn} onClick={refreshPage}><img src={img} alt="Borrar" /></button>
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