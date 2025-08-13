async function testReturnData(req, res) {
  console.log(req.body);
  res.status(200).json({ message: "Data received", yourData: req.body });
}

async function testGet(req, res) {
  res.status(200).json({
    message: "Hello from Express",
    status: "GOOD",
  });
}

module.exports = {
  testReturnData,
  testGet,
};
