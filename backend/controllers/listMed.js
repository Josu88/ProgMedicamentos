/* 
    Controlador para Mostrar las  medicinas de un Laboratorio
*/

//Guardamos la conexion con la base de datos en una variable
const getDB = require("../db/getDB");
const { validateSchema } = require("../helpers");
const filterMedSchema = require("../schemas/filterMedSchema");

// Creamos la funcion lita de Medicinas
const listMed = async (req, res, next) => {
  let connection;

  try {
    //Creamos la conexion con la base de datos
    connection = await getDB();

    let sqlQuery = `SELECT id,Lab,Composition,Name,Units FROM Medicinas`;

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de newsSchema
    await validateSchema(filterMedSchema, req.query);

    // Obtenemos los campos necesarios del req.body
    const { Lab } = req.query;

    if (Lab) {
      // Recuperamos los datos de las noticias guardadas en la base de datos
      sqlQuery += " WHERE Lab = ?";
    }

    sqlQuery += " ORDER BY id DESC";

    // Recuperamos los datos de las noticias guardadas en la base de datos
    const [med] = await connection.query(sqlQuery);

    // Respondemos con las noticias del usuario
    res.send({
      status: "Ok",
      message: "¡Lista de Medicinas!",
      data: med,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

//Exportamos la funcion
module.exports = listMed;
