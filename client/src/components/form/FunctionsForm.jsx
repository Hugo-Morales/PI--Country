import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../../redux/actions';

export default function FunctionsForm(Validate) {
    const dispatch = useDispatch();
    const [err, setErr] = useState({});
    const [countries, setCountries] = useState({
        add: []
    });
    const [actividad, setActividad] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: '',
    })

    const onChange = (e) => {
        const { name, value } = e.target;

        setActividad({
            ...actividad,
            [name]: value,
        })
    }

    const submitForm = (e) => {
        e.preventDefault();

        setErr(Validate(actividad, countries))

        let newActity = {
            name: actividad.name,
            difficulty: actividad.difficulty,
            duration: actividad.duration,
            season: actividad.season,
            countries: countries.add,
        }

        if (Object.keys(err).length === 0 && countries.add.length !== 0 && actividad.name && actividad.difficulty && actividad.duration && actividad.season) {
            dispatch(addActivity(newActity))
            alert('Se a creado una actividad exitosamente.')

            setActividad({
                name: '',
                difficulty: '',
                duration: '',
                season: '',
                country: '',
            })

            setCountries({ add: [] })
        }

    }

    const add = (e) => {
        e.preventDefault();

        if (!actividad.country.trim()) {
            alert("El campo no puede estar vacío.")
        } else if (countries.add.some(c => c === actividad.country)) {
            alert("No se puede agregar el mismo país.")
        } else {
            if (actividad.country !== '') {
                countries.add.push(actividad.country)
            }
        }

        setActividad({
            ...actividad,
            country: ''
        })
    }

    const eliminar = (id) => {
        let country = countries.add.filter(c => c !== id)

        setCountries({
            ...country,
            add: country,
        })
    }

    return { onChange, actividad, submitForm, err, add, countries, eliminar }
}