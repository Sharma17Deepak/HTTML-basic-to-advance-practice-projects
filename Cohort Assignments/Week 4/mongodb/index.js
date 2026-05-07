const express = require("express");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const bodyParser = require("body-parser");

//Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin",adminRouter);
app.use("/user",userRouter);

app.listen(3000,() => { console.log("Your server is running on port 3000")});