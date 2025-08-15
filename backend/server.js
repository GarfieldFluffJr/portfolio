const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
let corsWL = ["https://www.louiefatooey.space"];
if (process.env.LOCAL_ENV === "development") {
  corsWL = [...corsWL, "http://localhost:5173"];
}

app.use(
  cors({
    origin: corsWL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.set("trust proxy", 1);
app.use(express.json());
app.options("*", cors());

const testRoute = require("./modules/test/routes");
const contactRoute = require("./modules/contact/routes");

app.use("/test", testRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
