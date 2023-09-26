const express = require("express");
const app = express();
const googleDoc = require("./googleDocs/googleUtilty");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("Welcome To Troubleshooting Bot");
});


app.use("/googleDoc", googleDoc);


module.exports = app;
