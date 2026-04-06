const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySql@2026#Secure",
    database: "event_db"
});

db.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }
});

app.post("/register", (req, res) => {
    const { full_name, email, event_name } = req.body;

    const sql = "INSERT INTO registrations (full_name, email, event_name) VALUES (?, ?, ?)";

    db.query(sql, [full_name, email, event_name], (err, result) => {
        if (err) {
            res.send("Error");
        } else {
            res.send("Registration successful");
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});