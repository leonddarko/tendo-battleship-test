import express from "express";

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.route("/").get((req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`);
});
