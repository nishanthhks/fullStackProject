import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000, () => {
  console.log("Server working ✅");
});
