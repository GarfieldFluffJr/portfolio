const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Global middleware
let corsWL = ["https://www.louiefatooey.space"];
if (process.env.LOCAL_ENV === "development") {
  corsWL = [...corsWL, "http://localhost:5173/"];
}

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (corsWL.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
app.use(express.json());

const testRoute = require("./modules/test/routes");
const contactRoute = require("./modules/contact/routes");

app.use("/test", testRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
