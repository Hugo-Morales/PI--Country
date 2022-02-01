const { Router } = require('express');
const { Activities, Country } = require("../db.js");
const router = Router();

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;

    try {
        if (!name) res.status(404).send("El campo nombre es obligatorio");
        if (!countries) res.status(404).send('Debe haber un país como minimo');

        // A la tabla de activities, le agrego los datos de actividad
        let actividad = await Activities.create({
            name,
            difficulty,
            duration,
            season,
        });
    
        // for (let i = 0; i < countries.length; i++) {
        //     const paisActividad = await Country.findOne({
        //         where: { name: countries[i]}
        //     })
        //      actividad.addCountry(paisActividad);
        // }
        const paisActividad = await Country.findAll({
            where: { name: countries },
        });
        
        actividad.addCountry(paisActividad);

        res.status(200).send('¡Se creo una actividad exitosamente!')
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async (req, res) => {
    let activities = await Activities.findAll();
    res.status(200).send(activities);
});

module.exports = router;