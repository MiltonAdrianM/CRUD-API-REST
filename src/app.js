const express = require("express");
const app = express();

//registro de solicitudes HTTP
const morgan = require("morgan");
//acceder a los datos
const bodyParser = require("body-parser");

//setting
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

//routes
require("./routes/routes")(app);

app.listen(app.get("port"), () => {
  console.log("server on port 3000");
});
