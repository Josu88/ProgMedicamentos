const getDB = require("../db/getDB");
const { validateSchema } = require("../helpers");
const idMedSchema = require("../schemas/idMedSchema");
const delUnits = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de idMedSchema
    validateSchema(idMedSchema, req.params);

    // Destructuramos el id de la medicina de los path params
    const { idMed } = req.params;

    // Comprobamos las unidades de la medicina
    const [units] = await connection.query(
      `SELECT Units FROM medicinas WHERE id = ?`,
      [idMed]
    );

    const TotUnits = units[0].Units - 1;

    await connection.query(` UPDATE medicinas SET Units = ? WHERE id = ?`, [
      TotUnits,
      idMed,
    ]);

    res.send({
      status: "ok",
      message: "Se le ha Borrado una unidad del medicamento",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = delUnits;
