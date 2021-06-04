const sql = require("mssql");

const config2 = {
  server: "compilationerror2.database.windows.net",
  database: "Reto2",
  user: "compilationError2",
  password: "RetoCemex1",
  port: 1433,
  options: {
    encrypt: true,
  },
};

const poolPromise = new sql.ConnectionPool(config2)
  .connect()
  .then((pool) => {
    // console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));
module.exports = {
  config2,
  poolPromise,
};
