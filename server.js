require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/excercies", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(express.static('public'));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});





