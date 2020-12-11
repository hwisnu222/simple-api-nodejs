const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// parse application/json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// call routes
const routes = require("./routes");
routes(app);

// create server
app.listen(3000, () => {
  console.log("Server running at port 3000");
});
