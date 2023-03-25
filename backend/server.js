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

/*   ### Controladores  Med ###  */

const listMed = require("./controllers/Med/listMed");
const newMed = require("./controllers/Med/newMed");
const editMed = require("./controllers/Med/editMed");
const deleteMed = require("./controllers/Med/deleteMed");
const addUnits = require("./controllers/Med/addUnits");
const delUnits = require("./controllers/Med/delUnits");

/*   ### Controladores  Users ###  */

const loginUser = require("./controllers/users/loginUser");
const newUser = require("./controllers/users/newUser");
const deleteUser = require("./controllers/users/deleteUser");

/*   ### Endpoints Med ###  */

// Registrar nueva Medicina
app.post("/newMed", isUser, newMed);

// Listar todas las Medicinas
app.get("/listMed", listMed);

// Editar una Medicina
app.put("/EditMed/:idMed", isUser, canEditMed, editMed);

// Borrar una Medicina
app.delete("/DelMed/:idMed", deleteMed);

// Añadir una unidad a la medicina
app.post("/addUnits/:idMed", isUser, addUnits);

// Borrar una unidad de la medicina
app.post("/delUnits/:idMed", isUser, delUnits);

/*   ### Endpoints Users ###  */

// Registro de usuario
app.post("/register", newUser);

// Login de usuario
app.post("/login", loginUser);

// Borrar un usuario
app.delete("/user", isUser, deleteUser);

// Importamos las variables de entorno que hemos creado para la conexión
const { Port } = process.env;

// Middleware de validación de usuario
const { isAuth, isUser } = require("./middlewares/isAuth");
const canEditMed = require("./middlewares/canEditMed");

//Middleware por el qu pasa todas las peticiones
app.use(isAuth);

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
