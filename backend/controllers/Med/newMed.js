/* 
    Controlador para insertar nueva Medicina
*/

// Guardamos la conexion con la base de datos en una variable

const getDB = require("../../db/getDB");
const { validateSchema } = require("../../helpers");
const newMedSchema = require("../../schemas/newMedSchema");

//Creamos la funcion crear una Medicina
const newMed = async (req, res, next) => {
  let connection;

  try {
    // Creamos una conexion con la base de datos
    connection = await getDB();

    // Recuperamos el id del usuario logueado
    const idUserAuth = req.userAuth.id;

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de newMedSchema
    await validateSchema(newMedSchema, req.body);

    // Destructuramos los datos de la noticia del cuerpo de la peticion
    const { Lab, Composition, Name, Units } = req.body;

    // Insertamos los datos de la noticia en la base de datos
    const [data] = await connection.query(
      `
            INSERT INTO Medicinas(Lab,Composition,Name,Units,idUser)
            VALUES (?, ?, ?, ?,?)
        `,
      [Lab, Composition, Name, Units, idUserAuth]
    );

    // Respondemos con las datos de la Medicina insertada
    res.send({
      status: "Ok",
      message: "¡Medicina creada correctamente!",
      data: {
        id: data.insertId,
        Lab: Lab,
        Composition: Composition,
        Name: Name,
        Units: Units,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

// Exportamos la funcion
module.exports = newMed;
