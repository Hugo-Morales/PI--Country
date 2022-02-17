const { Router } = require('express');
const { Activities, Country, countries_activities } = require("../db.js");
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
    const activities = await Activities.findAll();
    res.status(200).send(activities);
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Activities.destroy({
            where: {
                id
            }
        });

        const activities = await Activities.findAll();
        res.status(200).send(activities);

        // res.status(200).send("Se borro la actividad correctamente.")
    } catch (error) {
        console.log(error)
    }
})

router.put('/update/:name', async (req,res) => {
    const { name } = req.params;
    const { id } = req.body

    try {
        const all = await countries_activities.findAll({
            where: {
                activityId: id
            }
        });

        if (all.length === 1) {
            await countries_activities.destroy({
                where: {
                    countryId: name,
                    activityId: id
                }
            })

            await Activities.destroy({
                where: {
                    id
                }
            });

            res.send("Se borro correctamente")
        } else {
            await countries_activities.destroy({
                where: {
                    countryId: name,
                    activityId: id
                }
            })
            res.send("Se borro correctamente")
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;