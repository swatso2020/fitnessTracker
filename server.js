const express = require("express");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/excercies", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
 app.use(express.static('public'));

console.log(app.use)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});





