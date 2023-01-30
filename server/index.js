//"C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --dbpath="c:\delta\db"
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const tasks = require("./routes/router");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})


app.use("/api/tasks", tasks);


app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});