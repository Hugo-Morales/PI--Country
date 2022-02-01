const { STRING, ENUM, DECIMAL } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activities', {
        name: {
            type: STRING,
        },
        difficulty: {
            type: ENUM('1', '2', '3', '4', '5')
        },
        duration: {
            type: DECIMAL,
        },
        season: {
            type: ENUM('Summer','Autumn','Winter','Spring'),
        },
    }, {
        timestamps: false
    });
};

// - ID
// - Nombre
// - Dificultad (Entre 1 y 5)
// - Duración
// - Temporada (Verano, Otoño, Invierno o Primavera)