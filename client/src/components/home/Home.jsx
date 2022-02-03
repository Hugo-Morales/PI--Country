import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from '../../redux/actions';
import Navbar from '../nav/Navbar';
import Spinner from '../Spinner';
import Countries from "../countries/Countries";
import styles from './Home.module.css'

export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    const loading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div className={styles.container}>
                        {
                            allCountries.length > 0 ? (allCountries.map((p, index) => {
                                return <div key={index}>
                                    <Countries
                                        flag={p.image}
                                        name={p.name}
                                        continente={p.continent}
                                        id={p.id} />
                                </div>
                            })) : (
                                <div className={styles.container_err}>
                                    <div className={styles.error}>
                                        <h1>Error 404</h1>
                                    </div>
                                    <div className={styles.error_details}>
                                        <h4>El país que estás buscando no existe.</h4>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};