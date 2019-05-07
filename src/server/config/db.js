const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://admin:admin1234@ds147890.mlab.com:47890/tradersplanet'
//const MONGO_URL = 'mongodb://localhost:27017/tradersplanet'

mongoose.connect(MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log(`Conectando a la base de datos --> ${MONGO_URL}`);
});
mongoose.connection.on("error", err => {
  console.log(
    `Error al conectar con la base de datos --> ${JSON.stringify(err)}`
  );
});
mongoose.connection.on("disconnected", () => {
  console.log("Desconectando de la base de datos");
});
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    /*logger.warn("Desconectando de la base de datos al cerrar la aplicación");*/
    console.log("Desconectando de la base de datos al cerrar la aplicación");
    process.exit(0);
  });
});
