const getDB = require("./getDB");

async function main() {
  // Creamos una variable para guardar la conexión
  let connection;

  try {
    // Abrimos la conexion a la bbdd
    connection = await getDB();

    console.log("Eliminando tablas en caso que existan...");

    await connection.query(`DROP TABLE IF EXISTS Medicinas`);

    console.log("¡Tablas eliminadas!");

    console.log("Creando tablas...");

    await connection.query(
      `CREATE TABLE IF NOT EXISTS Medicinas (
                id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                Lab VARCHAR(100) ,
                Composition VARCHAR(100) ,
                Name VARCHAR(100) ,
                Units INT 
            )`
    );

    console.log("¡Tablas creadas!");

    console.log("¡Datos de prueba insertados con éxito!");
  } catch (error) {
    console.error(error.message);
  } finally {
    // Si existe una conexion a la base de datos, nos desconectamos
    if (connection) connection.release();
    process.exit();
  }
}

// Ejecutamos la funcion main
main();
