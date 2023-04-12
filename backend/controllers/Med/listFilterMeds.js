/* 
    Controlador para Mostrar todas las medicinas  filtradas por Laboratorio 
*/

const getDB = require("../../db/getDB");
const { validateSchema } = require("../../helpers");
const filterMedSchema = require("../../schemas/filterMedSchema");

//Guardamos la conexion con la base de datos en una variable

// Creamos la funcion listas noticias
const listFilterMeds = async (req, res, next) => {
  let connection;

  try {
    //Creamos la conexion con la base de datos
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de newsSchema
    await validateSchema(filterMedSchema, req.query);

    // Obtenemos los campos necesarios del req.body
    const { Lab } = req.query;

    // Recuperamos los datos de las medicinas guardadas en la base de datos
    const [meds] = await connection.query(
      `SELECT *
              FROM Medicinas
             WHERE Lab = ? ORDER BY id DESC`,
      [Lab]
    );

    // Respondemos con las medicinas del usuario
    res.send({
      status: "Ok",
      message: "¡Lista de Medicinas!",
      data: meds,
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

//Exportamos la funcion
module.exports = listFilterMeds;
