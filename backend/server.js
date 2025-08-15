const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
app.use(cors()); // TODO: change after production to url, right now accepts every origin
app.use(express.json());

const testRoute = require("./modules/test/routes");
const contactRoute = require("./modules/contact/routes");

app.use("/test", testRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
