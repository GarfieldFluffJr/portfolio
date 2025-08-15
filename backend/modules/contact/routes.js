const express = require("express");
const contactRouter = express.Router();

const rateLimit = require("express-rate-limit");
const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 1 day
  max: 10,
  message:
    "You have reached the daily limit for sending emails. Please try again tomorrow.",
});

const { sendEmail } = require("./controller");

contactRouter.post("/send", rateLimiter, sendEmail);

module.exports = contactRouter;
