const getDB = require("../../db/getDB");
const { validateSchema } = require("../../helpers");
const idMedSchema = require("../../schemas/idMedSchema");
const addUnits = async (req, res, next) => {
  let connection;
  try {
    connection = await getDB();

    // Validamos los datos que recuperamos en el cuerpo de la petición con el schema de idMedSchema
    validateSchema(idMedSchema, req.params);

    // Recuperamos el id del usuario
    const idUserAuth = req.userAuth.id;

    // Destructuramos el id de la medicina de los path params
    const { idMed } = req.params;

    // Comprobamos las unidades de la medicina
    const [units] = await connection.query(
      `SELECT Units FROM medicinas WHERE id = ? AND idUser = ?`,
      [idMed, idUserAuth]
    );

    const TotUnits = units[0].Units + 1;

    await connection.query(
      ` UPDATE medicinas SET Units = ? WHERE id = ? AND idUser = ?`,
      [TotUnits, idMed, idUserAuth]
    );

    res.send({
      status: "ok",
      message: "Se le ha Añadido una unidad del medicamento",
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = addUnits;
