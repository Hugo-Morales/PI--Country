export default function Validate(actividad, countries) {
    let err = {};

    if (!actividad.name.trim()) {
        err.name = 'Este campo es obligatorio';
    }

    if (!actividad.difficulty) {
        err.difficulty = 'Tenes que seleccionar un nivel de dificultad.'
    } else if (actividad.difficulty === 'Seleccionar Dificultad') {
        err.difficulty = 'Tenes que seleccionar un nivel de dificultad.'
    }

    if (!actividad.duration) {
        err.duration = 'La duración es de 1 a 24hs.'
    } else if (actividad.duration >= 25) {
        err.duration = 'La duración es de 1 a 24hs.'
    }

    if (!actividad.season) {
        err.season = 'Tenes que seleccionar una temporada.'
    } else if (actividad.season === 'Seleccionar Temporada') {
        err.season = 'Tenes que seleccionar una temporada.'
    }

    if (!countries.add.length) {
        err.countries = 'Debes al menos ingresar un país.'
    }

    return err;
}