const express = require("express");
const contactRouter = express.Router();

const { sendEmail } = require("./controller");

contactRouter.post("/send", sendEmail);

module.exports = contactRouter;
