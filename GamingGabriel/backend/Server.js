const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html")
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});