import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailCountry } from '../../redux/actions';
import Navbar from '../nav/Navbar';
import Spinner from "../Spinner";

export default function Country() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const details = useSelector(state => state.details);
    const loading = useSelector(state => state.isLoading);

    useEffect(() => {
        dispatch(getDetailCountry(id));
    }, [dispatch, id]);

    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <div>
                        <Navbar />
                        <h4>ID: {details.id}</h4>
                        <h4>Area: {details.area} km2</h4>
                        <h4>Capital: {details.capital}</h4>
                        <h4>Continente: {details.continent}</h4>
                        <img src={details.image} alt="img" />
                        <h4>País: {details.name}</h4>
                        <h4>Población: {details.population}</h4>
                        <h4>Subregion: {details.subregion}</h4>
                        {
                            details.activities?.length >= 1 ? (
                                <h4>Actividades: {details.activities.map((e, index) => {
                                    return (
                                        <div key={index}>
                                            <h3>{e.name} :</h3>
                                            <h4>Dificultad: {e.difficulty}</h4>
                                            <h4>Duration: {e.duration} hs</h4>
                                            <h4>Temporada: {e.season}</h4>
                                        </div>
                                    )
                                })}</h4>
                            ) : (
                                <h4>Sin actividades</h4>
                            )
                        }

                    </div>
                )
            }
        </>
    )
}