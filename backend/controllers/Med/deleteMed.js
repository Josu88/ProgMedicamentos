const getDB = require("../../db/getDB");
const { validateSchema } = require("../../helpers");
const idMedSchema = require("../../schemas/idMedSchema");

const deleteMed = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de idMedSchema
    validateSchema(idMedSchema, req.params);

    // Destructuramos el id de la noticia
    const { idMed } = req.params;

    // Eliminamos las fotos de la noticia en la base de datos
    await connection.query(
      `
        DELETE FROM Medicinas WHERE id = ?
        `,
      [idMed]
    );

    res.send({
      status: "ok",
      message: "Medicina eliminada con éxito",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};
module.exports = deleteMed;
