// Portfolio Application Server - Zaid Khan
const express = require("express");
const path = require("path");
const preloadables = require("./preloadables");
const app = express();
const port = process.env.PORT || process.env.port || 2022;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("pages/home", {
    preloadables,
  });
});
app.get("/work", (req, res) => {
  res.render("pages/work", {
    preloadables,
  });
});
app.get("/about", (req, res) => {
  res.render("pages/about", {
    preloadables,
  });
});
app.get("/playground", (req, res) => {
  res.render("pages/playground", {
    preloadables,
  });
});
app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    preloadables,
  });
});

app.get("/cv", (req, res) => {
  res.redirect("https://www.linkedin.com/in/zaid-khan-943376379");
});

app.get("/:invalid", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(
    `\x1b[32m Server listening at\x1b[0m`,
    `\x1b[4mhttp://localhost:${port}\x1b[0m`
  );
});

module.exports = app;
