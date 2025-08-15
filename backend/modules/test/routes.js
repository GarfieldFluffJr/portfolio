const express = require("express");
const testRouter = express.Router();

const { testReturnData, testGet } = require("./controller");

testRouter.post("/return-data", testReturnData);
testRouter.get("/get-data", testGet);

module.exports = testRouter;
