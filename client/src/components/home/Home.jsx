import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from '../../redux/actions';
import Navbar from '../nav/Navbar';
import Spinner from '../Spinner';
import Countries from "../countries/Countries";
import Pagination from "../pagination/Pagination";
import styles from './Home.module.css'
import Filters from "../filter/Filters";

export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    const loading = useSelector(state => state.isLoading);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage] = useState(10);
    const indexOfLastPage = currentPage * countryPerPage;
    const indexOfFirstPage = indexOfLastPage - countryPerPage;
    const current = allCountries.slice(indexOfFirstPage, indexOfLastPage);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const paginate = (currentPage) => setCurrentPage(currentPage);

    return (
        <div className={styles.home}>
            <Navbar />
            <Filters />
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div className={styles.container}>
                        {
                            allCountries.length > 0 ? (current.map((p, index) => (
                                <Countries
                                    flag={p.image}
                                    name={p.name}
                                    continente={p.continent}
                                    id={p.id}
                                    key={index}
                                />
                            ))) : (
                                <div className={styles.container_err}>
                                    <div className={styles.error}>
                                        <h1>Error 404</h1>
                                    </div>
                                    <div className={styles.error_details}>
                                        <h4>El país que estás buscando no existe.</h4>
                                    </div>
                                </div>
                            )
                        },
                        {
                            allCountries.length > 0 ? (
                                <Pagination countryPerPage={countryPerPage} totalPost={allCountries.length} paginate={paginate} currentPage={currentPage} />
                            ) : (null)
                        }
                    </div>
                )
            }
        </div>
    );
};