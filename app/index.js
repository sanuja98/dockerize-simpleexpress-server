import express from "express";
import bodyParser from "body-parser";
import * as mongoose from "mongoose";
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config()
// const mongoose = require("mongoose")



import usersRoutes from "./routes/users.js";

// import usersLib from "./models/user.js"
const mongoURL = process.env.MONGO_URL
// const mongoURL = '`mongodb://localhost:27017/express-mongoose'
mongoose.connect(mongoURL, {useNewUrlParser: true}).then(() => {

  const app = express();
  const PORT = process.env.PORT;
  app.use(cors())
  app.use(bodyParser.json());
  
  app.use("/users", usersRoutes);
  
  app.get("/usersLib", async (req, res) => {
    // const userList = await usersLib.find();
  
    // res.send({data: userList})
  
    console.log("[TEST]!");
  
    res.send("Hellow from homepage");
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
  });
  
  // mongoose.connection.on('connected', function(){
  //   console.log("connected")
  // });
  // mongoose.connection.on('error', function(){
  //   console.log("error")
  
  // });
  // mongoose.connection.on('disconnected', function(){
  //   console.log("disconnected")
  
  // });

})

// mongoose.connection.on('error', function (err) {
//   // Do something

//  });



