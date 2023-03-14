/* 
    Schema que controla el tipo de dato del id de las Noticias
*/

const Joi = require('joi');

const idMedSchema = Joi.object().keys({
    idMed: Joi.number()
        .required()
        .positive()
        .integer()
        .min(1)
        .max(999)
        .error((errors) => {
            if (
                errors[0].code === 'any.required' ||
                errors[0].code === 'number.empty'
            ) {
                return new Error('¡El idMed es requerido!');
            } else {
                return new Error('¡El idMed debe ser entre 1 y 999!');
            }
        }),
});

module.exports = idMedSchema;
