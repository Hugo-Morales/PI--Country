const { STRING, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    image:{
      type: STRING,
      allowNull: false,
    },
    continent: {
      type: STRING,
      allowNull: false,
    },
    capital: {
      type: STRING,
      allowNull: false,
    },
    subregion: {
      type: STRING,
    },
    area: {
      type: STRING,
    },
    population: {
      type: INTEGER,
    }
  }, {
    timestamps: false
  });
};

// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población