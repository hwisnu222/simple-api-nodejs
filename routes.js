"use strict";
module.exports = function (app) {
  const myjson = require("./controller");

  // routes
  app.route("/").get(myjson.index);
  app.route("/view").get(myjson.viewAllData);
  app.route("/view/:id").get(myjson.viewStudentById);
  app.route("/add").post(myjson.addStudentData);
  app.route("/update").put(myjson.changeStudentData);
  app.route("/delete").delete(myjson.deleteStudent);
};
