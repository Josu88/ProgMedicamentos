/* 
    Schema que controla el tipo de dato de los datos de las noticias
*/

const Joi = require("joi");

const newMedSchema = Joi.object().keys({
  Lab: Joi.string()
    .required()
    .min(1)
    .max(100)
    .regex(/[A-Za-z0-9]/)
    .error((errors) => {
      if (
        errors[0].code === "any.required" ||
        errors[0].code === "string.empty"
      ) {
        return new Error("¡El Lab es requerido!");
      } else {
        return new Error(
          "¡El Lab debe tener entre 3 y 30 caracteres de longitud!"
        );
      }
    }),
  Composition: Joi.string()
    .min(1)
    .max(100)
    .regex(/[A-Za-z0-9]/)
    .error((errors) => {
      if (
        errors[0].code === "any.required" ||
        errors[0].code === "string.empty"
      ) {
        return new Error("¡La Composition es requerida!");
      } else {
        return new Error(
          "¡La Composition debe tener entre 10 y 50 caracteres de longitud!"
        );
      }
    }),

  Name: Joi.string()
    .min(1)
    .max(100)
    .regex(/[A-Za-z0-9]/)
    .error((errors) => {
      if (
        errors[0].code === "any.required" ||
        errors[0].code === "string.empty"
      ) {
        return new Error("¡La Name es requerida!");
      } else {
        return new Error(
          "¡La Name debe tener entre 10 y 100 caracteres de longitud!"
        );
      }
    }),

  Units: Joi.number()
    .required()
    .positive()
    .integer()
    .min(1)
    .max(999)
    .error((errors) => {
      if (
        errors[0].code === "any.required" ||
        errors[0].code === "number.empty"
      ) {
        return new Error("¡Las Units son requeridas!");
      } else {
        return new Error("¡Las Units deben ser entre 1 y 999!");
      }
    }),
});

module.exports = newMedSchema;
