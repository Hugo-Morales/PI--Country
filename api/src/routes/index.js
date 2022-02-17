const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activities = require('./activities');
const { Country, countries_activities } = require("../db.js");
const country = require('./country');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', country);
router.use('/activity', activities);

router.get('/filter/:order', async (req, res) => {
    const { order } = req.params;

    switch (order) {
        case 'A-Z': {
            const az = await Country.findAll({
                order: [["name", "ASC"]],
            });

            return res.send(az);
        }
        case 'Z-A' :{
            const za = await Country.findAll({
                order: [["name", "DESC"]],
            });
        
            return res.send(za);
        }
        case 'Africa':
            case 'Antarctica':
                case 'Asia':
                    case 'Europe':
                        case 'North America':
                            case 'South America':
                                case 'Oceania': {
                                    const cont = await Country.findAll({
                                        where: {
                                            continent: order
                                        }
                                    })
                                
                                    return res.send(cont);
                                }
        case 'Mayor Población': {
            const bigger = await Country.findAll({
                order: [["population", "DESC"]],
            });
        
            return res.send(bigger);
        }
        case 'Menor Población': {
            const lower = await Country.findAll({
                order: [["population", "ASC"]],
            });
        
            return res.send(lower);
        }
        case 'Mayor Area': {
            const biggera = await Country.findAll({
                order: [["area", "DESC"]],
            });
        
            return res.send(biggera);
        }
        case 'Menor Area': {
            const lowera = await Country.findAll({
                order: [["area", "ASC"]],
            });
        
            return res.send(lowera);
        }
        default: return res.send('Filter incorrecto.');
    }
})

router.get("/actividadPais", async (req, res) => {
    let actividadPorPais = await countries_activities.findAll();
    return res.status(200).send(actividadPorPais);
});

router.get("/actividadPais/:id", async (req, res) => {
    const { id } = req.params;

    let actividadPorPais = await countries_activities.findAll({
        where: {
            activityId: id
        },
    });

    let idPais = actividadPorPais.map(c => c.countryId);

    let paisconeseId = await Country.findAll({
        where:{
            id: idPais
        }
    })

    return res.status(200).send(paisconeseId);
});

module.exports = router;