const { Router } = require('express');
const { Activities, Country } = require("../db.js");
const axios = require("axios");
const router = Router();
const { Op } = require("sequelize");

const getCountry = async () => {
    try {
        const { data } = await axios.get('https://restcountries.com/v3/all');

        const country = data.map((c) => {
            return {
                id: c.cca3,
                name: c.name.common,
                image: c.flags[1],
                continent: c.continents[0],
                capital: c.capital ? c.capital[0] : "No tiene capital",
                subregion: c.subregion,
                area: c.area,
                population: c.population,
            };
        });

        for (let i = 0; i < country.length; i++) {
            await Country.create({
                id: country[i].id,
                name: country[i].name,
                image: country[i].image,
                continent: country[i].continent,
                capital: country[i].capital,
                subregion: country[i].subregion,
                area: country[i].area,
                population: country[i].population,
            });
        }

        // await Country.bulkCreate(country);
    } catch (error) {
        console.log(error)
    }
}

router.get('/', async(req, res, next) => {
    const db = await Country.findAll();
    const { name } = req.query;

    if (name) {
        try {
            const countryName = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    }
                },
                include: [Activities],
            })

            if (countryName.length === 0) {
                // res.status(404).send("No existe el pais.");
                res.send([]);
            } else {
                res.send(countryName)
            }
        } catch (error) {
            next(error)
        }
    } else {
        try {
            // Mi condicion es si, mi base de datos no tiene algun elemento
            if (db.length === 0) {
                await getCountry();
                const db = await Country.findAll();
                res.status(200).send(db);
            } else {
                res.status(200).send(db)
            }
            
        } catch (error) {
            next(error)
        }
    }
})

router.get('/:idPais', async (req, res, next) => {
    const id = req.params.idPais.toUpperCase();

    try {
        const paisId = await Country.findByPk(id, {
            include: Activities,
        }) 

        if (paisId) {
            res.status(200).send(paisId);
        } else {
            res.status(404).send("No existe el pais.");
        }
    } catch (error) {
        next(error);
    }
})

module.exports = router;