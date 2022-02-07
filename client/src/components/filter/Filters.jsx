import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterCountry, getCountries } from '../../redux/actions';
import styles from './Filter.module.css';

export const ORALFA = ['Ordenar Alfabeticamente', 'A-Z', 'Z-A'];
export const ORCONT = ['Ordenar por Continente', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
export const ORPO = ['Ordenar por Población', 'Mayor Población', 'Menor Población'];
export const ORDACT = ['Ordenar por Actividad'];

export default function Filters() {
    const dispatch = useDispatch();
    const [AtoZ, setAtoZ] = useState('');
    const [continent, setContinent] = useState('');
    const [poblacion, setPoblacion] = useState('');

    useEffect(() => {
        if (AtoZ !== '') {
            if (AtoZ === 'Ordenar Alfabeticamente') {
                dispatch(getCountries());
            } else {
                dispatch(filterCountry(AtoZ))
            }
        }

        if (continent !== '') {
            if (continent === 'Ordenar por Continente') {
                dispatch(getCountries());
            } else {
                dispatch(filterCountry(continent))
            }
        }

        if (poblacion !== '') {
            if (poblacion === 'Ordenar por Población') {
                dispatch(getCountries());
            } else {
                dispatch(filterCountry(poblacion))
            }
        }

    }, [dispatch, AtoZ, continent, poblacion]);

    return (
        <div className={styles.container}>
            <div>
                <select name="OrdenarAlfa" onChange={(e) => setAtoZ(e.target.value)}>
                    {
                        ORALFA.map((d, index) => <option key={index}>{d}</option>)
                    }
                </select>
            </div>
            <div>
                <select name="OrdenarCont" onChange={(e) => setContinent(e.target.value)}>
                    {
                        ORCONT.map((d, index) => <option key={index}>{d}</option>)
                    }
                </select>
            </div>
            <div>
                <select name="OrdenarPob" onChange={(e) => setPoblacion(e.target.value)}>
                    {
                        ORPO.map((d, index) => <option key={index}>{d}</option>)
                    }
                </select>
            </div>
            <div>
                <select name="OrdenarAct">
                    {
                        ORDACT.map((d, index) => <option key={index}>{d}</option>)
                    }
                </select>
            </div>
        </div >
    )
}