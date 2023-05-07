const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Yasin", email: "yasin@gmail.com" },
  { id: 2, name: "Arafat", email: "arafat@gmail.com" },
  { id: 3, name: "Hasib", email: "hasib@gmail.com" },
];

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

// post API
app.post("/users", (req, res) => {
  console.log("hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
