import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCountry, getCountries, getActivity, getActivityforId, loading } from '../../redux/actions';
import styles from './Filter.module.css';

export const ORALFA = ['Ordenar Alfabeticamente', 'A-Z', 'Z-A'];
export const ORCONT = ['Ordenar por Continente', 'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'];
export const ORPO = ['Ordenar por Población', 'Mayor Población', 'Menor Población', 'Mayor Area', 'Menor Area'];

export default function Filters({ currentPage }) {
    const dispatch = useDispatch();
    const actividades = useSelector(state => state.actividades);
    const [AtoZ, setAtoZ] = useState('');
    const [continent, setContinent] = useState('');
    const [poblacion, setPoblacion] = useState('');
    const [actividad, setActividad] = useState('');

    useEffect(() => {
        currentPage(1);
        if (AtoZ !== '') {
            if (AtoZ === 'Ordenar Alfabeticamente') {
                setAtoZ('');
                dispatch(loading());
                setTimeout(() => {
                    dispatch(getCountries());
                }, 400);
            } else {
                dispatch(loading());
                setTimeout(() => {
                    dispatch(filterCountry(AtoZ));
                }, 400);
            }
        }

        if (continent !== '') {
            if (continent === 'Ordenar por Continente') {
                setContinent('');
                dispatch(loading());
                setTimeout(() => {
                    dispatch(getCountries());
                }, 400);
            } else {
                dispatch(loading());
                setTimeout(() => {
                    dispatch(filterCountry(continent));
                }, 400);
            }
        }

        if (poblacion !== '') {
            if (poblacion === 'Ordenar por Población') {
                setPoblacion('');
                dispatch(loading());
                setTimeout(() => {
                    dispatch(getCountries());
                }, 400);
            } else {
                dispatch(loading());
                setTimeout(() => {
                    dispatch(filterCountry(poblacion));
                }, 400);
            }
        }

        if (actividad !== '') {
            if (actividad === 'Ordenar por Actividad') {
                setActividad('');
                dispatch(loading());
                setTimeout(() => {
                    dispatch(getCountries());
                }, 400);
            } else {
                dispatch(loading())
                setTimeout(() => {
                    dispatch(getActivityforId(actividad));
                }, 700);
            }
        } else {
            dispatch(getActivity());
        }
    }, [dispatch, AtoZ, continent, poblacion, actividad, currentPage]);

    return (
        <div className={styles.container}>
            <div>
                <select name="OrdenarAlfa" onChange={(e) => setAtoZ(e.target.value)} className={styles.select}>
                    {
                        ORALFA.map((d, index) => <option key={index}>{d}</option>)
                    }
                </select>
            </div>
            <div>
                <select name="OrdenarCont" onChange={(e) => setContinent(e.target.value)} className={styles.select}>
                    {
                        ORCONT.map((d, index) => <option key={index}>{d}</option>)
                    }
                </select>
            </div>
            <div>
                <select name="OrdenarPob" onChange={(e) => setPoblacion(e.target.value)} className={styles.select}>
                    {
                        ORPO.map((d, index) => <option key={index}>{d}</option>)
                    }
                </select>
            </div>
            <div>
                <select name="OrdenarAct" onChange={(e) => setActividad(e.target.value)} className={styles.select}>
                    <option value="Ordenar por Actividad">Ordenar por Actividad</option>
                    {
                        actividades.map((d, index) => <option key={index} value={d.id}>{d.name}</option>)
                    }
                </select>
            </div>
        </div >
    )
}