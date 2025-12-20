const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const app = express();

const mailRoutes = require("./routes/mail");
app.use(cors());
app.use(express.json());

app.use("/api/mail", mailRoutes);








app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html")
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});