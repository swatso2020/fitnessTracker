const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/public/html/index.html"));
  });
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/public/html/exercise.html"));
  });
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/public/html/stats.html"));
  });
};