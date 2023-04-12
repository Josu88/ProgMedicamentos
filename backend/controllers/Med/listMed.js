/* 
    Controlador para Mostrar las  medicinas de un Laboratorio
*/

//Guardamos la conexion con la base de datos en una variable
const getDB = require("../../db/getDB");

// Creamos la funcion lita de Medicinas
const listMed = async (req, res, next) => {
  let connection;

  try {
    //Creamos la conexion con la base de datos
    connection = await getDB();

    let sqlQuery = `SELECT id,Lab,Composition,Name,Units,idUser FROM Medicinas ORDER BY id DESC`;

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
