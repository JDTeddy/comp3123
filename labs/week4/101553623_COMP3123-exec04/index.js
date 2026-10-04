const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

// Serve static files from /public (instruction.html -> /instruction.html)
app.use(express.static(path.join(__dirname, "public")));

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname=
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Jared-Ian";
  const lastname = req.query.lastname || "Duldulao";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users (expects an array of { firstname, lastname })
app.post("/users", (req, res) => {
  if (!Array.isArray(req.body)) {
    return res.status(400).json({ error: "Request body must be a JSON array" });
  }
  res.json(req.body);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));