import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNameCountry } from '../../redux/actions';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';
import log from '../nav/logo.jpg';
import FunctionsForm from './FunctionsForm';
import Validate from './Validate';
 
const DIFFICULTY = ['Seleccionar Dificultad', '1', '2', '3', '4', '5'];
const SEASON = ['Seleccionar Temporada', 'Spring', 'Summer', 'Autumn', 'Winter'];

export default function Form() {
    const dispatch = useDispatch();
    const names = useSelector(state => state.names);
    const { onChange, actividad, submitForm, err, add, countries, eliminar } = FunctionsForm(Validate);

    useEffect(() => {
        if (actividad.country !== '') {
            dispatch(getNameCountry(actividad.country));
        }
    }, [dispatch, actividad.country]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to='/home'>
                        <img src={log} alt="" />
                    </Link>
                </div>
                <div className={styles.title}>
                    <h1>Creando Actividad</h1>
                </div>
            </div>
            <div className={styles.form}>
                <form onSubmit={submitForm}>
                    {/* Nombre de Actividad */}
                    <div className={styles.formContainer}>
                        <div>
                            <label className={styles.label}>Nombre de la Actividad: </label>
                            <input className={styles.input} type='text' name='name' placeholder='Ingrese nombre' value={actividad.name} onChange={onChange} />
                        </div>
                        {err.name && <div className={styles.error}><p>{err.name}</p></div>}
                    </div>

                    {/* Dificultad */}
                    <div className={styles.formContainer}>
                        <div>
                            <label className={styles.label}>Dificultad: </label>
                            <select className={styles.input} name="difficulty" value={actividad.difficulty} onChange={onChange}>
                                {
                                    DIFFICULTY.map((d, index) => <option key={index}>{d}</option>)
                                }
                            </select>
                        </div>
                        {err.difficulty && <div className={styles.error}><p>{err.difficulty}</p></div>}
                    </div>

                    {/* Duración */}
                    <div className={styles.formContainer}>
                        <div>
                            <label className={styles.label}>Duración: </label>
                            <input className={styles.input} type='number' name='duration' min='1' max='24' placeholder='Ingrese las horas' value={actividad.duration} onChange={onChange} />
                        </div>
                        {err.duration && <div className={styles.error}><p>{err.duration}</p></div>}
                    </div>

                    {/* Temporada */}
                    <div className={styles.formContainer}>
                        <div>
                            <label className={styles.label}>Temporada: </label>
                            <select className={styles.input} name="season" value={actividad.season} onChange={onChange}>
                                {
                                    SEASON.map((d, index) => <option key={index}>{d}</option>)
                                }
                            </select>
                        </div>
                        {err.season && <div className={styles.error}><p>{err.season}</p></div>}
                    </div>

                    {/* Países */}
                    <div className={styles.formContainer}>
                        <div>
                            <label className={styles.label}>Pais(es): </label>
                            <input className={styles.input} type='text' name='country' placeholder='Ingrese un país como mínimo' list="country" value={actividad.country} onChange={onChange} />
                            <datalist id="country">
                                {
                                    names?.map((pais, index) => (
                                        <option key={index} value={pais.name} />
                                    ))
                                }
                            </datalist>
                        </div>
                        <input className={styles.input} type="button" value="Agregar País" style={{ cursor: 'pointer', }} onClick={add} />
                        {err.countries && <div className={styles.error}><p>{err.countries}</p></div>}
                    </div>

                    {
                        countries.add?.map((c) => {
                            return (
                                <div key={c} className={styles.list_country}>
                                    <label className={styles.label}>{c}</label>
                                    <button className={styles.button_add} onClick={() => eliminar(c)}>X</button>
                                </div>
                            )
                        })
                    }
                    <div className={styles.submit}>
                        <input className={styles.input} type="submit" value="Agregar Actividad" style={{ cursor: 'pointer', }} />
                    </div>
                </form>
            </div>
        </div>
    )
}