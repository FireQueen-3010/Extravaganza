const express = require("express");
require("./Database/mongoose");
const userRouter = require("./Routers/user");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); //automatically parses incoming data
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is on port " + port);
});
