const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const cors = require("cors");

// Creamos el servidor
const app = express();

// Middleware para cors
app.use(cors());

// Deserializamos el body en formato raw
app.use(express.json());

// Middleware de Morgan para obtener más información sobre cada una de las peticiones
app.use(morgan("dev"));

// Middleware para leer el body en formato form-data (para leer archivos e imágenes)
// instalación -> npm i express-fileupload
app.use(fileUpload());

/*   ### Controladores ###  */

const listMed = require("./controllers/listMed");
const newMed = require("./controllers/newMed");
const editMed = require("./controllers/editMed");
const deleteMed = require("./controllers/deleteMed");

/*   ### Endpoints ###  */

// Registrar nueva Medicina
app.post("/newMed", newMed);

// Listar todas las Medicinas
app.get("/listMed", listMed);

// Editar una Medicina
app.put("/EditNews/:idMed", editMed);

// Borrar una Medicina
app.delete("/DelNews/:idMed", deleteMed);

// Importamos las variables de entorno que hemos creado para la conexión
const { Port } = process.env;

/*   ### Middlewares ###  */

// Middleware de Error
app.use((error, req, res, _) => {
  console.error(error);

  res.status(error.httpStatus || 500);

  res.send({
    status: "Error",
    message: error.message,
  });
});

// Middleware de Not Found
app.use((req, res) => {
  res.status(404);

  res.send({
    status: "Error",
    message: "Not found",
  });
});

// Ponemos el servidor a la escucha
app.listen(Port, () => {
  console.log(`Server listening at http://localhost:${Port}`);
});
