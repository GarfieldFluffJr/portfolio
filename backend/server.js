const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
app.use(cors()); // TODO: change after production to url, right now accepts every origin
app.use(express.json());

const testRoute = require("./modules/test/routes");

app.use("/test", testRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
