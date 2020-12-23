const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

// parse application/json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// call routes
const routes = require("./routes");
routes(app);

// register auth menu from index
app.use("/auth", require("./middleware"));

// create server
app.listen(3000, () => {
  console.log("Server running at port 3000");
});
