const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
app.use(cors()); // TODO: change after production to url, right now accepts every origin
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.json({ message: "Data received", yourData: req.body });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
