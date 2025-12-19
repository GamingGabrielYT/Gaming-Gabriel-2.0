const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();
const SECRET = "jwt_secret_key";

// SIGNUP
router.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = "INSERT INTO accounts (email, password) VALUES (?, ?)";
  db.query(sql, [name, email, hashedPassword], (err) => {
    if (err) return res.status(400).json({ msg: "User already exists" });
    res.json({ msg: "Signup successful" });
  });
});

// LOGIN
router.post("/sign-in", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM accounts WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (result.length === 0)
      return res.status(401).json({ msg: "Invalid credentials" });

    const user = result[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  });
});

module.exports = router;