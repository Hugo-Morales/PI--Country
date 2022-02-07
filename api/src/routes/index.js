const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activities = require('./activities');
const { Country } = require("../db.js");
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
        
            return res.status(200).send(az);
        }
        case 'Z-A' :{
            const za = await Country.findAll({
                order: [["name", "DESC"]],
            });
        
            return res.status(200).send(za);
        }
        case 'Africa':
            case 'Americas':
                case 'Asia':
                    case 'Europe':
                        case 'Oceania': {
                            const cont = await Country.findAll({
                                where: {
                                    continent: order
                                }
                            })
                        
                            return res.status(200).send(cont);
                        }
        case 'Mayor Población': {
            const bigger = await Country.findAll({
                order: [["population", "DESC"]],
            });
        
            return res.status(200).send(bigger);
        }
        case 'Menor Población': {
            const lower = await Country.findAll({
                order: [["population", "ASC"]],
            });
        
            return res.status(200).send(lower);
        }
        default:
            return res.send(`Filter not found!`);
    }
})

module.exports = router;