const crypto = require("crypto");
require("dotenv").config();

// Función que genera un código aleatorio para validar al usuario
function generateRandomCode(length) {
  return crypto.randomBytes(length).toString("hex");
}

// Funcion que genera un error
function generateError(message, code) {
  const error = new Error(message);
  error.httpStatus = code;
  return error;
}

// Funcion que valida el esquema que se envíe
async function validateSchema(schema, data) {
  try {
    // Intenta validar los datos con el schema que pasemos por argumento
    await schema.validateAsync(data);
  } catch (error) {
    // Si se captura algun error que surja en el schema, se asigna el codigo 400 de error
    error.httpStatus = 400; // Bad Request
    throw error;
  }
}

// Exportamos las funciones
module.exports = {
  generateError,
  generateRandomCode,
  validateSchema,
};
