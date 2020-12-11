"use strict";

// create head for response 200 ok
exports.ok = function (values, res) {
  let data = {
    status: 200,
    error: null,
    values: values,
  };
  res.json(data);
  res.end();
};
