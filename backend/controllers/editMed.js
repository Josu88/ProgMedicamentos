const getDB = require("../db/getDB");
const { generateError, validateSchema } = require("../helpers");
const newMedSchema = require("../schemas/newMedSchema");
const idMedSchema = require("../schemas/idMedSchema");

const editMed = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de newMedSchema
    await validateSchema(newMedSchema, req.body);

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de idMedSchema
    await validateSchema(idMedSchema, req.params);

    // Recuperamos el id de la noticia de los path params
    const { idMed } = req.params;

    // Destructuramos el req.body
    const { Lab, Composition, Name, Units } = req.body;

    // Seleccionamos los datos antiguos
    const [med] = await connection.query(
      `
        SELECT Lab, Composition, Name, Units FROM Medicinas WHERE id = ?
        `,
      [idMed]
    );
    if (med.length < 1) {
      throw generateError("La Medicina que a modificado no existe", 400);
    }
    await connection.query(
      `
        UPDATE Medicinas SET Lab = ?, Composition = ?, Name = ?, Units = ? WHERE id = ?
        `,
      [
        Lab || med[0].Lab,
        Composition || med[0].Composition,
        Name || med[0].Name,
        Units || med[0].Units,
        idMed,
      ]
    );
    res.send({
      status: "ok",
      message: "Medicinas modificada con éxito",
      data: [
        {
          Lab: med[0].Lab,
          Composition: med[0].Composition,
          Name: med[0].Name,
          Units: med[0].Units,
        },
      ],
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};
module.exports = editMed;
