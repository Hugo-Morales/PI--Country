import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailCountry, reset } from '../../redux/actions';
import Navbar from '../nav/Navbar';
import Spinner from "../Spinner";
import Accordion from "./Accordion/Accordion";
import styles from './Country.module.css'

export default function Country() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const details = useSelector(state => state.details);
    const loading = useSelector(state => state.isLoading);
    const [pull, setpull] = useState('');

    useEffect(() => {
        dispatch(getDetailCountry(id));

        return () => {
            dispatch(reset())
        }
    }, [dispatch, id]);

    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <>
                        <Navbar />
                        <div className={styles.container}>
                            <div className={styles.container_img}>
                                <img src={details.image} alt="img" />
                            </div>
                            <div className={styles.container_details}>
                                <div className={styles.contai_title}>
                                    <h4 className={styles.container_title}>ID:</h4>
                                    <h4 className={styles.container_title_details}>{details.id}</h4>
                                </div>
                                <div className={styles.contai_title}>
                                    <h4 className={styles.container_title}>País:</h4>
                                    <h4 className={styles.container_title_details}>{details.name}</h4>
                                </div>
                                <div className={styles.contai_title}>
                                    <h4 className={styles.container_title}>Capital:</h4>
                                    <h4 className={styles.container_title_details}>{details.capital}</h4>
                                </div>
                                <div className={styles.contai_title}>
                                    <h4 className={styles.container_title}>Area:</h4>
                                    <h4 className={styles.container_title_details}>{new Intl.NumberFormat('es-MX').format(details.area)} km2</h4>
                                </div>
                                <div className={styles.contai_title}>
                                    <h4 className={styles.container_title}>Continente:</h4>
                                    <h4 className={styles.container_title_details}>{details.continent}</h4>
                                </div>
                                <div className={styles.contai_title}>
                                    <h4 className={styles.container_title}>Población:</h4>
                                    <h4 className={styles.container_title_details}>{
                                        details.population ? (
                                            <>{new Intl.NumberFormat('es-MX').format(details.population)} habitantes</>
                                        ) : (<>Sin habitantes</>)}</h4>
                                </div>
                                <div className={styles.contai_title}>
                                    <h4 className={styles.container_title}>Subregión:</h4>
                                    <h4 className={styles.container_title_details}>{
                                        details.subregion ? (<>{details.subregion}</>) : (<>No Tiene Subregión</>)
                                    }</h4>
                                </div>
                                {
                                    details.activities?.length >= 1 ? (
                                        <div>
                                            <h4 className={styles.titleAC}>Actividades:</h4>
                                            <div className={styles.contai_title}>
                                                <h4 className={styles.container_accordion}>{details.activities.map((e, index) => (
                                                    <div key={index}>
                                                        <Accordion
                                                            name={e.name}
                                                            difficulty={e.difficulty}
                                                            duration={e.duration}
                                                            season={e.season}
                                                            active={pull}
                                                            setpull={setpull}
                                                        />
                                                    </div>
                                                ))}</h4>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={styles.contai_title}>
                                            <h4 className={styles.container_title}>Sin actividades</h4>
                                            <Link to='/create'>
                                                <h4 className={styles.container_title_add}>Agregar una nueva actividad</h4>
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}